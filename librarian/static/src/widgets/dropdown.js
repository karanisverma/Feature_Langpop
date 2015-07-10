(function (window, $) {
    'use strict';
    $('#searchInput').keyup(function(){
        var valThis = $(this).val().toLowerCase();
        console.log(valThis);
        if(valThis == ""){
            $('.langs-column>p').show();           
        }
        
        else {
          $('.langs-column>p').each(function(){
             var text = $(this).text().toLowerCase();
             console.log(text);
             (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
         });
      }
    });
}(this, this.jQuery));
