var objectArray;
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "hosin.csv",
        dataType: "text",
        success: function(data) {objectArray = $.csv.toObjects(data);}
     });
});

$("#buttonMainSearch").click(function () {
    var searchword = $("#main-search-bar").val();

    if (searchword) {
        $("#productsContainer").html("Search Result:<br/>");
    }
});

function processData(allText) {
    var urlParams = new URLSearchParams(window.location.search);
    var paraProductId = urlParams.get('productId');
    var data = $.csv.toObjects(allText);
    data.forEach(function(item) {
        // do something with `item`
        if (item.productId == paraProductId) {
            $('#productCat').text(item.category);
            $('#productName').text(item.productName);
            $('#productSubtitle').text(item.subtitle);
            $('#productId').text("SKU: "+item.productId);
            if ($.trim(item.size)) {$('#productSize').text("Size: "+item.size);}
            else {$('#productSize').remove();}
            if ($.trim(item.size2)) {$('#productSize2').text(item.size2);}
            else {$('#productSize2').remove();}
            $('#productImage > img').attr('src', "productimage/"+item.image);
            $('#productRemarks').text(item.remarks);
            html = '<a target="_black" download href="productdoc/'+item.documents+'"><h4><i class="fa fa-file-pdf-o" aria-hidden="true"></i>' + item.documents + "</h4></a><br/>";
            $('#productDoc').append(html);
            return true;
        }
    });
    
}