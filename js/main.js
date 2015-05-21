function init(){
    
    var base_hotosm = L.tileLayer(
        'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',{
        attribution: '&copy; OpenStreetMap contributors, <a href="http://hot.openstreetmap.org/">Humanitarian OpenStreetMap Team</a>'}
    );

    var base_osm = L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
            attribution: '&copy; OpenStreetMap contributors'}
    );
	
    var newConfLayer = L.geoJson(regions,{
        style: newConfStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>" + feature.properties.NAMEUSE + " ("+feature.properties.PCODEUSE+")</b><br />New Confirmed Cases in the last week: "+NewConfirms[feature.properties.PCODEUSE]);
        }
    });
	
    var cumConfLayer = L.geoJson(regions,{
        style: cumConfStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>" + feature.properties.NAMEUSE + " ("+feature.properties.PCODEUSE+")</b><br />Cumulative Confirmed Cases: "+CumConfirms[feature.properties.PCODEUSE]);
        }
    });  
    
    var totalCasesLayer = L.geoJson(regions,{
        style: totalCasesStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>" + feature.properties.NAMEUSE + " ("+feature.properties.PCODEUSE+")</b><br />Total Cases: "+totalCases[feature.properties.PCODEUSE]);
        }
    });
    
    var totalDeathsLayer = L.geoJson(regions,{
        style: totalDeathsStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>" + feature.properties.NAMEUSE + " ("+feature.properties.PCODEUSE+")</b><br />Total Deaths: "+totalDeaths[feature.properties.PCODEUSE]);
        }
    });

    var medicalCentresLayer = L.geoJson(medicalCentres, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng,medicalCentresStyle(feature));
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopup("Centre ID: "+feature.properties["ECF_Code"]+"<br />Centre Name: "+feature.properties["ECF_Name"]+"<br />Status: "+feature.properties["Status"]+"<br />Organisation: "+feature.properties["Partner"]);
        }        
    });
    
    var SBTFMedicalCentresLayer = L.geoJson(SBTFMedicalCentres, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng,SBTFMedicalCentresStyle());
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopup("Centre ID: "+feature.properties["Centre ID"]+"<br />Centre Name: "+feature.properties["Center"]+"<br />Type: "+feature.properties["Type"]+"<br />Activity: "+feature.properties["Activity"]+"<br />Org: "+feature.properties["Org"]);
        }        
    });    
    
    var map = L.map('map', {
        center: [8,-11],
        zoom: 6,
        layers: [base_hotosm,newConfLayer,medicalCentresLayer]
    });

    L.control.layers({
        'HOT OSM':base_hotosm,
        'OSM':base_osm
    }, {
        'New Confirmed Cases in the last week':newConfLayer,
	'Cumulative Confirmed Cases':cumConfLayer,
	'Total Cases':totalCasesLayer,
        'Total Deaths':totalDeathsLayer, 
        'Ebola Medical Centres': medicalCentresLayer,
        'SBTF Medical Centres': SBTFMedicalCentresLayer
    }).addTo(map);   
    
    var totalDeathsLegend = L.control({position: 'bottomleft'});
    var totalCasesLegend = L.control({position: 'bottomleft'});
    var newConfLegend = L.control({position: 'bottomleft'});
    var cumConfLegend = L.control({position: 'bottomleft'});
    var medicalCentresLegend = L.control({position: 'bottomleft'});
    var SBTFMedicalCentresLegend = L.control({position: 'bottomleft'});
    

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
    
    newConfLegend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'infolegend');
	    div.innerHTML +=newConfLegendContent();
	return div;
    };
	
    cumConfLegend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'infolegend');
	    div.innerHTML +=cumConfLegendContent();
	return div;
    };
    
    medicalCentresLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=medicalCentresLegendContent();
        return div;
    };
    
    SBTFMedicalCentresLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=SBTFMedicalCentresLegendContent();
        return div;
    };         
    
    map.on('overlayadd', function (eventLayer) {
        if(eventLayer.name=="Total Cases"){
            totalCasesLegend.addTo(this);
        };
        if(eventLayer.name=="Total Deaths"){
            totalDeathsLegend.addTo(this);
        };
        if(eventLayer.name=="New Confirmed Cases in the last week"){
            newConfLegend.addTo(this);
        };
	if(eventLayer.name=="Cumulative Confirmed Cases"){
            cumConfLegend.addTo(this);
        };
        if(eventLayer.name=="Ebola Medical Centres"){
            medicalCentresLegend.addTo(this);
        };
        if(eventLayer.name=="SBTF Medical Centres"){
            SBTFMedicalCentresLegend.addTo(this);
        };           
    });
    
    map.on('overlayremove', function (eventLayer) {
        if(eventLayer.name=="Total Cases"){
            this.removeControl(totalCasesLegend);
        };
        if(eventLayer.name=="Total Deaths"){
            this.removeControl(totalDeathsLegend);
        };
	if(eventLayer.name=="New Confirmed Cases in the last week"){
            this.removeControl(newConfLegend);
        };
	if(eventLayer.name=="Cumulative Confirmed Cases"){
            this.removeControl(cumConfLegend);
        };
        if(eventLayer.name=="Ebola Medical Centres"){
            this.removeControl(medicalCentresLegend);
        };
        if(eventLayer.name=="SBTF Medical Centres"){
            this.removeControl(SBTFMedicalCentresLegend);
        };          
    });
    
    newConfLegend.addTo(map);
    medicalCentresLegend.addTo(map);
    
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
