$(document).ready(function(){
    $("body").dblclick(function(){
        $("#ControlMenu > div.container-fluid.container-fluid-max-xl").toggle();
    })
    $("#navigation > ul").hide()
    $("#footer > p").hide()

    console.log("tema esta funcionando perfectamente...");
})