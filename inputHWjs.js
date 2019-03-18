"use strict";
console.log("link check");
$(document).ready(function(){
//below are the variables we will be using...so far
  var input = $("#input");
  var input2 = $("#input2");
  var ok = $("#ok");
  var results = $("#results");
  console.log("erfw");

  ok.click(function(){
//below are the variables we will be using for the text box values
    var line1 = input.val();
    var line2 = input2.val();

    if (line2.length == 1){
      // length of line2 can only be 1 char, if not results will read "try again"
      var fLetter = "";
      var numChar = 0;
      for (var char = 0; char < line1.length; char = char + 1) {
        if (line1.charAt(char) == line2) {
          numChar = numChar + 1;
          fLetter = fLetter + char + " ";
        } else {
          results.html("No character found. Try again");
        }

      } if (numChar > 0) {
        results.html("Valid. Character was found " + numChar + "times")
      }
    } else {
      results.html("invalid. Try again");
    }
  });
});
