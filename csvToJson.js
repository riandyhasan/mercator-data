const fs = require("fs");
const csv = require("csv-parser");

// Replace 'input.csv' with your CSV file name and 'output.json' with the desired JSON output file name
const csvFilePath = "lengkap_plus_prov.csv";
const jsonFilePath = "sumut.json";

const results = [];

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", (data) => {
    if (data["PROVINSI"] == "SUMATERA UTARA") {
      results.push(data);
    }
  })
  .on("end", () => {
    // Write the parsed data to a JSON file
    fs.writeFile(jsonFilePath, JSON.stringify(results, null, 2), (err) => {
      if (err) {
        console.error("Error writing JSON file:", err);
      } else {
        console.log("JSON file written successfully.");
      }
    });
  });
