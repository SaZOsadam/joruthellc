let menuBtn = document.getElementById("menuBtn")
let menu_bar = document.getElementById("menu_bar")
let menu = document.getElementById("menu")
let dropdownButton = document.getElementById("dropdown-button");
let dropdownMenu= document.getElementById("dropdown-menu");
let dropdowns = document.getElementById("dropdowns");
   
    menu_bar.style.right = "-256px";

    menuBtn.onclick = function(){
        if(menu_bar.style.right == "-256px"){
            menu_bar.style.right = "0";
        }
        else{
            menu_bar.style.right = "-256px"
        }
    }


// Add a click event listener to the dropdown button
document.addEventListener('click', function(event) {
  let isClickInside = dropdowns.contains(event.target);
  // Toggle the display of the dropdown content
  if (dropdownMenu.style.display === 'block') {
    dropdownMenu.style.display = 'none';
  } else {
    dropdownMenu.style.display = 'block';
  }
});

// Add a click event listener to the document to close the dropdown when clicking outside
document.addEventListener('click', function(event) {
  let isClickInside = dropdowns.contains(event.target);
  if (!isClickInside) {
    dropdownMenu.style.display = 'none';
  }
});
document.getElementById('year').textContent = new Date().getFullYear();

