//Checks that data was provided. Does not currently check for formatting

function validateItems() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var phone = document.forms["contactForm"]["phone"].value;
  var reason = document.forms["contactForm"]["reason"].value;
  var info = document.forms["contactForm"]["info"].value;
  var beenTo = document.forms["contactForm"]["beenTo"].value;
  //Multiple checkboxes with the same name causes form to come back blank
  //Gave each day a different name and combine here for validation
  var contact = checkorheck();
  if (name != "" && email != "" && phone != "" && reason != "" && info != "" && beenTo != "" && contact != "" ) {
    //Add form submitted after backend is in place.
    alert("Information is Valid!");
    return false;
  }

  else{
    alert("Please complete the full form.");
    return false;
  }
}

//Workaround as document.forms["contractForm"]["contract"] always returned blank.
//Checks to see if at least one checkbox is checked.
//If at least one is checked returns true if none returns false
function checkorheck(){
  var checkIds = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  var result = false;
  for (var i = 0; i < checkIds.length; i++){
    if (document.getElementById(checkIds[i]).checked == true){
      result = true;
    }
  }
  return result

}