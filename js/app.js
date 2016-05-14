$(document).ready(function(){
	for (var i = 1; i < 100; i++) {
   // console.log(i);
   // $('body').append(i);
   if (i % 3 == 0 && i % 5 == 0){
   		$('body').append("Fizz Buzz, ")
   } 
   else if (i % 3 == 0) {
   		$('body').append("Fizz, ")
   }
   else if (i % 5 == 0) {
   		$('body').append("Buzz, ")
   }
   else {
   		$('body').append(i).append(", ")
   }
}

});