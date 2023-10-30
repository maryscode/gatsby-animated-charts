/* eslint-disable */
export const Validations = {
  required: {
    pattern: /^[\S\s]+$/i,
    message: "Required field",
  },
  text: {
    pattern: false,
    message: "This field cannot be blank.",
  },
  alpha: {
    pattern: /^[a-zA-Z]+$/,
    message: "Only letters allowed",
  },
  alpha_numeric: {
    pattern: /^[a-zA-Z0-9]+$/,
    message: "Only alphanumeric characters allowed",
  },
  integer: {
    pattern: /^[-+]?\d+$/,
    message: "Must be an integer",
  },
  phone: {
    pattern: /^(1?)(?:((\s?\(\d{3}\)\s?|\s?\d{3}\s?)-?\d{3}\s?-?\d{4}$))/,
    message: "Invalid phone number",
  },
  card: {
    pattern:
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
    message: "Invalid card number",
  },
  cvv: {
    pattern: /^([0-9]){3,4}$/,
    message: "Invalid CVV",
  },
  email: {
    pattern:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email address should follow the format user@domain.com.",
  },
  url: {
    pattern:
      /^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
    message: "Invalid url",
  },
  domain: {
    pattern: /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/, // abc.de
    message: "Invalid domain",
  },
  datetime: {
    pattern:
      /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
    message: "Invalid date time",
  },
  date: {
    pattern: /(0[1-9]|1[012])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](19|20)\d\d/, // YYYY-MM-DD
    message: "Invalid date",
  },
  time: {
    pattern: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/, // HH:MM:SS
    message: "Invalid time",
  },
  dateISO: {
    pattern: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
    message: "Invalid date ISO",
  },
  month_day_year: {
    pattern: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/, // MM/DD/YYYY
    message: "Invalid month day year",
  },
  day_month_year: {
    pattern: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/, // DD/MM/YYYY
    message: "Invalid day month year",
  },
  hex_color: {
    pattern: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/, // #FFF or #FFFFFF
    message: "Invalid hex color",
  },
  state: {
    pattern:
      /AL|Alabama|AK|Alaska|AZ|Arizona|AR|Arkansas|CA|California|CO|Colorado|CT|Connecticut|DE|Delaware|FL|Florida|GA|Georgia|HI|Hawaii|ID|Idaho|IL|Illinois|IN|Indiana|IA|Iowa|KS|Kansas|KY|Kentucky|LA|Louisiana|ME|Maine|MD|Maryland|MA|Massachusetts|MI|Michigan|MN|Minnesota|MS|Mississippi|MO|Missouri|MT|Montana|NE|Nebraska|NV|Nevada|NH|New Hampshire|NJ|New Jersey|NM|New Mexico|NY|New York|NC|North Carolina|ND|North Dakota|OH|Ohio|OK|Oklahoma|OR|Oregon|PA|Pennsylvania|RI|Rhode Island|SC|South Carolina|SD|South Dakota|TN|Tennessee|TX|Texas|UT|Utah|VT|Vermont|VA|Virginia|WA|Washington|WV|West Virginia|WI|Wisconsin|WY|Wyoming/,
    message: "Invalid state",
  },
  zipcode: {
    pattern: /^\d{5}(?:[-\s]\d{4})?$/,
    mattern: "Please enter a valid ZIP Code.",
  },
  agree: {
    pattern: false,
    message: "Please provide confirmation.",
  },
};
