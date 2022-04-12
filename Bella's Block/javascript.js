// alert("Hello World")

$(document).click(function(){
    $(".container").css("grid-template-columns", "repeat(8, 1fr)")
})

$(document).mousemove(function(){
    //$(".item").css("background", "yellow")
    if($(".item1:hover").length == 1){
        //.length gives the number of options available for something
        //only 2 hover states; 0 and 1; hovering or not hovering
        // == is only used in if statements, != means not something
        $(".item1").css("background", "rgb(190, 191, 250)")
        $('#title1').css("font-size", "30px")
        $('#title1').css("letter-spacing", "20px")
    }
    else{
        $(".item1").css("background", "rgb(179, 223, 255)")
        $(".item2").css("background", "rgb(179, 223, 255)")
        $(".item3").css("background", "rgb(179, 223, 255)")
        $(".item4").css("background", "rgb(179, 223, 255)")
        $(".item5").css("background", "rgb(179, 223, 255)")
        $(".item6").css("background", "rgb(179, 223, 255)")
        $(".item7").css("background", "rgb(179, 223, 255)")

        $('#title1').css("font-size", "20px")
        $('#title1').css("letter-spacing", "normal")
    }

    if($(".item2:hover").length == 1){
        $("#title2").css("filter", "blur(0px)")
    }
})

