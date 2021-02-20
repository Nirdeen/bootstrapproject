
function myMove() {
    var elem = document.getElementById("myAnimation");   
 var pos = 0;
  var id = setInterval(frame, 0.1);
    function frame() {
     if (pos == 80) {
      setInterval(frame, 0);
                
       } else {
        pos++; 
        // elem.style.top = pos + 'px'; 
         elem.style.right = pos + 'px'; 
               }
}
   }



   

  


  

$(document).ready(function(){

   $("h1").css("color","#D6A944");
   $("h2").css("color","#113A2B");
   $("p").css("color"," #555F5B");
   $("h4").css("color"," #D6A944");
   $("h3").css("color","#113A2B");
   $('.play').each(function () {
      var $this = $(this);
      jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    });
   

 myMove();
}


)


