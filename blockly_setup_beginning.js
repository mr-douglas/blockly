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
        consoleTextArea = document.getElementById("skulpt-console")
        consoleTextArea.readOnly = false;
        requiredConsoleText = consoleTextArea.value;
        var inputText = "This shouldn't appear!";
        inputText = new Promise(
                                  function (resolve, reject){
                                                             document.getElementById("skulpt-console").addEventListener("keyup", 
                                                                                                                                function consoleEnterListener(event){
                                                                                                                                  if(event.keyCode == 13){
                                                                                                                                    consoleTextArea = document.getElementById("skulpt-console")
                                                                                                                                    consoleTextArea.removeEventListener("keyup", consoleEnterListener);
                                                                                                                                    consoleTextArea.readOnly = true;
                                                                                                                                    resolve(consoleTextArea.value.substring(requiredConsoleText.length,consoleTextArea.value.length));
                                                                                                                                  }
                                                                                                                                }
                                                                                                                      );
                                                            }
                               );
        return inputText;
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
          Sk.configure({inputfun: inputf,                                           
                        output:outf,
                        read:builtinRead,
                        __future__: Sk.python3}); 
          (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'skulpt-canvas';
          var myPromise = Sk.misceval.asyncToPromise(function() {
            skulptIsRunning  = true;
            return Sk.importMainWithBody("<stdin>", false, prog, true);
          });
          myPromise.then(function(mod) {
            console.log('Finished running');
            skulptIsRunning = false;
          },
            function(err) {
            outf(err.toString());
            alert(err.toString());
            console.log(err.toString());
          });
          consoleTextArea.focus();
        }
      }