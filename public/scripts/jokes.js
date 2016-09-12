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
              for (var i = 0; i < data.length; i++) {
                var name = data[ i ].whoseJoke;
                var setup = data[ i ].jokeQuestion;
                var punchline = data[ i ]. punchLine;
                var jokeInfo = "<h4>"+name+"'s Joke:</h4><p class='setup'>"+ setup + "</p><p class='punchline'>" + punchline + "</p>";
                $("#displayJokes").append(jokeInfo);
                $(".display").css("border", "2px solid #cccccc");
              }
            }//end success
          });//end AJAX
  });//end submit on click
});// end doc ready
