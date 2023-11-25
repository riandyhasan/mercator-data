# Mercator Data

This repository contains HTML files to visualize mangrove data using Leaflet. Each HTML file corresponds to a specific region. Below is the list of HTML files along with their corresponding JSON files. Additionally, you can filter the data by adding a density query parameter to the URL.

**List of HTML Files:**

1. [Sumatera Utara](https://riandyhasan.github.io/mercator-data/sumut.html) - JSON: [sumut.json](https://riandyhasan.github.io/mercator-data/sumut.json)
2. [Riau](https://riandyhasan.github.io/mercator-data/riau.html) - JSON: [riau.json](https://storage.googleapis.com/mercator-data/riau.json)
3. [Kepulauan Riau](https://riandyhasan.github.io/mercator-data/kep_riau.html) - JSON: [kep_riau.json](https://riandyhasan.github.io/mercator-data/kep_riau.json)
4. [Bangka Belitung](https://riandyhasan.github.io/mercator-data/bangka_belitung.html) - JSON: [bangka_belitung.json](https://riandyhasan.github.io/mercator-data/bangka_belitung.json)
5. [Kalimantan Barat](https://riandyhasan.github.io/mercator-data/kalbar.html) - JSON: [kalbar.json](https://riandyhasan.github.io/mercator-data/kalbar.json)
6. [Kalimantan Timur](https://riandyhasan.github.io/mercator-data/kaltim.html) - JSON: [kaltim.json](https://riandyhasan.github.io/mercator-data/kaltim.json)
7. [Kalimantan Utara](https://riandyhasan.github.io/mercator-data/kaltara.html) - JSON: [kaltara.json](https://riandyhasan.github.io/mercator-data/kaltara.json)
8. [Papua](https://riandyhasan.github.io/mercator-data/papua.html) - JSON: [papua.json](https://riandyhasan.github.io/mercator-data/papua.json)
9. [Papua Barat](https://riandyhasan.github.io/mercator-data/papua_barat.html) - JSON: [papua_barat.json](https://riandyhasan.github.io/mercator-data/papua_barat.json)

**Filtering Data:**

You can filter the displayed data by adding a density query parameter to the URL. For example:

- Display only dense mangroves: `kalbar.html?density=lebat`
- Display only medium-density mangroves: `kalbar.html?density=sedang`
- Display only sparse mangroves: `kalbar.html?density=jarang`

_Note: If the density query parameter is not provided, all data will be displayed by default._
