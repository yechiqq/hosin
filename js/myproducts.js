var objectArray = [];
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "hosin.csv",
        dataType: "text",
        success: function(data) {objectArray = $.csv.toObjects(data);}
     });

    $("#buttonMainSearch").click(function () {
        var searchword = $("#main-search-bar").val();
        if (searchword) {
            searchword = searchword.toLowerCase();
            $("#productsContainer").html("Search Result:<br/>");
            $('#productsContainer').append('<div class="row">');
            html = "";
            objectArray.forEach(function(item) {
                // do something with `item`
                if (item.productName.toLowerCase().indexOf(searchword) >= 0) {
                    html += '<div class="col-sm-6 col-md-4 isotope-item">';
                    html += '<a class="" href="product.html?productId='+item.productId+'"><div class="image-box"><div class="overlay-container"><img class="img-fluid" src="productimage/'+item.image+'" alt="No Image"></div></div><div class="featurename">'+item.productName+'</div></a>';
                    html += '</div>';
                    $('#productsContainer').append(html);
                }
            });
            $('#productsContainer').append('</div>');
        }
    });
});




