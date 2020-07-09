  

function setImage() {
var image = document.getElementById("shipViews");
select = document.getElementsByTagName('select')[0];
      image.src=select.value;
      console.log('set src to ' + select.value);
  }