  

function setImage() {
var image = document.getElementById("shipViews");
select = document.getElementsByTagName('select')[0];
      image.src=select.value;
      console.log('set src to ' + select.value);
  }

function homeAlert() {
var answer = confirm ("Continue to Home page?")
if (answer)
window.location="index.html";
}

let userInput = "";
while (userInput = prompt ("Enter a number between 1 and 3:")){
  if (isNaN(userInput) || userInput < 1 || userInput > 3){
    alert ("Re-enter number between 1 and 3:");
  } else if (userInput == 3){
        
    alert ("Winner winner chicken dinner!");
    break;
  }
    else{
    alert ("Better luck next time!");
    break;
  }
}
