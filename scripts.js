
function validateName(name){
    if (name.length < 2) {
        alert("input rejected. Name must be longer");
        return false;
    }
    digits="0123456789";
    alpha="abcdefghijklmnopqrstuvwxyz ";
    alphanum = alpha + digits + " ";
    name = name.toLowerCase();
    for (i=0; i<name.length; i++) {
        if (alphanum.indexOf(name.charAt(i)) == -1) {
            alert("Names can only contain letters or digits")
            return false;
        }
    }
}
function validateEmail(email){
        if (email.length < 5) {
            alert("Email must be longer");
            
        }
    }



function validateform(form) {
    var name = form.name.value;
    console.log('Name: ' + name);
    result = validateName(name);
    var email = form.email.value;
    console.log('Email: ' + email);
    result = validateEmail(email);


    var output  = document.getElementById("display");
    msg  = " Hello " + name + "! Thank you for contacting us! We will be sure to reach you at " + email + ". Have a nice day! ";
    output.innerHTML = msg;
    console.log(msg);
    return false;

}

(function($) {
    $.fn.scrollFade = function(options) {
      var settings = $.extend({
        fadeInSpeed: 1000,  
        offset: 0            
      }, options);

      var $elements = this;

    
      function checkScrollPosition() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        $elements.each(function() {
          var elementTop = $(this).offset().top;

          if (elementTop < (scrollTop + windowHeight - settings.offset)) {
            $(this).stop().fadeTo(settings.fadeInSpeed, 1);
          }
        });
      }

 
      $elements.css('opacity', 0);
      $(window).on('scroll', checkScrollPosition);
      checkScrollPosition(); 

      return this;
    };
  })(jQuery);

  $(document).ready(function() {
    $('.fade-element').scrollFade({
      fadeInSpeed: 1000,  
      offset: 100         
    });
  });
  