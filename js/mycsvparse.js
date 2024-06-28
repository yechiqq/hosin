$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "hosin.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

const IID = 0;
const INAME = 1;
const ISUBTITLE = 2;
const ICATEGORY = 3;
const ISIZE = 4;
const ISIZE2 =5;
const IREMAKRS = 6;
const IIMAGE = 7;
const IDOCUMENT = 8;

function processData(allText) {
    var data = $.csv.toObjects(allText);
    $('#productCat').text(data[0].category);
    alert("csv lines: "+data.length);
}