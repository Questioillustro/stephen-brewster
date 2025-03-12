import tkinter as tk
from tkinter import ttk, messagebox
import sympy as sp
import math

class ModernScientificCalculator:
    def __init__(self, root):
        self.root = root
        self.root.title("Modern Scientific Calculator")
        self.root.geometry("450x750")
        self.root.configure(bg="#1E1E1E")
        
        # Variables
        self.expression = ""
        self.x = sp.Symbol('x')
        self.history = []
        self.current_base = 10
        
        # Custom styling
        self.style = ttk.Style()
        self.style.theme_use('clam')
        self.configure_styles()
        
        # UI Elements
        self.create_display()
        self.create_base_selector()
        self.create_buttons()
        
        # Bind hotkeys
        self.bind_hotkeys()
        
    def configure_styles(self):
        self.style.configure("TButton", 
                            font=('Segoe UI', 14),
                            padding=10,
                            background="#2D2D2D",
                            foreground="white",
                            borderwidth=0)
        self.style.map("TButton",
                      background=[('active', '#404040')],
                      foreground=[('active', 'white')])
        
        self.style.configure("Func.TButton",
                            background="#0078D4",
                            foreground="white")
        self.style.map("Func.TButton",
                      background=[('active', '#005EA6')])
        
        self.style.configure("Calc.TButton",
                            background="#505050")
        self.style.map("Calc.TButton",
                      background=[('active', '#606060')])
        
        self.style.configure("Disabled.TButton",
                            background="#3A3A3A",
                            foreground="#666666")

    def create_display(self):
        display_frame = tk.Frame(self.root, bg="#1E1E1E")
        display_frame.pack(pady=20, fill="x", padx=10)
        
        self.display = tk.Entry(display_frame, 
                              width=25, 
                              font=('Segoe UI', 24),
                              justify="right",
                              bg="#252526",
                              fg="white",
                              borderwidth=0)
        self.display.pack(fill="x", padx=5, pady=5)
        self.display.focus_set()
        
        self.decimal_helper = tk.Label(display_frame,
                                     text="Decimal: ",
                                     font=('Segoe UI', 12),
                                     bg="#1E1E1E",
                                     fg="#AAAAAA")
        self.decimal_helper.pack(anchor="w", pady=5)
        
        self.history_label = tk.Label(display_frame,
                                    text="History: ",
                                    font=('Segoe UI', 12),
                                    bg="#1E1E1E",
                                    fg="#AAAAAA")
        self.history_label.pack(anchor="w", pady=5)

    def create_base_selector(self):
        base_frame = tk.Frame(self.root, bg="#1E1E1E")
        base_frame.pack(pady=5, fill="x", padx=10)
        
        tk.Label(base_frame, text="Number Base:", font=('Segoe UI', 12), 
                bg="#1E1E1E", fg="white").pack(side="left", padx=5)
        
        self.base_var = tk.StringVar(value="10")
        base_options = [str(i) for i in range(1, 17)]
        self.base_dropdown = ttk.Combobox(base_frame, textvariable=self.base_var, 
                                        values=base_options, state="readonly", 
                                        width=5, font=('Segoe UI', 12))
        self.base_dropdown.pack(side="left")
        self.base_dropdown.bind("<<ComboboxSelected>>", self.update_base)

    def create_buttons(self):
        self.button_frame = tk.Frame(self.root, bg="#1E1E1E")
        self.button_frame.pack(expand=True, fill="both", padx=10)
        
        self.buttons = [
            ('sin', 'Func', 'F1'), ('cos', 'Func', 'F2'), ('tan', 'Func', 'F3'), 
            ('π', 'Func', 'p'), ('ln', 'Func', 'F4'), ('√', 'Func', 'F5'),
            ('7', '', '7'), ('8', '', '8'), ('9', '', '9'), 
            ('A', '', 'a'), ('B', '', 'b'), ('C', '', 'c'),
            ('4', '', '4'), ('5', '', '5'), ('6', '', '6'), 
            ('D', '', 'd'), ('E', '', 'e'), ('F', '', 'f'),
            ('1', '', '1'), ('2', '', '2'), ('3', '', '3'), 
            ('(', '', '('), (')', '', ')'), ('x', '', 'x'),
            ('0', '', '0'), ('.', '', '.'), ('+', '', '+'), 
            ('-', '', '-'), ('*', '', '*'), ('/', '', '/'),
            ('e', 'Func', 'e'), ('^', '', '^'), ('d/dx', 'Func', 'd'), 
            ('=', 'Calc', '= / Enter'), ('Clr', 'Calc', 'Del'), ('∫', 'Func', 'i')
        ]
        
        self.button_widgets = {}
        
        row = 0
        col = 0
        for (text, style, hotkey) in self.buttons:
            style_name = f"{style}.TButton" if style else "TButton"
            cmd = lambda x=text: self.click(x)
            
            btn_frame = tk.Frame(self.button_frame, bg=self.style.lookup(style_name, "background"))
            btn_frame.grid(row=row, column=col, padx=2, pady=2, sticky="nsew")
            
            btn_label = tk.Label(btn_frame, text=text, font=('Segoe UI', 14), 
                                fg="white", bg=self.style.lookup(style_name, "background"))
            btn_label.pack(expand=True)
            
            hotkey_label = tk.Label(btn_frame, text=hotkey, font=('Segoe UI', 8), 
                                  fg="#AAAAAA", bg=self.style.lookup(style_name, "background"))
            hotkey_label.pack(side="bottom", pady=(0, 2))
            
            self.button_widgets[text] = (btn_frame, btn_label, hotkey_label)
            
            for widget in (btn_frame, btn_label, hotkey_label):
                widget.bind("<Button-1>", lambda event, x=text: self.click(x))
                widget.bind("<Enter>", lambda event, s=style_name, t=text: 
                           [w.config(bg=self.style.lookup(s, "background", state=['active'])) 
                            for w in self.button_widgets[t]] if self.is_button_enabled(text) else None)
                widget.bind("<Leave>", lambda event, s=style_name, t=text: 
                           [w.config(bg=self.style.lookup(s, "background")) 
                            for w in self.button_widgets[t]] if self.is_button_enabled(text) else None)
            
            col += 1
            if col > 5:
                col = 0
                row += 1
                
        for i in range(6):
            self.button_frame.grid_rowconfigure(i, weight=1)
        for i in range(6):
            self.button_frame.grid_columnconfigure(i, weight=1)
        
        self.update_buttons()

    def update_base(self, event=None):
        old_base = self.current_base
        self.current_base = int(self.base_var.get())
        if self.expression and old_base != self.current_base:
            try:
                num_str = ''.join(c for c in self.expression if c in '0123456789ABCDEF')
                if num_str:
                    decimal_val = int(num_str, old_base)
                    new_val = hex(decimal_val)[2:].upper() if self.current_base == 16 else \
                             f"{decimal_val:o}" if self.current_base == 8 else \
                             f"{decimal_val:b}" if self.current_base == 2 else str(decimal_val)
                    self.expression = self.expression.replace(num_str, new_val)
                    self.display.delete(0, tk.END)
                    self.display.insert(0, self.expression)
            except ValueError:
                self.expression = ""
                self.display.delete(0, tk.END)
        self.update_buttons()
        self.update_decimal_helper()

    def is_button_enabled(self, text):
        if text in '0123456789ABCDEF':
            value = int(text, 16) if text in 'ABCDEF' else int(text)
            return value < self.current_base
        return True

    def update_buttons(self):
        for text, style, _ in self.buttons:
            frame, label, hotkey_label = self.button_widgets[text]
            style_name = f"{style}.TButton" if style else "TButton"
            if self.is_button_enabled(text):
                bg = self.style.lookup(style_name, "background")
                fg = "white"
                hotkey_fg = "#AAAAAA"
            else:
                bg = self.style.lookup("Disabled.TButton", "background")
                fg = "#666666"
                hotkey_fg = "#666666"
            frame.config(bg=bg)
            label.config(bg=bg, fg=fg)
            hotkey_label.config(bg=bg, fg=hotkey_fg)

    def update_decimal_helper(self):
        if self.current_base == 10 or not self.expression:
            self.decimal_helper.config(text="Decimal: ")
        else:
            try:
                num_str = ''.join(c for c in self.expression if c in '0123456789ABCDEF')
                if num_str:
                    decimal_val = int(num_str, self.current_base)
                    self.decimal_helper.config(text=f"Decimal: {decimal_val}")
                else:
                    self.decimal_helper.config(text="Decimal: ")
            except ValueError:
                self.decimal_helper.config(text="Decimal: Invalid")

    def bind_hotkeys(self):
        bindings = {
            '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
            '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
            'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F',
            '+': '+', '-': '-', '*': '*', '/': '/', '=': '=',
            '.': '.', '(': '(', ')': ')', '^': '^', 'p': 'π',
            '<F1>': 'sin', '<F2>': 'cos', '<F3>': 'tan', '<F4>': 'ln', '<F5>': '√',
            'x': 'x', 'i': '∫', 'd': 'd/dx', '<Return>': '='
        }
        for key, value in bindings.items():
            self.root.bind(key, lambda event, x=value: self.click(x) if self.is_button_enabled(x) else None)
        self.root.bind('<Delete>', lambda event: self.click('Clr'))

    def click(self, char):
        if not self.is_button_enabled(char):
            return
        
        if char == 'Clr':
            self.expression = ""
            self.display.delete(0, tk.END)
            self.update_decimal_helper()
            
        elif char == '=':
            try:
                expr = self.expression
                if self.current_base != 10:
                    num_str = ''.join(c for c in expr if c in '0123456789ABCDEF')
                    if num_str:
                        expr = expr.replace(num_str, str(int(num_str, self.current_base)))
                expr = expr.replace('π', str(math.pi))
                expr = expr.replace('e', str(math.e))
                expr = expr.replace('sin', 'math.sin')
                expr = expr.replace('cos', 'math.cos')
                expr = expr.replace('tan', 'math.tan')
                expr = expr.replace('ln', 'math.log')
                expr = expr.replace('√', 'math.sqrt')
                result = eval(expr)
                if self.current_base != 10 and isinstance(result, (int, float)) and result.is_integer():
                    result = hex(int(result))[2:].upper() if self.current_base == 16 else \
                            f"{int(result):o}" if self.current_base == 8 else \
                            f"{int(result):b}" if self.current_base == 2 else str(int(result))
                self.display.delete(0, tk.END)
                self.display.insert(0, str(result))
                self.history.append(f"{self.expression} = {result} (base {self.current_base})")
                self.history_label.config(text=f"History: {self.history[-1]}")
                self.expression = str(result)
                self.update_decimal_helper()
            except Exception as e:
                self.display.delete(0, tk.END)
                self.display.insert(0, "Error")
                self.expression = ""
                self.update_decimal_helper()
                
        elif char == 'd/dx':
            try:
                expr = sp.sympify(self.expression)
                derivative = sp.diff(expr, self.x)
                self.display.delete(0, tk.END)
                self.display.insert(0, str(derivative))
                self.history.append(f"d/dx({self.expression}) = {derivative}")
                self.history_label.config(text=f"History: {self.history[-1]}")
                self.expression = str(derivative)
                self.update_decimal_helper()
            except:
                self.display.delete(0, tk.END)
                self.display.insert(0, "Error")
                self.expression = ""
                self.update_decimal_helper()
                
        elif char == '∫':
            try:
                expr = sp.sympify(self.expression)
                integral = sp.integrate(expr, self.x)
                self.display.delete(0, tk.END)
                self.display.insert(0, str(integral))
                self.history.append(f"∫({self.expression})dx = {integral}")
                self.history_label.config(text=f"History: {self.history[-1]}")
                self.expression = str(integral)
                self.update_decimal_helper()
            except:
                self.display.delete(0, tk.END)
                self.display.insert(0, "Error")
                self.expression = ""
                self.update_decimal_helper()
                
        else:
            self.expression += str(char)
            self.display.delete(0, tk.END)
            self.display.insert(0, self.expression)
            self.update_decimal_helper()

def main():
    root = tk.Tk()
    app = ModernScientificCalculator(root)
    root.mainloop()

if __name__ == "__main__":
    main()