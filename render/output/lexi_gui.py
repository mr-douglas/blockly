import tkinter
import tkinter.ttk
import tkinter.filedialog
import tkinter.messagebox

file_path = None
question = None
main_window = None
question_entry = None
file_label = None
title_label = None
upload_button = None
generate_button = None
question_label = None
submit_button = None

def upload_file():
  global file_path, question, main_window, question_entry, file_label, title_label, upload_button, generate_button, question_label, submit_button
  file_path = tkinter.filedialog.askopenfilename(title='Choose your slides or lesson video')
  if file_path == '':
    file_label.config(text='No file selected')
  else:
    file_label.config(text=('File: ' + str(file_path)))

#You've added your own code

def generate_notes():
  global file_path, question, main_window, question_entry, file_label, title_label, upload_button, generate_button, question_label, submit_button
  if file_path == '':
    tkinter.messagebox.showerror(title='Error', message='Please upload a file first.')
  else:
    # Later: send the slide text to the LLM and show its summary here
    notes_text.config(state='normal')
    notes_text.delete('1.0', tkinter.END)
    notes_text.insert(tkinter.END, 'SUMMARY (example)\n')
    notes_text.insert(tkinter.END, '- Key point 1\n- Key point 2\n- Key point 3\n\n')
    notes_text.config(state='disabled')

def submit_question():
  global file_path, question, main_window, question_entry, file_label, title_label, upload_button, generate_button, question_label, submit_button
  question = question_entry.get()
  if question == '':
    tkinter.messagebox.showerror(title='Error', message='Please type a question first.')
  else:
    notes_text.config(state='normal')
    notes_text.insert(tkinter.END, 'You: ' + question + '\n')
    # Later: send the question to the LLM and show its answer here
    notes_text.insert(tkinter.END, 'AI: (the answer will appear here)\n\n')
    notes_text.see(tkinter.END)
    notes_text.config(state='disabled')
    question_entry.delete(0, tkinter.END)


file_path = ''
main_window = tkinter.Tk()
main_window.title('Lesson Notes Summariser')
main_window.geometry(str(700) + "x" + str(550))
title_label = tkinter.ttk.Label(main_window)
title_label.config(text='Lesson Notes Summariser')
title_label.config(font=('Arial', 20))
title_label.pack()
upload_button = tkinter.ttk.Button(main_window)
upload_button.config(text='Upload PPT/PDF/Video')
upload_button.config(command=upload_file)
upload_button.pack()
file_label = tkinter.ttk.Label(main_window)
file_label.config(text='No file selected')
file_label.pack()
generate_button = tkinter.ttk.Button(main_window)
generate_button.config(text='Generate notes')
generate_button.config(command=generate_notes)
generate_button.pack()
# Scrollable display area for the notes and conversation
display_frame = tkinter.ttk.Frame(main_window)
display_frame.pack(fill='both', expand=True, padx=10, pady=5)
scrollbar = tkinter.ttk.Scrollbar(display_frame)
scrollbar.pack(side='right', fill='y')
notes_text = tkinter.Text(display_frame, wrap='word', yscrollcommand=scrollbar.set)
notes_text.pack(side='left', fill='both', expand=True)
scrollbar.config(command=notes_text.yview)
notes_text.config(state='disabled')
question_label = tkinter.ttk.Label(main_window)
question_label.config(text='Ask a follow-up question:')
question_label.pack()
question_entry = tkinter.ttk.Entry(main_window)
question_entry.config(width=60)
question_entry.pack()
submit_button = tkinter.ttk.Button(main_window)
submit_button.config(text='Submit')
submit_button.config(command=submit_question)
submit_button.pack()
main_window.mainloop()