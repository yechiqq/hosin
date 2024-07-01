var objectArray = [];
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
        searchword = searchword.toLowerCase();
        $("#productsContainer").html("Search Result:<br/>");
        objectArray.forEach(function(item) {
            // do something with `item`
            if (item.productName.toLowerCase().indexOf(searchword) >= 0) {
                html = item.productName;
                $('#productsContainer').append(html);
                return true;
            }
        });
    }
});
