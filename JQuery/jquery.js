// $("p").hide();
// document.getElementsByTagName("p");
//======================================================
//select for the class name 
// $(".amazing").hide();
// document.getElementsByTagName("amazing");
//=======================================================
//showing one more thing preferef way to write the jquery 
// $(document).ready(
//     function(){
//         $(".amazing").hide();
//     }
// )


//====================================================
//Actions in jquery
// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).hide();
//     });
// });
//==============
//OR
//==============
// $(document).ready(function(){
//     $(".p1").click(function(){
//         $(p).hide();
//     });
// });
//Still didn't work
//==========================================================
//CSS jquery
// $(document).ready(function(){
//     $("p").click(function(){
//         if ($(this).hasClass("blue")) {
//             $(this).removeClass("blue");
//         }
//         else {

//             $(this).addClass("blue");
//         }
//     });
// });
//===================
//Simple way
//===================
// $(document).ready(function(){
//     $("p").click(function() {
//         $(this).toggleClass("blue") ;

//     });
// });

//=====================
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
 
    $("button").click(function(){
        $(this).hide();
    });
    $("button").click(function(){
        $(".pets").hide();
    });