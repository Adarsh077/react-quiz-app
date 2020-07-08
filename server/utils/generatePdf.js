const pdf = require("html-pdf");
const html = require("../html/certificate");

const pdfOptions = {
  width: "12.2in",
  height: "8in", // allowed units: mm, cm, in, px
};

const generateCertificate = (name, perc) => {
  return new Promise((resolve, reject) => {
    pdf.create(html(name, perc), pdfOptions).toStream(function (err, stream) {
      if (err) reject(err);
      resolve(stream);
    });
  });
};

module.exports = generateCertificate;
