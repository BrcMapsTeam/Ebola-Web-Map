newCasesLegendContent = function(){
    var labels = ["0","1-24","25-49","50-199","200+"];
    var html = "<p>New Cases in the last 4 weeks</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + color[i]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};

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

newCasesPerAreaLegendContent = function(){
    var labels = ["0","1-9","10-49","50-249","250+"];
    var html = "<p>New Cases in the last 4 weeks Per 1000 sq. km</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + color[i]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};

totalCasesPerAreaLegendContent = function(){
    var labels = ["0","1-49","50-99","100-499","500+"];
    var html = "<p>Total Cases Per 1000 sq. km</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + color[i]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};

totalDeathsPerAreaLegendContent = function(){
    var labels = ["0","1-24","25-49","50-199","200+"];
    var html = "<p>Total Deaths Per 1000 sq. km</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + color[i]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};

newCasesPerPopLegendContent = function(){
    var labels = ["0","0.1-9.9","10-24.9","25-49.9","50+"];
    var html = "<p>New Cases in the last 4 weeks Per 100,000 people</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + color[i]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};

totalCasesPerPopLegendContent = function(){
    var labels = ["0","0.1-24.9","25-49.9","50-99.9","100+"];
    var html = "<p>Total Cases Per 100,000 people</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + color[i]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};

totalDeathsPerPopLegendContent = function(){
    var labels = ["0","0.1-19.9","20-39.9","40-79.9","80+"];
    var html = "<p>Total Deaths Per 100,000 people</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + color[i]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};

medicalCentresLegendContent = function(){
    var html = "<p>Ebola Treatment Centres</p>";
    html = html +'<p><i style="background-color:#A3C990"></i>ETC</p>';
    return html;
};

SBTFMedicalCentresLegendContent = function(){
    var html = "<p>Medical Centres</p>";
    html = html +'<p><i style="background-color:#91a7ff"></i>Medical Centre</p>';
    return html;
};