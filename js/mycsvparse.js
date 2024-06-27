$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "hosin.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
    var data = $.csv.toObjects(allText);
    alarm("csv lines: "+data.length);
}