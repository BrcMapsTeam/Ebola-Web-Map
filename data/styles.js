var color = ["none","#ffe082","#ffbd13","#ff8053","#ff493d"];

var totalDeathsStyle = function(feature){
        if(feature.properties.PCODEUSE in totalDeaths) {
            if(totalDeaths[feature.properties.PCODEUSE]<1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalDeaths[feature.properties.PCODEUSE]<50){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalDeaths[feature.properties.PCODEUSE]<100){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalDeaths[feature.properties.PCODEUSE]<500){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};

var totalCasesStyle = function(feature){
        if(feature.properties.PCODEUSE in totalCases) {
            if(totalCases[feature.properties.PCODEUSE]<1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalCases[feature.properties.PCODEUSE]<100){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalCases[feature.properties.PCODEUSE]<300){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalCases[feature.properties.PCODEUSE]<800){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};

var newConfStyle = function(feature){
        if(feature.properties.PCODEUSE in NewConfirms) {
            if(NewConfirms[feature.properties.PCODEUSE]<1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(NewConfirms[feature.properties.PCODEUSE]<5){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(NewConfirms[feature.properties.PCODEUSE]<10){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(NewConfirms[feature.properties.PCODEUSE]<20){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};

var cumConfStyle = function(feature){
        if(feature.properties.PCODEUSE in CumConfirms) {
            if(CumConfirms[feature.properties.PCODEUSE]<1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(CumConfirms[feature.properties.PCODEUSE]<200){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(CumConfirms[feature.properties.PCODEUSE]<500){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(CumConfirms[feature.properties.PCODEUSE]<2000){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};

var medicalCentresStyle = function(feature){
    if(feature.properties.Status == "Open"){
        return   {radius: 5,
                fillColor: "#A3C990",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 1};
            }
    else {
        return   {radius: 5,
                fillColor: "#738ffe",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 1};
            }
};

var SBTFMedicalCentresStyle = function(){
    return   {radius: 5,
                fillColor: "#91a7ff",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 1};
};
