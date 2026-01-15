const I18N = {
  en: {
    calculator: "Calculator",
    scientific: "Scientific",
    convert: "Convert",
    length: "Length",
    weight: "Weight",
    temp: "Temperature",
    time: "Time",
    currency: "Currency",
    enterValue: "Enter value"
  },

  karen: {
    calculator: "ဒွးနီၣ်ဂံၢ်",
    scientific: "စဲအ့ၣ်တၢ်ဒွး",
    convert: "လဲလိာ်နီၣ်ဂံၢ်",
    length: "အထီအယံၤ",
    weight: "တယၢၢ်",
    temp: "တၢ်ကိၢ်တၢ်ခုၣ်",
    time: "တၢ်ဆၢကတီၢ်",
    currency: "ကျိၣ်စ့",
    enterValue: "တီၢ်လီၤနီၣ်ဂံၢ်"
  }
};

function t(key) {
  return I18N[lang][key] || key;
}
