function init(){
    
    var base_hotosm = L.tileLayer(
        'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',{
        attribution: '&copy; OpenStreetMap contributors, <a href="http://hot.openstreetmap.org/">Humanitarian OpenStreetMap Team</a>'}
    );

    var base_osm = L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
            attribution: '&copy; OpenStreetMap contributors'}
    );

    var newCasesLayer = L.geoJson(regions,{
        style: newCasesStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("New Cases in the last 4 weeks: "+newCases[feature.properties.PCODE_REF]);
        }
    });
    
    var totalCasesLayer = L.geoJson(regions,{
        style: totalCasesStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("Total Cases: "+totalCases[feature.properties.PCODE_REF]);
        }
    });
    
    var totalDeathsLayer = L.geoJson(regions,{
        style: totalDeathsStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("Total Deaths: "+totalDeaths[feature.properties.PCODE_REF]);
        }
    });    
    
    var map = L.map('map', {
        center: [8,-11],
        zoom: 6,
        layers: [base_hotosm]
    });

    L.control.layers({
        'HOT OSM':base_hotosm,
        'OSM':base_osm
    }, {
        'New Cases in last 4 Weeks':newCasesLayer,
        'Total Cases':totalCasesLayer,
        'Total Deaths':totalDeathsLayer
    }).addTo(map);
    
    var newCasesLegend = L.control({position: 'bottomleft'});
    var totalDeathsLegend = L.control({position: 'bottomleft'});
    var totalCasesLegend = L.control({position: 'bottomleft'});
    
    newCasesLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=newCasesLegendContent();
            console.log(newCasesLegendContent());
        return div;
    };
    
    totalCasesLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=totalCasesLegendContent();
        return div;
    };    
    
    totalDeathsLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=totalDeathsLegendContent();
        return div;
    };    
    
    map.on('overlayadd', function (eventLayer) {
        if(eventLayer.name=="New Cases in last 4 Weeks"){
            newCasesLegend.addTo(this);
        };
        if(eventLayer.name=="Total Cases"){
            totalCasesLegend.addTo(this);
        };
        if(eventLayer.name=="Total Deaths"){
            totalDeathsLegend.addTo(this);
        };        
    });
    
    map.on('overlayremove', function (eventLayer) {
        if(eventLayer.name=="New Cases in last 4 Weeks"){
            this.removeControl(newCasesLegend);
        };
        if(eventLayer.name=="Total Cases"){
            this.removeControl(totalCasesLegend);
        };
        if(eventLayer.name=="Total Deaths"){
            this.removeControl(totalDeathsLegend);
        };        
    });    
    
    return map;    
}


function resize(){
    $('#map').height($(window).height()-$('#header').height()-10);
    map.invalidateSize(false);
}

$(window).load(function(){
    resize();
});
$(window).resize(function(){
    resize();
});
    

var map = init();