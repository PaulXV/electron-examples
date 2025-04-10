import tkinter as tk

def open_window():
    root = tk.Tk()
    root.title("Finestra Tkinter")
    label = tk.Label(root, text="Ciao da Tkinter!")
    label.pack(padx=20, pady=20)
    root.mainloop()

if __name__ == '__main__':
    open_window()