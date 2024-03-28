let menuBtn = document.getElementById("menuBtn")
let menu_bar = document.getElementById("menu_bar")
let menu = document.getElementById("menu")
let dropdownButton = document.getElementById("dropdown-button");
let dropdownMenu= document.getElementById("dropdown-menu");
let dropdowns = document.getElementById("dropdowns");
   
    menu_bar.style.right = "-250px";

    menuBtn.onclick = function(){
        if(menu_bar.style.right == "-250px"){
            menu_bar.style.right = "0";
        }
        else{
            menu_bar.style.right = "-250px"
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    $(document).ready(function() {
        $('#menuBtn').click(function() {
            $('#menu_bar').css('right', '0');
        });
    });

// Add a click event listener to the dropdown button
dropdownButton.addEventListener('click', function() {
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