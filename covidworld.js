anychart.onDocumentReady(function () {
    anychart.data.loadJsonFile('https://gist.githubusercontent.com/shacheeswadia/3bbe6eb041166e259f1712e6766fa5a2/raw/341d2796dd63e6e6defc1ec52dd4e73c7828c38c/sunburstDataUpdated.json',
        function (data) {

            // create a data tree from the dataset
            var dataTree = anychart.data.tree(data);

            // create a sunburst chart
            var chart = anychart.sunburst(dataTree);

            // set the calculation mode
            chart.calculationMode('parent-independent');

            // set the ascending sort order
            chart.sort('asc');

            // set the chart title
            chart.title("COVID-19 Cases Across the World");

            // enable HTML in labels
            chart.labels().useHtml(true);

            // customize the format of the sunburst chart labels
            chart
                .level(1)
                .labels()
                .fontFamily("Verdana, sans-serif")
                .format("<span style='font-size:16px'>{%name}</span>");

            chart
                .level(0)
                .labels()
                .fontFamily("Verdana, sans-serif")
                .fontWeight(500)
                .format("<span style='font-size:16px'>TOTAL CASES</span><br><br><span style='font-size:16px'>{%value}{groupsSeparator:\\,}</span>");

            // enable HTML in tooltips
            chart.tooltip().useHtml(true);

            // customize the format of the sunburst chart tooltip
            chart
                .tooltip()
                .fontFamily("Verdana, sans-serif")
                .format("<h5 style='font-size:14px; margin: 0.25rem 0;'>{%name}</h5><h6 style='font-size:14px; font-weight:400; margin: 0.2rem 0;'>Total Cases: <b>{%value}{groupsSeparator:\\,}</b></h6><h6 style='font-size:14px; font-weight:400; margin: 0.2rem 0;'>Total Deaths: <b>{%total_deaths}{groupsSeparator:\\,}</b></h6>");

            // configure the chart stroke
            chart.normal().stroke("#fff", 0.2);

            // set the point fill
            chart.fill(function (d) {
                return anychart.color.darken(this.parentColor, 0.15);
            });

            // set the chart container element id
            chart.container('container');

            // initiate chart drawing
            chart.draw();

        });
});