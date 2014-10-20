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

medicalCentresLegendContent = function(){
    var labels = ["ETUs"];
    var html = "<p>Medical Centres</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + color[i]+'"></i> '+labels[i]+'</p>';
    }
    return html;
};