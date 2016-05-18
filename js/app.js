$(document).ready(function(){
   function userCount() {
      input = $('#count').val();
      if (isNaN(input)) {
         $('h3#head').html('Please enter a number');
         return
      }

      else if (input < 1 || input > 100) {
         $('h3#head').html('Please enter a number between 1 and 100');
         return
      };
      $('input#count').val('').focus();

      for (var i = 1; i <= input; i++) {
   // console.log(i);
   // $('body').append(i);

   if (i % 3 == 0 && i % 5 == 0){
         $('.numbers').append("<p>").append("Fizz Buzz, ").append("</p>")
   } 
   else if (i % 3 == 0) {
         $('.numbers').append("<p>").append("Fizz, ").append("</p>")
   }
   else if (i % 5 == 0) {
         $('.numbers').append("<p>").append("Buzz, ").append("</p>")
   }
   else {
         $('.numbers').append("<p>").append(i).append(", ").append("</p>")
   }
};

   };



$('#countButton').click(function() {
      userCount();
   });

});