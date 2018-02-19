$(document).ready(function(){

  $("#firstDiv").mouseenter(function(){
          $(this).css("color", "green");
          $(this).css("background-color", "green");
    });

  $("#firstDiv").mouseleave(function(){
        $(this).css("color", "blue");
        $(this).css("background-color", "blue");
    });

  $("#secondDiv").mouseenter(function(){
          $(this).css("color", "green");
          $(this).css("background-color", "green");
    });

  $("#secondDiv").mouseleave(function(){
        $(this).css("color", "blue");
        $(this).css("background-color", "blue");
    });

});
