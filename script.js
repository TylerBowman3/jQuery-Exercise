$("article img").addClass("image-center");

$("article p:last-child").remove();

$("#title").css("font-size", (Math.random() * 100));

$("ul").append($('<li> Hi there </li>'));

$(".col-sm-4").empty().append($('<p> sorry for the list </p>'));

$("input").on("keyup", function () {
    $(this).css("background-color", this.value);
});

$("img").click(function(e){
    $(e.target.remove());
});