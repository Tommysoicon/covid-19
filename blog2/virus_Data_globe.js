$(document).ready(function(){


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
            });
            $('#virus').append(virus_data);

        },

    });

});