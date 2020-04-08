$.getJSON("https://corona.lmao.ninja/all", function (corona)
{
    $.each(corona, function (key, value) {
        document.getElementById('TG1').innerHTML ='+ Infection: ' + corona.cases;
        document.getElementById('TG2').innerHTML ='+ Case Die: ' +corona.deaths;
        document.getElementById('TG3').innerHTML ='+ Recovered: ' +corona.recovered;
    });
});