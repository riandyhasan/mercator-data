# Mercator Data

This repository contains HTML files to visualize mangrove data using Leaflet. Each HTML file corresponds to a specific region. Below is the list of HTML files along with their corresponding JSON files. Additionally, you can filter the data by adding a density query parameter to the URL.

**List of HTML Files:**

1. [Sumatera Utara](sumut.html) - JSON: [sumut.json](sumut.json)
2. [Riau](riau.html) - JSON: [riau.json](https://storage.googleapis.com/mercator-data/riau.json)
3. [Kepulauan Riau](kep_riau.html) - JSON: [kep_riau.json](kep_riau.json)
4. [Bangka Belitung](bangka_belitung.html) - JSON: [bangka_belitung.json](bangka_belitung.json)
5. [Kalimantan Barat](kalbar.html) - JSON: [kalbar.json](kalbar.json)
6. [Kalimantan Timur](kaltim.html) - JSON: [kaltim.json](kaltim.json)
7. [Kalimantan Utara](kaltara.html) - JSON: [kaltara.json](kaltara.json)
8. [Papua](papua.html) - JSON: [papua.json](papua.json)
9. [Papua Barat](papua_barat.html) - JSON: [papua_barat.json](papua_barat.json)

**Filtering Data:**

You can filter the displayed data by adding a density query parameter to the URL. For example:

- Display only dense mangroves: `kalbar.html?density=lebat`
- Display only medium-density mangroves: `kalbar.html?density=sedang`
- Display only sparse mangroves: `kalbar.html?density=jarang`

_Note: If the density query parameter is not provided, all data will be displayed by default._
