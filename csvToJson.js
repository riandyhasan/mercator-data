const fs = require("fs");
const csv = require("csv-parser");

// Replace 'input.csv' with your CSV file name
const csvFilePath = "lengkap.csv";
let provinces = [
  {
    name: "SUMATERA UTARA",
    path: "sumut.json",
  },
  {
    name: "RIAU",
    path: "riau.json",
  },
  {
    name: "KEPULAUAN RIAU",
    path: "kep_riau.json",
  },
  {
    name: "KEPULAUAN BANGKA BELITUNG",
    path: "bangka_belitung.json",
  },
  {
    name: "KALIMANTAN BARAT",
    path: "kalbar.json",
  },
  {
    name: "KALIMANTAN TIMUR",
    path: "kaltim.json",
  },
  {
    name: "KALIMANTAN UTARA",
    path: "kaltara.json",
  },
  {
    name: "PAPUA",
    path: "papua.json",
  },
  {
    name: "PAPUA BARAT",
    path: "papua_barat.json",
  },
];

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", (data) => {
    provinces.forEach((province) => {
      if (data["PROVINSI"] === province.name) {
        if (!province.results) {
          province.results = [];
        }
        province.results.push(data);
      }
    });
  })
  .on("end", () => {
    provinces.forEach((province) => {
      if (province.results) {
        fs.writeFile(
          province.path,
          JSON.stringify(province.results, null, 2),
          (err) => {
            if (err) {
              console.error(
                `Error writing JSON file for ${province.name}:`,
                err
              );
            }
          }
        );
        console.log(`JSON file for ${province.name} written successfully.`);
      }
    });
  });
