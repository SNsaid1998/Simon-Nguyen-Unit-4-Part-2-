require([
      "esri/Map",
      "esri/layers/FeatureLayer",
      "esri/views/MapView",
      "dojo/domReady!"
    ], function(
      Map,
      FeatureLayer,
      MapView
    ) {

      // Create the map
      var map = new Map({
        basemap: "gray"
      });

      // Create the MapView
      var view = new MapView({
        container: "viewDiv",
        map: map,
        center:[-91.1, 38.6],
        zoom: 9
      });


      var template = { // autocasts as new PopupTemplate()
        title: "St. Louis School District: {SCHOOL_DISTRICT}",
        content: [{
          // It is also possible to set the fieldInfos outside of the content
          // directly in the popupTemplate. If no fieldInfos is specifically set
          // in the content, it defaults to whatever may be set within the popupTemplate.
          type: "fields",
          fieldInfos: [{
            fieldName: "SCHOOLCODE",
            label: "School Code: ",
            visible: true
          },
                      ]
        }]
      };

     var symbol = {
      type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
      url: "https://static.arcgis.com/images/Symbols/Shapes/BlackStarLargeB.png",
      width: "48px",
      height: "48px"
};
  var renderer = {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: symbol
    };
  
      // Reference the popupTemplate instance in the
      // popupTemplate property of FeatureLayer
      var featureLayer = new FeatureLayer({
        url: "http://maps.stlouisco.com/arcgis/rest/services/OpenData/OpenData/FeatureServer",
        outFields: ["*"],
        popupTemplate: template,
        renderer:renderer
      });
  
      map.add(featureLayer);
  

   /*
      featureLayer.renderer = {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: {
        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
        size: 6,
        color: "red",
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: "white"
        }
      }
    };*/
    });
