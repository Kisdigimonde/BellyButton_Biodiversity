// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 

    // Create a variable that filters the samples for the object with the desired sample number.

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadata=data.metadata;
    var metadataFilter=metadata.filter(sampleobj=>sampleobj.id==sample);

    // Create a variable that holds the first sample in the array.
    var results=sampleArray[0];

    // 2. Create a variable that holds the first sample in the metadata array.
    var metaresult=metadataFilter[0];

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIDs=results.otu_ids;
    var otuLabels=results.otu_labels;
    var sampleValues=results.sample_values;
    console.log(otuIDs)
    console.log(otuLabels)
    console.log(sampleValues)

    // 3. Create a variable that holds the washing frequency.
    var wfreq = parseFloat(result.wfreq)
    console.log(wfreq)
    // Create the yticks for the bar chart.
    var yticks = otu_ids.slice(0,10).map(ids => `OTU ${ids}`).reverse();
    console.log(yticks);
    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      domain: { x: [0, 1], y: [0, 1] },
      value: wfreq,
      mode: "gauge+number",
      type: "indicator",
      title: { text: "Belly Button Washing Frequency <br> Scrubs per Week " },
      gauge: {
        axis: {range:[null,10]},
        steps: [
          { range: [0, 1], color: '#7fdb98' },
          { range: [1, 2], color: '#7fdb98' },
          { range: [2, 3], color: '#55e67b' },
          { range: [3, 4], color: '#55e67b' },
          { range: [4, 5], color: '#18b842' },
          { range: [5, 6], color: '#18b842' },
          { range: [6, 7], color: '#0c7027' },
          { range: [7, 8], color: '#0c7027' },
          { range: [8, 9], color: '#0a3315' },
          { range: [9, 10], color: '#0a3315' }
        ]
      }
      }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      width: 600, 
      height: 500, 
      margin: { t: 0, b: 0 }
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("guage", gaugeData, gaugeLayout);
  });
  }