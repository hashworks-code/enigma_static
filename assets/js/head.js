$("#open_popup").click(function(){
    $("#popup").css("display", "flex");
    $("#bgImg").css("background-image",'url(' + '../assets/image/popup.jpg' + ')');
    $("#pop1").show();
    $("#imga").hide();
    });
      
    $("#close_popup").click(function(){
        $("#popup").css("display", "none");
      }); 
    
    $('body').click(function(e){
      if(e.target.style[0] == "display"){
        $("#popup").css("display","none");
      }
    });

function submitContact(value) {
  if(value === 'success') {
    $("#bgImg").css("background-image",'url(' + '../assets/image/thanks.jpg' + ')');
    $("#pop1").hide();
    $("#imga").show();
  }
}

$("#openMobile").click(function(){
    $("#mobileview").css("display", "flex");
  });

 $("#close_view").click(function(){
    $("#mobileview").css("display", "none");
  }); 

$('body').click(function(e){
if(e.target.style[0] == "display"){
  $("#mobileview").css("display","none");
}
});
//mob.header

$("#open_popup3").click(function(){
          $("#popup3").css("display", "flex");
          $("#bgImg3").css("background-image",'url(' + '../assets/image/popup.jpg' + ')');
        $("#pop3").show();
        $("#imga3").hide();
        });
      
      $("#close_popup3").click(function(){
          $("#popup3").css("display", "none");
        }); 
    
    $('body').click(function(e){
      if(e.target.style[0] == "display"){
        $("#popup3").css("display","none");
      }
    });

function submitContact3(value) {
  if(value === 'success') {
    $("#bgImg3").css("background-image",'url(' + '../assets/image/thanks.jpg' + ')');
    $("#pop3").hide();
    $("#imga3").show();
  }
}