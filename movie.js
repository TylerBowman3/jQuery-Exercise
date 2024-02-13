const titleInp = document.querySelector("#title")
const ratingInp  = document.querySelector("#rating")


$("form").on('submit',function(evt){
    evt.preventDefault();
    $(".answers").append(`<li>Title: ${titleInp.value} Rating: ${ratingInp.value}</li>`).append("<button>Remove</button>");
})


$(".answers").click(function() {
    $(this).empty();
})


