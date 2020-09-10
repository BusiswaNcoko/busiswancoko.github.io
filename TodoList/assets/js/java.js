$("ul").on("click", "li", function(){
   if($(this).css("color") ==="rgb(128, 128, 128)"){
       $(this).css({
           color: "black",
           textDecoration: "none"
       });
   }else {
    $(this).css({
        color: "gray",
        textDecoration: "line-through" });
    }
});

//To delete the to do list
$("span").on("click",function(event){
    $(this).parent().remove();
    event.stopPropagation();
});

//add to do list
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span>" + todoText + "</li>")
        
    }
})
$(".fa-minus").click(function(){
    $("input[type='text']").fadeToggle();
});