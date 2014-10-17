var color = ["none","#ffe082","#ffca28","#ffb300","#ff8f00"];

var newCasesStyle = function(feature){
        if(feature.properties.PCODE_REF in newCases) {
            if(newCases[feature.properties.PCODE_REF]<1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(newCases[feature.properties.PCODE_REF]<25){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(newCases[feature.properties.PCODE_REF]<50){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(newCases[feature.properties.PCODE_REF]<200){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};

var totalDeathsStyle = function(feature){
        if(feature.properties.PCODE_REF in totalDeaths) {
            if(totalDeaths[feature.properties.PCODE_REF]<1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalDeaths[feature.properties.PCODE_REF]<50){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalDeaths[feature.properties.PCODE_REF]<100){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalDeaths[feature.properties.PCODE_REF]<500){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};

var totalCasesStyle = function(feature){
        if(feature.properties.PCODE_REF in totalCases) {
            if(totalCases[feature.properties.PCODE_REF]<1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalCases[feature.properties.PCODE_REF]<100){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalCases[feature.properties.PCODE_REF]<300){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalCases[feature.properties.PCODE_REF]<800){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};