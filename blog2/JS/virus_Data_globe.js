// $(document).ready(function(){
//
//
//     $.ajax({
//         data: 'GET',
//         url: 'https://code.junookyo.xyz/api/ncov-moh/data.json',
//         success: function(data)
//         {
//
//             //Globe data
//             var result = JSON.parse(data);
//             var virus_data = '';
//             $.each(result.data.global, function (key, value) {
//                 document.getElementById('TG1').innerHTML ='+ Infection: ' + value.cases;
//                 document.getElementById('TG2').innerHTML ='+ Case Die: ' +value.deaths;
//                 document.getElementById('TG3').innerHTML ='+ Recovered: ' +value.recovered;
//             });
//
//         },
//
//     });
//
// });