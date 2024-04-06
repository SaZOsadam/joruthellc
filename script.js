let menuBtn = document.getElementById("menuBtn");
let menu_bar = document.getElementById("menu_bar");
let menu = document.getElementById("menu");
let dropdownButton = document.getElementById("dropdown-button");
let dropdownMenu= document.getElementById("dropdown-menu");
let dropdowns = document.getElementById("dropdowns");
let readMoreBtn = document.getElementById("readMoreBtn");
let meetTeam 
   
    menu_bar.style.right = "-256px";

    menuBtn.onclick = function(){
        if(menu_bar.style.right == "-256px"){
            menu_bar.style.right = "0";
        }
        else{
            menu_bar.style.right = "-256px";
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

document.addEventListener('DOMContentLoaded', (event) => {
  // Get the 'Read More' button and the team details section
  const readMoreBtn = document.getElementById('readMoreBtn');
  const meetTeam = document.getElementById('meetTeam');

  // Initially, hide the team details section
  meetTeam.style.display = 'none';

  // Add click event listener to the 'Read More' button
  readMoreBtn.addEventListener('click', () => {
      // Check the current display style and toggle it
      if (meetTeam.style.display === 'none' || meetTeam.style.display === '') {
          meetTeam.style.display = 'block';  // If hidden, show it
          readMoreBtn.textContent = 'Read Less';  // Change button text to 'Read Less'
      } else {
          meetTeam.style.display = 'none';  // If shown, hide it
          readMoreBtn.textContent = 'Read More';  // Change button text back to 'Read More'
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    // Function to hide all images for all service categories
    function hideAlitemImages() {
        document.querySelectorAll('.service-category .item-images').forEach(imagesContainer => {
            imagesContainer.style.display = 'none';
        });
    }

    // Initially hide all service images
    hideAllitemImages();

    // Function to show images of a specific service category
    function showitemImages(serviceCategory) {
        const imagesContainer = serviceCategory.querySelector('.item-images');
        imagesContainer.style.display = 'block';
    }

    // Add click event listener to each service category header
    document.querySelectorAll('.service-category h3').forEach(serviceHeader => {
        serviceHeader.addEventListener('click', () => {
            // Hide all images first
            hideAllitemImages();

            // Show images for the clicked service category
            showitemImages(serviceHeader.parentElement);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
  // Initially hide all service images
  document.querySelectorAll('.service-category .item-images').forEach((itemImages) => {
    itemImages.style.display = 'none';
  });

  // Function to handle showing the service images
  function showitemImages(itemImages) {
    // First hide all service images
    document.querySelectorAll('.service-category .item-images').forEach((imgContainer) => {
      imgContainer.style.display = 'none';
    });
    // Show the clicked service images
    itemImages.style.display = 'block';
  }

  // Add click event listeners to each service category heading
  document.querySelectorAll('.service-category h3').forEach((categoryHeading) => {
    categoryHeading.addEventListener('click', () => {
      // The service images container is the next sibling of the category heading
      let serviceImages = categoryHeading.nextElementSibling;
      showitemImages(itemImages);
    });
  });
});
