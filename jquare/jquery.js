$(document).ready(function(){
  "use strict";
    $("button").click(function(){
      $("p").css("color","#00f");
    });
    $("button").mouseenter(function(){

        $("p").css("background-color","red");
    });
    $("p").hover( function()
  { $(this).css("color","#467"); }, function() {$("button").css("background-color" ," #00f");}
    );
    $("#2").click( function()
    {
      $(".turn").hide(3000 ,function(){ $("span").show();});
    }
    );
    $("<button>copy</button>").insertAfter("textarea").on("click",function(){
      $("textarea").css("color","red").select();  

    });
    $("textarea").select(function(){
      $("<p> u can copy now</p>").text($("textarea").val()).insertAfter(this);
    });
    

  });