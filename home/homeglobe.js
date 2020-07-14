var markersArray = []

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
// chart.projection = new am4maps.projections.Miller();
chart.projection = new am4maps.projections.Orthographic();

chart.seriesContainer.draggable = false;
chart.seriesContainer.resizable = false;

chart.seriesContainer.events.on("down", function(ev) {
  originalDeltaLongitude = chart.deltaLongitude;
});

chart.seriesContainer.events.on("track", updateVisibility)

function updateVisibility(e) {
  if (document.readyState === "complete") {
    
    for (let i = 0; i < markersArray.length; i ++) {
      const longitude = Number(markersArray[i].title.split("/")[2])
      if (Math.abs(longitude +  chart.deltaLongitude) > 86) {
        markersArray[i].remove()
      }  else {
        document.querySelector("#chartdiv").appendChild(markersArray[i])
      }
    }
}
}

chart.seriesContainer.events.on("track", function(ev) {
  if (ev.target.isDown) {
    var pointer = ev.target.interactions.downPointers.getIndex(0);
    var startPoint = pointer.startPoint;
    var point = pointer.point;
    var shift = point.x - startPoint.x;
    chart.deltaLongitude = originalDeltaLongitude + shift / 2;
    // label.text = "chart.deltaLongitude = " + chart.numberFormatter.format(chart.deltaLongitude, "[green]#.|[red]#.|[#555]#");
  }
})

chart.seriesContainer.events.on("track", updateCustomMarkers)


// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Exclude Antartica
// polygonSeries.exclude = ["AQ"];

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = chart.colors.getIndex(0).lighten(0.5);

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = chart.colors.getIndex(0);

// Add image series
var imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.mapImages.template.propertyFields.longitude = "longitude";
imageSeries.mapImages.template.propertyFields.latitude = "latitude";
imageSeries.data = [ {
  "zoomLevel": 5,
  "scale": 0.1,
  "id": "toronto",
  "title": "Toronto",
  "latitude": 43.6532,
  "longitude": -79.3832
},{
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Brussels",
  "latitude": 50.8371,
  "longitude": 4.3676
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Copenhagen",
  "latitude": 55.6763,
  "longitude": 12.5681
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Paris",
  "latitude": 48.8567,
  "longitude": 2.3510
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Reykjavik",
  "latitude": 64.1353,
  "longitude": -21.8952
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Moscow",
  "latitude": 55.7558,
  "longitude": 37.6176
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Madrid",
  "latitude": 40.4167,
  "longitude": -3.7033
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "London",
  "latitude": 51.5002,
  "longitude": -0.1262,
  "url": "../citypage/citypage.html"
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Peking",
  "latitude": 39.9056,
  "longitude": 116.3958
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "New Delhi",
  "latitude": 28.6353,
  "longitude": 77.2250
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Tokyo",
  "latitude": 35.6785,
  "longitude": 139.6823,
  "url": "../citypage/citypage.html"
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Ankara",
  "latitude": 39.9439,
  "longitude": 32.8560
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Buenos Aires",
  "latitude": -34.6118,
  "longitude": -58.4173
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Brasilia",
  "latitude": -15.7801,
  "longitude": -47.9292
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Ottawa",
  "latitude": 45.4235,
  "longitude": -75.6979
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Washington",
  "latitude": 38.8921,
  "longitude": -77.0241
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Kinshasa",
  "latitude": -4.3369,
  "longitude": 15.3271
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Cairo",
  "latitude": 30.0571,
  "longitude": 31.2272
}, {
  "zoomLevel": 5,
  "scale": 0.5,
  "title": "Pretoria",
  "latitude": -25.7463,
  "longitude": 28.1876
}];


// add events to recalculate map position when the map is moved or zoomed
chart.events.on( "mappositionchanged", updateCustomMarkers );

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers( event ) {
  // go through all of the images
  imageSeries.mapImages.each(function(image) {
    // check if it has corresponding HTML element
    if (!image.dummyData || !image.dummyData.externalElement) {
      // create onex
      image.dummyData = {
        externalElement: createCustomMarker(image)
      };
    }

    // reposition the element accoridng to coordinates
    var xy = chart.geoPointToSVG( { longitude: image.longitude, latitude: image.latitude } );
    image.dummyData.externalElement.style.top = xy.y + 'px';
    image.dummyData.externalElement.style.left = xy.x + 'px';
  });

}

// this function creates and returns a new marker element
function createCustomMarker( image ) {
  
  var chart = image.dataItem.component.chart;

  // create holder
  var holder = document.createElement( 'div' );
  holder.className = 'map-marker';
  holder.title = image.dataItem.dataContext.title + "/" 
  + image.dataItem.dataContext.latitude + "/"
  + image.dataItem.dataContext.longitude;
  holder.style.position = 'absolute';

  // maybe add a link to it?
  if ( undefined != image.dataItem.dataContext.url ) {
    holder.onclick = function() {
      window.location.href = image.dataItem.dataContext.url;
    };
    holder.className += ' map-clickable';
  }

  // create dot
  // var dot = document.createElement( 'div' );
  // dot.className = 'dot';
  // holder.appendChild( dot );

  // create pulse
  var pulse = document.createElement( 'div' );
  pulse.className = 'pulse';
  holder.appendChild( pulse );

  const tag = document.createElement('span');
  tag.setAttribute('class' , 'tag')
  tag.appendChild(document.createTextNode(image.dataItem.dataContext.title))
  tag.style.display = 'none'
  holder.appendChild(tag)
//   <span class="tag">
//   Tag label
// </span>




  // append the marker to the map container
  chart.svgContainer.htmlElement.appendChild( holder );
  markersArray.push(holder)
  return holder;
}

// var label = chart.chartAndLegendContainer.createChild(am4core.Label);
// label.text = "chart.deltaLongitude = 0";
// label.fontSize = 18;
// label.align = "center"
// label.padding(5, 10, 5, 10);
// label.background.fillOpacity = 0.05;
// label.background.fill = am4core.color("#000");
// label.removeChildren();

var sample = polygonSeries.mapPolygons.template;
sample.tooltipText = "{name}";
sample.fill = am4core.color("#00a680");
sample.propertyFields.fill = "color";

// if hover then show tag
document.querySelector('#chartdiv').addEventListener('mouseover', showTag)

function showTag(e) {
  if ([...document.querySelectorAll('.pulse')].includes(e.target)) {
    e.target.parentElement.lastElementChild.style.display = 'inline'
    setTimeout(function () {
      e.target.parentElement.lastElementChild.style.display = 'none'
    }, 2500)
  }
}

