$.getJSON("https://api.covid19api.com/summary", function (corona)
{
        document.getElementById('TG1').innerHTML ='+ Số ca nhiễm mới: ' + corona["Global"].NewConfirmed;
        document.getElementById('TG1.1').innerHTML ='+ Tổng số ca nhiễm: ' + corona["Global"].TotalConfirmed;
        document.getElementById('TG2').innerHTML ='+ Số người chết mới: ' +corona["Global"].NewDeaths;
        document.getElementById('TG2.2').innerHTML ='+Tổng số người chết: ' +corona["Global"].TotalDeaths;
        document.getElementById('TG3').innerHTML ='+ Số người phục hồi mới: ' +corona["Global"].NewRecovered;
        document.getElementById('TG3.3').innerHTML ='+Tổng số người phục hồi: ' +corona["Global"].TotalRecovered;
});



