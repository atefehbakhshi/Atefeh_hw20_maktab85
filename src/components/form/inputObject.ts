const inputObject = {
  name: {
    id: "name",
    text: "نام",
    type: "text",
    placeHolder: "",
    errText: "نام وارد شده نامعتبر است.",
  },
  email: {
    id: "email",
    text: "ایمیل",
    type: "email",
    placeHolder: "",
    errText: "ایمیل وارد شده نامعتبر است.",
  },
  position: {
    id: "cooperation-position",
    text: "موقعیت همکاری",
    type: "text",
    placeHolder: "موقعیت همکاری مدنظر خود را وارد کنید...",
    errText: "موقعیت همکاری وارد شده نامعتبر است",
  },
  phone: {
    id: "phone",
    text: "شماره تماس",
    type: "number",
    placeHolder: "",
    errText: "شماره وارد شده نامعتبر است.",
  },
  resume: {
    id: "resum",
    text: "فایل رزومه (با فرمت های .png, jpg یا pdf)",
    type: "file",
    placeHolder: "No file chosen",
    accepTedFormat: ".jpg,.png,.pdf",
  },
};

export default inputObject;
