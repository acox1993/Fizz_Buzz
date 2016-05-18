$(document).ready(function(){
	for (var i = 1; i <= 100; i++) {
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
}

});