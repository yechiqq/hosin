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
    var urlParams = new URLSearchParams(window.location.search);
    var paraProductId = urlParams.get('productId');
    var data = $.csv.toObjects(allText);
    data.forEach(function(item) {
        // do something with `item`
        if (item.productId == paraProductId) {
            alert("productid:"+item.productId+". para:"+paraProductId);
            $('#productCat').text(data[0].category);
            $('#productName').text(data[0].productName);
            $('#productSubtitle').text(data[0].subtitle);
            $('#productId').text("SKU: "+data[0].productId);
            $('#productSize').text("Size: "+data[0].size);
            $('#productSize2').text(data[0].size2);
            $('#productImage > img').attr('src', "productimage/"+data[0].image);
            $('#productRemarks').text(data[0].remarks);
            html = '<a target="_black" download href="productdoc/'+data[0].documents+'"><h4><i class="fa fa-file-pdf-o" aria-hidden="true"></i>' + data[0].documents + "</h4></a><br/>";
            $('#productDoc').append(html);
            return true;
        }
    });
    
}