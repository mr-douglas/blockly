	  //To prevent accidentally leaving the page
	  window.addEventListener('beforeunload', (event) => {
		event.returnValue = `Are you sure you want to leave?`;
      });
	
      //For Blockly
      Blockly.HSV_SATURATION = 0.9;
      Blockly.HSV_VALUE = 0.7;
      
      var workspace;
      var codeMirrorEditor;
      var lastPythonFileName = "my_python_program"
      var lastBlocklyFileName = "my_blockly_program"
      //For Skulpt
      var requiredConsoleText = "";
      var skulptIsRunning = false;
      var pythonRunId = 0;                 // Goes up by 1 every time a program is run
      var waitingForInputListener = null;  // The console's Enter key listener while input() is waiting
      
      //Blockly Functions
      function updatePython() {
        if (workspace!=null)
        {
          codeMirrorEditor.setValue(Blockly.Python.workspaceToCode(workspace));
        }
      }
      
      
      function copyToClipboard() {
        var tempInput = document.createElement("textarea");
        generatedPython = Blockly.Python.workspaceToCode(workspace);
        var ev3String = "ev3 = EV3Brick()";
        if (generatedPython.includes(ev3String))
        {
          generatedPython = generatedPython.substring(generatedPython.indexOf(ev3String)+ev3String.length);
        }
        tempInput.value = generatedPython;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        document.getElementById("copied-alert").className = "alert";
        window.setTimeout(function() {document.getElementById("copied-alert").className = "hidden";}, 2000);
      }
      
      function saveToFile(contents, extension) {
        var lastFileName = "";
        if (extension=='.py'){
            lastFileName = lastPythonFileName;
          }
          else if (extension=='.blockly'){
            lastFileName = lastBlocklyFileName;
          }
		var programType = 'Blockly';
		if (extension=='.py')
		{
			programType = 'Python';
		}
		var fileNameToSaveAs = prompt("Enter a file name for your "+programType+" file", lastFileName);
        if (fileNameToSaveAs){
          if (extension=='.py'){
            lastPythonFileName = fileNameToSaveAs;
          }
          else if (extension=='.blockly'){
            lastBlocklyFileName = fileNameToSaveAs;
          }
          fileNameToSaveAs += extension;
          var textFileAsBlob = new Blob([ contents ], { type: 'text/plain' })
          var downloadLink = document.createElement("a");
          downloadLink.download = fileNameToSaveAs;
          downloadLink.innerHTML = "Download File";
          if (window.webkitURL != null) {
            // Chrome allows the link to be clicked without actually adding it to the DOM.
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
          } else {
            // Firefox requires the link to be added to the DOM before it can be clicked.
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
          }
          downloadLink.click();
          if (downloadLink.parentElement!=null){
            document.body.removeChild(downloadLink);
          }
        }
      }
      
      //Skulpt Functions
      function outf(text) { 
        var consoleTextArea = document.getElementById("skulpt-console"); 
        consoleTextArea.value = consoleTextArea.value + text;
        requiredConsoleText = consoleTextArea.value;
      }
      
      function inputf() {
        var consoleTextArea = document.getElementById("skulpt-console");
        stopWaitingForInput();
        consoleTextArea.readOnly = false;
        requiredConsoleText = consoleTextArea.value;
        return new Promise(function (resolve, reject) {
          waitingForInputListener = function (event) {
            if (event.keyCode == 13) {
              stopWaitingForInput();
              resolve(consoleTextArea.value.substring(requiredConsoleText.length, consoleTextArea.value.length));
            }
          };
          consoleTextArea.addEventListener("keyup", waitingForInputListener);
        });
      }

      // Stops listening for the answer to an input(). Used when the answer has been typed, and when
      // a new run starts while an old program was closed part-way through waiting for input().
      function stopWaitingForInput() {
        if (waitingForInputListener) {
          var consoleTextArea = document.getElementById("skulpt-console");
          consoleTextArea.removeEventListener("keyup", waitingForInputListener);
          consoleTextArea.readOnly = true;
          waitingForInputListener = null;
        }
      }
      
      function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
          throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
      }

      function runPython() {
        var unrunnableStrings = [
                                 'from pybricks import ev3brick as brick',
                                 'import gpiozero',
                                 "#You've added your own code"
                                ]
        var unrunnable = false;
        var prog = Blockly.Python.workspaceToCode(workspace); 
        for(var i = 0;i < unrunnableStrings.length;i++) {
          unrunnable = unrunnable || prog.includes(unrunnableStrings[i]);
        }
        if(unrunnable) {
          alert("Sadly, you won't be able to run that here. You'll need to copy or download the Python code.");
        }
        else
        {
          var needsConsole = prog.includes("#This program uses console I/O");
          var needsTurtle = prog.includes("import turtle");
          if (needsConsole && needsTurtle) {
            document.getElementById("skulpt-console").className = "both";
            document.getElementById("skulpt-canvas").className = "both";
          }
          else if(needsConsole){
            document.getElementById("skulpt-console").className = "console-only";
            document.getElementById("skulpt-canvas").className = "console-only";
          } else {
            document.getElementById("skulpt-console").className = "turtle-only";
            document.getElementById("skulpt-canvas").className = "turtle-only";
          }
          if (needsConsole || needsTurtle){
            document.getElementById("skulpt-container").className = "";
            document.getElementById("excluder").className = "";
          } else {
            alert("Your program won't produce any output");
          }
          var consoleTextArea = document.getElementById("skulpt-console");
          consoleTextArea.value = "";
          Sk.pre = "skulpt-console";
          // A program that was closed while it was still running (e.g. waiting for input()) is
          // replaced by this run: stop listening for its input, and stop it if it ever carries on.
          stopWaitingForInput();
          pythonRunId++;
          var thisRunId = pythonRunId;
          // stopPython() stops programs by setting a 1ms time limit. If the program was waiting for
          // input() it never reached that check, so the limit was left behind and made the next run
          // fail straight away ("TimeLimitError: You exited..."). Always start with no time limit.
          Sk.configure({inputfun: inputf,
                        output:outf,
                        read:builtinRead,
                        execLimit: Number.POSITIVE_INFINITY,
                        timeoutMsg: function() { return "Program exceeded run time limit."; },
                        __future__: Sk.python3});
          (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'skulpt-canvas';
          var myPromise = Sk.misceval.asyncToPromise(function() {
            skulptIsRunning  = true;
            return Sk.importMainWithBody("<stdin>", false, prog, true);
          }, {"*": function() {
            // Called whenever the program pauses (input(), sleep(), etc.): end it if it's been replaced
            if (thisRunId !== pythonRunId) { throw new Error("Replaced by a newer run"); }
          }});
          myPromise.then(function(mod) {
            console.log('Finished running');
            if (thisRunId === pythonRunId) { skulptIsRunning = false; }
          },
            function(err) {
            if (thisRunId !== pythonRunId) { return; }  // An old program that was replaced - ignore it
            skulptIsRunning = false;
            outf(err.toString());
            alert(err.toString());
            console.log(err.toString());
          });
          consoleTextArea.focus();
        }
      }