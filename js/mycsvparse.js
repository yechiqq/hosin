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
    $('#productName').text(data[0].productName);
    $('#productSubtitle').text(data[0].subtitle);
    $('#productId').text(data[0].productId);
    $('#productSize').text(data[0].size);
    $('#productSize2').text(data[0].size2);
    $('#productImage > img').attr('src', data[0].image);
    $('#productRemarks').text(data[0].remarks);
    $('#productDoc').text(data[0].documents);
}