console.log("the jokes are sourced");
var joke;
$(document).ready(function(){
  console.log("JQ is ready to Rock n' Roll");
  $('#submit').on('click', function(){
    console.log("in submit on click");
    var author = $('#author').val();
    var setup = $('#setup').val();
    var punch = $("#punchline").val();
    console.log("Joke info = ", author, setup, punch);
    joke ={whoseJoke: author, jokeQuestion: setup, punchLine: punch};
    console.log(joke);
    $.ajax({
            type: "POST",
            url: "/",
            data: joke,
            success: function(data){
              console.log('ajax success:', data);
            }//end success
          });//end AJAX
  });//end submit on click
});// end doc ready
