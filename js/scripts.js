$(document).ready(function() {
  $('#track').submit(function(event) {

    event.preventDefault();

    var answer1 = $("input:radio[name=q1]:checked").val();
    var answer2 = $("input:radio[name=q2]:checked").val();
    var answer3 = $("input:radio[name=q3]:checked").val();
    var answer4 = $("input:radio[name=q4]:checked").val();
    var answer5 = $("input:radio[name=q5]:checked").val();
    var nameInput = $("input#name").val();

    if(!answer1, !answer2, !answer3, !answer4, !answer5) {
      alert("Oops! Please fill out each question before submitting!");
    }
    else {
      if (answer1 === 'small companies and startups' && answer2 === 'yes - i love it' || answer2 === "no - I wouldn't know where to start" && answer3 === 'creating a formula to act with user input' && answer4 === 'no - I am persistent and determined but I like to see my project up and running with faster results' && answer5 === 'not neccesarily') {
        $('.ruby').show();
        $('.nameOutput').text(nameInput);

      } else if (answer1 === 'large corporations' && answer2 === 'yes - i love it' || answer2 === "no - I wouldn't know where to start" && answer3 === 'writing elaborate software for a big database' && answer4 === 'yes - whatever it takes!' && answer5 ==='definitely') {
        $('.c').show();
        $('.nameOutput').text(nameInput);

      } else if (answer1 === 'large corporations' || answer1 === 'small companies and startups' && answer2 === 'yes - i love it' && answer3 === 'formatting a webpage according to user preference and usability' && answer4 === 'no - I am persistent and determined but I like to see my project up and running with faster results' || answer4 === 'yes - whatever it takes!' && answer5 ==='not neccesarily' || answer5 === 'definitely') {
        $('.css').show();
        $('.nameOutput').text(nameInput);
      
      } else {
        $('.leftover').show();
        $('.nameOutput').text(nameInput);
      }
    }
  });
});
