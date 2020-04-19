$(document).ready(function(){

    // // headers.append('Access-Control-Allow-Origin', '*');
    // $.getJSON("https://covid-19api.com/api/countries-latest", function (corona)
    // {
    //     var virus_data = '';
    //     $.each(corona, function (key, value) {
    //         virus_data += '<tr>';
    //         virus_data += '<td> '+value.country+' </td>';
    //         virus_data += '<td> '+value.confirmed+' </td>';
    //         virus_data += '<td> '+value.deaths+' </td>';
    //         virus_data += '<td> '+value.recovered+' </td>';
    //         virus_data += '<td> '+value.date+' </td>';
    //         document.getElementById("123").innerHTML = 'Cập nhật lần cuối: ' +  value.date ;
    //     });
    //     $('#virus').append(virus_data);
    // })


    $.ajax({
        data: 'GET',
        url: 'https://ncovi.huynhhieu.com/api.php?code=external&fbclid=IwAR3JhX26KhvZmG3rUECy8UPfgkH0snH2EArpNdXXkNucXDLAPIQj1DbmaEk',
        success: function(data)
        {

            //Globe data
            var result = JSON.parse(data);
            var virus_data = '';
            $.each(result.data, function (key, value) {
                virus_data += '<tr>';
                virus_data += '<td> '+value.country+' </td>';
                virus_data += '<td> '+value.cases+' </td>';
                virus_data += '<td> '+value.deaths+' </td>';
                virus_data += '<td> '+value.recovered+' </td>';

                //VietNam data
                if(value.country == 'Vietnam')
                {
                    cou = value.cases;
                    VNIcase =value.cases;
                    VNIdea =+ value.deaths;
                    VNIcover =+ value.recovered;
                    document.getElementById("VNIcase").innerHTML ='+ Số ca nhiễm:  '+ VNIcase;
                    document.getElementById("VNIdea").innerHTML ='+ Số người chết:  '+VNIdea;
                    document.getElementById("VNIcover").innerHTML ='+ Số người phục hồi: '+VNIcover;
                }
            });
            $('#virus').append(virus_data);

        },

    });

});







