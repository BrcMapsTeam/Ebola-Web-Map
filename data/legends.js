totalCasesLegendContent = function(){
    var labels = ["0","1-99","100-299","300-799","800+"];
    var html = "<p>Total Cases</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + color[i]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};

totalDeathsLegendContent = function(){
    var labels = ["0","1-49","50-99","100-499","500+"];
    var html = "<p>Total Deaths</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + color[i]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};

newConfLegendContent = function(){
    var labels = ["0","1-4","5-9","10-19","20+"];
    var html = "<p>New Confirmed Cases in the last week</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + color[i]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};

cumConfLegendContent = function(){
    var labels = ["0","1-199","200-499","500-1499","2000+"];
    var html = "<p>Cumulative Confirmed Cases</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + color[i]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};


medicalCentresLegendContent = function(){
    var html = "<p>Ebola Medical Centres</p>";
    html = html +'<p><i style="background-color:#A3C990"></i>Functional</p>';
    html = html +'<p><i style="background-color:#738ffe"></i>Planned or under construction</p>';
    return html;
};

SBTFMedicalCentresLegendContent = function(){
    var html = "<p>Medical Centres</p>";
    html = html +'<p><i style="background-color:#91a7ff"></i>Medical Centre</p>';
    return html;
};
