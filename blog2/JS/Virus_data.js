$(document).ready(function(){

    // headers.append('Access-Control-Allow-Origin', '*');

    $.getJSON("https://api.covid19api.com/summary", function (corona)
    {
        var Conflus = '';
        var Deaflus = '';
        var Recflus = '';
        var virus_data = '';
        $.each(corona.Countries, function (key, value) {
            if(value.NewConfirmed > 0){
                Conflus = '+ '+value.NewConfirmed;
            }
            else {
                Conflus = '';
            }

            if(value.NewDeaths > 0){
                Deaflus ='+ '+value.NewDeaths;
            }
            else {
                Deaflus = '';
            }

            if(value.NewRecovered > 0){
                Recflus ='+ '+value.NewRecovered;
            }
            else{
                Recflus = '';
            }

            if(value.NewConfirmed > 100){
                Conflus = '<span style="color: steelblue">+ '+value.NewConfirmed+'</span>'
            }

            if(value.NewDeaths > 100){
                Deaflus = '<span style="color: red">+ '+value.NewDeaths+'</span>'
            }

            if(value.NewRecovered > 100){
                Recflus = '<span style="color: green">+ '+value.NewRecovered+'</span>'
            }

            virus_data += '<tr>';
            virus_data += '<td> '+value.Country+' </td>';
            virus_data += '<td> '+Conflus+' </td>';
            virus_data += '<td> '+value.TotalConfirmed+' </td>';
            virus_data += '<td> '+Deaflus+' </td>';
            virus_data += '<td> '+value.TotalDeaths+' </td>';
            virus_data += '<td> '+Recflus+' </td>';
            virus_data += '<td> '+value.TotalRecovered+' </td>';

            //VietNam data
            if(value.Country == 'Viet Nam')
            {
                cou = value.Country;
                VNInewcase =value.NewConfirmed;
                VNIcase =value.TotalConfirmed;
                VNInewdea = value.NewDeaths;
                VNIdea = value.TotalDeaths;
                VNInewcover = value.NewRecovered;
                VNIcover = value.TotalRecovered;
                document.getElementById("VNInewcase").innerHTML ='+ Số ca nhiễm mới:  '+ VNInewcase;
                document.getElementById("VNIcase").innerHTML ='+ Tổng số ca nhiễm:  '+ VNIcase;
                document.getElementById("VNInewdea").innerHTML ='+ Số người chết mới:  '+VNInewdea;
                document.getElementById("VNIdea").innerHTML ='+ Tổng số người chết:  '+VNIdea;
                document.getElementById("VNInewcover").innerHTML ='+ Số người phục hồi mới: '+VNInewcover;
                document.getElementById("VNIcover").innerHTML ='+ Tổng số người phục hồi: '+VNIcover;
            }
        });
        $('#virus').append(virus_data);
    })


    // $.ajax({
    //     data: 'GET',
    //     url: 'https://api.covid19api.com/summary',
    //     success: function(corona)
    //     {
    //
    //         //Globe data
    //         var result = JSON.parse(corona);
    //         var virus_data = '';
    //         $.each(result.data, function (key, value) {
    //             virus_data += '<tr>';
    //             virus_data += '<td> '+value.Country+' </td>';
    //             virus_data += '<td> '+value.TotalConfirmed+' </td>';
    //             virus_data += '<td> '+value.TotalDeaths+' </td>';
    //             virus_data += '<td> '+value.TotalRecovered+' </td>';
    //
    //             //VietNam data
    //             if(value.location == 'VietNam')
    //             {
    //                 cou = value.location;
    //                 VNIcase =value.confirmed;
    //                 VNIdea = value.deaths;
    //                 VNIcover = value.recovered;
    //                 document.getElementById("VNIcase").innerHTML ='+ Số ca nhiễm:  '+ VNIcase;
    //                 document.getElementById("VNIdea").innerHTML ='+ Số người chết:  '+VNIdea;
    //                 document.getElementById("VNIcover").innerHTML ='+ Số người phục hồi: '+VNIcover;
    //             }
    //         });
    //         $('#virus').append(virus_data);
    //
    //     },
    //
    // });

});







