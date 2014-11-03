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
            layer.bindPopup("<b>" + feature.properties.NAME_REF + " ("+feature.properties.PCODE_REF+")</b><br />New Cases in the last 4 weeks: "+newCases[feature.properties.PCODE_REF]);
        }
    });
    
    var totalCasesLayer = L.geoJson(regions,{
        style: totalCasesStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>" + feature.properties.NAME_REF + " ("+feature.properties.PCODE_REF+")</b><br />Total Cases: "+totalCases[feature.properties.PCODE_REF]);
        }
    });
    
    var totalDeathsLayer = L.geoJson(regions,{
        style: totalDeathsStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>" + feature.properties.NAME_REF + " ("+feature.properties.PCODE_REF+")</b><br />Total Deaths: "+totalDeaths[feature.properties.PCODE_REF]);
        }
    });
    
    var newCasesPerAreaLayer = L.geoJson(regions,{
        style: newCasesPerAreaStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>" + feature.properties.NAME_REF + " ("+feature.properties.PCODE_REF+")</b><br />New Cases in the last 4 weeks Per 1000km: "+newCasesPerArea[feature.properties.PCODE_REF]);
        }
    });
    
    var totalCasesPerAreaLayer = L.geoJson(regions,{
        style: totalCasesPerAreaStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>" + feature.properties.NAME_REF + " ("+feature.properties.PCODE_REF+")</b><br />Total Cases Per 1000km: "+totalCasesPerArea[feature.properties.PCODE_REF]);
        }
    });
    
    var totalDeathsPerAreaLayer = L.geoJson(regions,{
        style: totalDeathsPerAreaStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>" + feature.properties.NAME_REF + " ("+feature.properties.PCODE_REF+")</b><br />Total Deaths Per 1000km: "+totalDeathsPerArea[feature.properties.PCODE_REF]);
        }
    });      

    var newCasesPerPopLayer = L.geoJson(regions,{
        style: newCasesPerPopStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>" + feature.properties.NAME_REF + " ("+feature.properties.PCODE_REF+")</b><br />New Cases in the last 4 weeks Per 100,000 People: "+newCasesPerPop[feature.properties.PCODE_REF]);
        }
    });
    
    var totalCasesPerPopLayer = L.geoJson(regions,{
        style: totalCasesPerPopStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>" + feature.properties.NAME_REF + " ("+feature.properties.PCODE_REF+")</b><br />Total Cases Per 100,000 People: "+totalCasesPerPop[feature.properties.PCODE_REF]);
        }
    });
    
    var totalDeathsPerPopLayer = L.geoJson(regions,{
        style: totalDeathsPerPopStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>" + feature.properties.NAME_REF + " ("+feature.properties.PCODE_REF+")</b><br />Total Deaths Per 100,000 People: "+totalDeathsPerPop[feature.properties.PCODE_REF]);
        }
    });

    var medicalCentresLayer = L.geoJson(medicalCentres, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng,medicalCentresStyle(feature));
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopup("Centre Name: "+feature.properties["Centre Name"]+"<br />Organisation: "+feature.properties["Primary Organisation"]);
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
        layers: [base_hotosm,totalCasesLayer,medicalCentresLayer]
    });

    L.control.layers({
        'HOT OSM':base_hotosm,
        'OSM':base_osm
    }, {
        'New Cases in the last 4 weeks':newCasesLayer,
        'Total Cases':totalCasesLayer,
        'Total Deaths':totalDeathsLayer,
        'New Cases in the last 4 weeks per 1000 Sq. km':newCasesPerAreaLayer,
        'Total Cases per 1000 Sq. km':totalCasesPerAreaLayer,
        'Total Deaths per 1000 Sq. km':totalDeathsPerAreaLayer,
        'New Cases in the last 4 weeks per 100,000 people':newCasesPerPopLayer,
        'Total Cases per 100,000 people':totalCasesPerPopLayer,
        'Total Deaths per 100,000 people':totalDeathsPerPopLayer,        
        'Ebola Treatment Centres': medicalCentresLayer,
        'SBTF Medical Centres': SBTFMedicalCentresLayer
    }).addTo(map);   
    
    var newCasesLegend = L.control({position: 'bottomleft'});
    var totalDeathsLegend = L.control({position: 'bottomleft'});
    var totalCasesLegend = L.control({position: 'bottomleft'});
    var newCasesPerAreaLegend = L.control({position: 'bottomleft'});
    var totalDeathsPerAreaLegend = L.control({position: 'bottomleft'});
    var totalCasesPerAreaLegend = L.control({position: 'bottomleft'});
    var newCasesPerPopLegend = L.control({position: 'bottomleft'});
    var totalDeathsPerPopLegend = L.control({position: 'bottomleft'});
    var totalCasesPerPopLegend = L.control({position: 'bottomleft'});
    var medicalCentresLegend = L.control({position: 'bottomleft'});
    var SBTFMedicalCentresLegend = L.control({position: 'bottomleft'});
    
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
    
    
    newCasesPerAreaLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=newCasesPerAreaLegendContent();
        return div;
    };
    
    totalCasesPerAreaLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=totalCasesPerAreaLegendContent();
        return div;
    };    
    
    totalDeathsPerAreaLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=totalDeathsPerAreaLegendContent();
        return div;
    };
    
    newCasesPerPopLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=newCasesPerPopLegendContent();
        return div;
    };
    
    totalCasesPerPopLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=totalCasesPerPopLegendContent();
        return div;
    };    
    
    totalDeathsPerPopLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=totalDeathsPerPopLegendContent();
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
        if(eventLayer.name=="New Cases in the last 4 weeks"){
            newCasesLegend.addTo(this);
        };
        if(eventLayer.name=="Total Cases"){
            totalCasesLegend.addTo(this);
        };
        if(eventLayer.name=="Total Deaths"){
            totalDeathsLegend.addTo(this);
        };
        if(eventLayer.name=="New Cases in the last 4 weeks per 1000 Sq. km"){
            newCasesPerAreaLegend.addTo(this);
        };
        if(eventLayer.name=="Total Cases per 1000 Sq. km"){
            totalCasesPerAreaLegend.addTo(this);
        };
        if(eventLayer.name=="Total Deaths per 1000 Sq. km"){
            totalDeathsPerAreaLegend.addTo(this);
        };
        if(eventLayer.name=="New Cases in the last 4 weeks per 100,000 people"){
            newCasesPerPopLegend.addTo(this);
        };
        if(eventLayer.name=="Total Cases per 100,000 people"){
            totalCasesPerPopLegend.addTo(this);
        };
        if(eventLayer.name=="Total Deaths per 100,000 people"){
            totalDeathsPerPopLegend.addTo(this);
        };
        if(eventLayer.name=="Ebola Treatment Centres"){
            medicalCentresLegend.addTo(this);
        };
        if(eventLayer.name=="SBTF Medical Centres"){
            SBTFMedicalCentresLegend.addTo(this);
        };           
    });
    
    map.on('overlayremove', function (eventLayer) {
        if(eventLayer.name=="New Cases in the last 4 weeks"){
            this.removeControl(newCasesLegend);
        };
        if(eventLayer.name=="Total Cases"){
            this.removeControl(totalCasesLegend);
        };
        if(eventLayer.name=="Total Deaths"){
            this.removeControl(totalDeathsLegend);
        };
        if(eventLayer.name=="New Cases in the last 4 weeks per 1000 Sq. km"){
            this.removeControl(newCasesPerAreaLegend);
        };
        if(eventLayer.name=="Total Cases per 1000 Sq. km"){
            this.removeControl(totalCasesPerAreaLegend);
        };
        if(eventLayer.name=="Total Deaths per 1000 Sq. km"){
            this.removeControl(totalDeathsPerAreaLegend);
        };
        if(eventLayer.name=="New Cases in the last 4 weeks per 100,000 people"){
            this.removeControl(newCasesPerPopLegend);
        };
        if(eventLayer.name=="Total Cases per 100,000 people"){
            this.removeControl(totalCasesPerPopLegend);
        };
        if(eventLayer.name=="Total Deaths per 100,000 people"){
            this.removeControl(totalDeathsPerPopLegend);
        };
        if(eventLayer.name=="Ebola Treatment Centres"){
            this.removeControl(medicalCentresLegend);
        };
        if(eventLayer.name=="SBTF Medical Centres"){
            this.removeControl(SBTFMedicalCentresLegend);
        };          
    });
    
    totalCasesLegend.addTo(map);
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
