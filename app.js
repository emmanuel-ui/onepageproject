const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');

});

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.Style.backgroundColor = '#0805052c';
    } else {
        header.Style.backgroundColor = 'transparent';
    }
});

menu_item.forEach(item=>{
    item.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 3000); // Change image every 3 seconds
// }

// // Modal functionality
// document.querySelectorAll('.slideshow-container img').forEach(img => {
//     img.onclick = function() {
//         let modalId = img.getAttribute('data-modal');
//         let modal = document.getElementById(modalId);
//         let rect = img.getBoundingClientRect();
//         modal.style.display = "flex";
//         let modalContent = modal.querySelector('.modal-content');
//         modalContent.style.top = `${rect.top}px`;
//         modalContent.style.left = `${rect.left}px`;
//         modalContent.style.width = `${rect.width}px`;
//         modalContent.style.height = `${rect.height}px`;

//         setTimeout(() => {
//             modalContent.style.width = "80%";
//             modalContent.style.height = "auto";
//             modalContent.style.top = "50%";
//             modalContent.style.left = "50%";
//             modalContent.style.transform = "translate(-50%, -50%)";
//         }, 10);
//     }
// });

// document.querySelectorAll('.close').forEach(closeBtn => {
//     closeBtn.onclick = function() {
//         let modalId = closeBtn.getAttribute('data-modal');
//         let modal = document.getElementById(modalId);
//         modal.style.display = "none";
//     }
// });

// window.onclick = function(event) {
//     if (event.target.classList.contains('modal')) {
//         event.target.style.display = "none";
//     }
// }

// function showSlides(slideshowId) {
//     let slideIndex = 0;
//     let slides = document.querySelectorAll(`#${slideshowId} .mySlides`);
//     let dots = document.querySelectorAll(`.dot[data-slideshow="${slideshowId}"]`);
    
//     function displaySlides() {
//         for (let i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         slideIndex++;
//         if (slideIndex > slides.length) {slideIndex = 1}
//         for (let i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex-1].style.display = "block";
//         dots[slideIndex-1].className += " active";
//         setTimeout(displaySlides, 5000); // Change image every 5 seconds
//     }
    
//     displaySlides();
// }

// // Initialize slideshows
// document.querySelectorAll('.slideshow-container').forEach(container => {
//     showSlides(container.id);
// });

// // Modal functionality
// document.querySelectorAll('.slideshow-container img').forEach(img => {
//     img.onclick = function() {
//         let modalId = img.getAttribute('data-modal');
//         let modal = document.getElementById(modalId);
//         let rect = img.getBoundingClientRect();
//         modal.style.display = "flex";
//         let modalContent = modal.querySelector('.modal-content');
//         modalContent.style.top = `${rect.top}px`;
//         modalContent.style.left = `${rect.left}px`;
//         modalContent.style.width = `${rect.width}px`;
//         modalContent.style.height = `${rect.height}px`;

//         setTimeout(() => {
//             modalContent.style.width = "50%";
//             modalContent.style.height = "auto";
//             modalContent.style.top = "50%";
//             modalContent.style.left = "50%";
//             modalContent.style.transform = "translate(-50%, -50%)";
//         }, 10);
//     }
// });

// document.querySelectorAll('.close').forEach(closeBtn => {
//     closeBtn.onclick = function() {
//         let modalId = closeBtn.getAttribute('data-modal');
//         let modal = document.getElementById(modalId);
//         modal.style.display = "none";
//     }
// });

// window.onclick = function(event) {
//     if (event.target.classList.contains('modal')) {
//         event.target.style.display = "none";
//     }
// }
// function showSlides(slideshowId) {
//     let slideIndex = 0;
//     let slides = document.querySelectorAll(`#${slideshowId} .mySlides`);
//     let dots = document.querySelectorAll(`.dot[data-slideshow="${slideshowId}"]`);
//     let prevButton = document.querySelector(`#${slideshowId} .prev`);
//     let nextButton = document.querySelector(`#${slideshowId} .next`);

//     function displaySlides() {
//         for (let i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         slideIndex++;
//         if (slideIndex > slides.length) {slideIndex = 1}
//         for (let i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex-1].style.display = "block";
//         dots[slideIndex-1].className += " active";
//         setTimeout(displaySlides, 5000); // Change image every 5 seconds
//     }

//     function plusSlides(n) {
//         slideIndex += n;
//         if (slideIndex > slides.length) {slideIndex = 1}
//         else if (slideIndex < 1) {slideIndex = slides.length}
//         displaySlides();
//     }

//     displaySlides();

//     // Event listeners for navigation arrows
//     prevButton.addEventListener('click', () => plusSlides(-1));
//     nextButton.addEventListener('click', () => plusSlides(1));
// }

// // Initialize slideshows
// document.querySelectorAll('.slideshow-container').forEach(container => {
//     showSlides(container.id);
// });

// function showSlides(slideshowId) {
//     let slideIndex = 0;
//     let slides = document.querySelectorAll(`#${slideshowId} .mySlides`);
//     let dots = document.querySelectorAll(`.dot[data-slideshow="${slideshowId}"]`);
    
//     function displaySlides() {
//         for (let i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         slideIndex++;
//         if (slideIndex > slides.length) {slideIndex = 1}
//         for (let i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex-1].style.display = "block";
//         dots[slideIndex-1].className += " active";
//         setTimeout(displaySlides, 5000); // Change image every 5 seconds
//     }
    
//     function plusSlides(n) {
//         showSlidesAt(slideIndex += n);
//     }

//     function showSlidesAt(n) {
//         if (n > slides.length) {slideIndex = 1}
//         if (n < 1) {slideIndex = slides.length}
//         for (let i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         slides[slideIndex-1].style.display = "block";
//     }

//     displaySlides();
// }

// // Initialize slideshows
// document.querySelectorAll('.slideshow-container').forEach(container => {
//     showSlides(container.id);
// });


// function showSlides(slideshowId) {
//     let slideIndex = 0;
//     let slides = document.querySelectorAll(`#${slideshowId} .mySlides`);
//     let dots = document.querySelectorAll(`.dot[data-slideshow="${slideshowId}"]`);

//     function displaySlides() {
//         for (let i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         slideIndex++;
//         if (slideIndex > slides.length) {slideIndex = 1}
//         for (let i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex-1].style.display = "block";
//         dots[slideIndex-1].className += " active";
//         setTimeout(displaySlides, 5000); // Change image every 5 seconds
//     }

//     function plusSlides(n) {
//         showSlidesAt(slideIndex += n);
//     }

//     function showSlidesAt(n) {
//         if (n > slides.length) {slideIndex = 1}
//         if (n < 1) {slideIndex = slides.length}
//         for (let i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         slides[slideIndex-1].style.display = "block";
//     }

//     displaySlides();

//     // Event listeners for navigation arrows
//     document.querySelector(`#${slideshowId} .prev`).addEventListener('click', () => plusSlides(-1));
//     document.querySelector(`#${slideshowId} .next`).addEventListener('click', () => plusSlides(1));
// }

// // Initialize slideshows
// document.querySelectorAll('.slideshow-container').forEach(container => {
//     showSlides(container.id);
// });

// function showSlides(slideshowId) {
//     let slideIndex = 0;
//     let slides = document.querySelectorAll(`#${slideshowId} .mySlides`);
//     let dots = document.querySelectorAll(`.dot[data-slideshow="${slideshowId}"]`);

//     function displaySlides() {
//         for (let i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         slideIndex++;
//         if (slideIndex > slides.length) {slideIndex = 1}
//         for (let i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex-1].style.display = "block";
//         dots[slideIndex-1].className += " active";
//         setTimeout(displaySlides, 5000); // Change image every 5 seconds
//     }

//     function plusSlides(n) {
//         showSlidesAt(slideIndex += n);
//     }

//     function showSlidesAt(n) {
//         if (n > slides.length) {slideIndex = 1}
//         if (n < 1) {slideIndex = slides.length}
//         for (let i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         slides[slideIndex-1].style.display = "block";
//     }

//     displaySlides();

//     // Event listeners for navigation arrows
//     document.querySelector(`#${slideshowId} .prev`).addEventListener('click', () => plusSlides(-1));
//     document.querySelector(`#${slideshowId} .next`).addEventListener('click', () => plusSlides(1));

//     // Modal functionality
//     document.querySelectorAll(`#${slideshowId} img`).forEach(img => {
//         img.onclick = function() {
//             let modalId = img.getAttribute('data-modal');
//             let modal = document.getElementById(modalId);
//             let rect = img.getBoundingClientRect();
//             modal.style.display = "flex";
//             let modalContent = modal.querySelector('.modal-content');
//             modalContent.style.top = `${rect.top}px`;
//             modalContent.style.left = `${rect.left}px`;
//             modalContent.style.width = `${rect.width}px`;
//             modalContent.style.height = `${rect.height}px`;

//             setTimeout(() => {
//                 modalContent.style.width = "50%";
//                 modalContent.style.height = "auto";
//                 modalContent.style.top = "50%";
//                 modalContent.style.left = "50%";
//                 modalContent.style.transform = "translate(-50%, -50%)";
//             }, 10);
//         }
//     });
// }

// // Initialize slideshows
// document.querySelectorAll('.slideshow-container').forEach(container => {
//     showSlides(container.id);
// });

function showSlides(slideshowId) {
    let slideIndex = 0;
    let slides = document.querySelectorAll(`#${slideshowId} .mySlides`);
    let dots = document.querySelectorAll(`.dot[data-slideshow="${slideshowId}"]`);

    function displaySlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        setTimeout(displaySlides, 5000); // Change image every 5 seconds
    }

    function plusSlides(n) {
        showSlidesAt(slideIndex += n);
    }

    function showSlidesAt(n) {
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }

    displaySlides();

    // Event listeners for navigation arrows
    document.querySelector(`#${slideshowId} .prev`).addEventListener('click', () => plusSlides(-1));
    document.querySelector(`#${slideshowId} .next`).addEventListener('click', () => plusSlides(1));

// // Modal functionality
// document.querySelectorAll(`#${slideshowId} img`).forEach(img => {
//     img.onclick = function() {
//         let modalId = img.getAttribute('data-modal');
//         let modal = document.getElementById(modalId);
//         let rect = img.getBoundingClientRect();
//         modal.style.display = "flex";
//         let modalContent = modal.querySelector('.modal-content');
//         modalContent.style.top = `${rect.top}px`;
//         modalContent.style.left = `${rect.left}px`;
//         modalContent.style.width = `${rect.width}px`;
//         modalContent.style.height = `${rect.height}px`;

//         setTimeout(() => {
//             modalContent.style.width = "50%";
//             modalContent.style.height = "auto";
//             modalContent.style.top = "50%";
//             modalContent.style.left = "50%";
//             modalContent.style.transform = "translate(-50%, -50%)";
//         }, 10);

//         // Hide navigation arrows when modal is shown
//         document.querySelector(`#${slideshowId} .prev`).style.display = "none";
//         document.querySelector(`#${slideshowId} .next`).style.display = "none";

//         // Close modal when clicking on the close button
//         modal.querySelector('.close').onclick = function() {
//             modal.style.display = "none";
//             // Show navigation arrows when modal is closed
//             document.querySelector(`#${slideshowId} .prev`).style.display = "block";
//             document.querySelector(`#${slideshowId} .next`).style.display = "block";
//         };

//         // Close modal when clicking outside of it
//         modal.onclick = function(event) {
//             if (event.target === modal) {
//                 modal.style.display = "none";
//                 // Show navigation arrows when modal is closed
//                 document.querySelector(`#${slideshowId} .prev`).style.display = "block";
//                 document.querySelector(`#${slideshowId} .next`).style.display = "block";
//             }
//         };
//     }
// });



// // Modal functionality
// document.querySelectorAll(`#${slideshowId} img`).forEach(img => {
//     img.onclick = function() {
//         let modalId = img.getAttribute('data-modal');
//         let modal = document.getElementById(modalId);
//         modal.style.display = "flex";
//         let modalContent = modal.querySelector('.modal-content');

//         // Set top and bottom margin
//         let modalTopMargin = 20;
//         let modalBottomMargin = 20;

//         // Calculate available height for content
//         let availableHeight = modal.clientHeight - (modalTopMargin + modalBottomMargin);

//         // Set maximum height for content
//         modalContent.style.maxHeight = `${availableHeight}px`;

//         // Center modal content horizontally
//         modalContent.style.left = "50%";
//         modalContent.style.transform = "translateX(-50%)";

//         // Hide navigation arrows when modal is shown
//         document.querySelector(`#${slideshowId} .prev`).style.display = "none";
//         document.querySelector(`#${slideshowId} .next`).style.display = "none";

//         // Close modal when clicking on the close button
//         modal.querySelector('.close').onclick = function() {
//             modal.style.display = "none";
//             // Show navigation arrows when modal is closed
//             document.querySelector(`#${slideshowId} .prev`).style.display = "block";
//             document.querySelector(`#${slideshowId} .next`).style.display = "block";
//         };

//         // Close modal when clicking outside of it
//         modal.onclick = function(event) {
//             if (event.target === modal) {
//                 modal.style.display = "none";
//                 // Show navigation arrows when modal is closed
//                 document.querySelector(`#${slideshowId} .prev`).style.display = "block";
//                 document.querySelector(`#${slideshowId} .next`).style.display = "block";
//             }
//         };

//         // Ensure modal content is contained within its container
//         modalContent.style.overflowY = "auto";
//     }
// });

// Modal functionality
document.querySelectorAll(`#${slideshowId} img`).forEach(img => {
    img.onclick = function() {
        let modalId = img.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        modal.style.display = "flex";
        let modalContent = modal.querySelector('.modal-content');

        // Set top and bottom margin
        let modalTopMargin = 20;
        let modalBottomMargin = 20;

        // Calculate available height for content
        let availableHeight = modal.clientHeight - (modalTopMargin + modalBottomMargin);

        // Set maximum height for content
        modalContent.style.maxHeight = `${availableHeight}px`;

        // Center modal content horizontally
        modalContent.style.left = "50%";
        modalContent.style.transform = "translateX(-50%)";

        // Hide navigation arrows when modal is shown
        let prevBtn = document.querySelector(`#${slideshowId} .prev`);
        let nextBtn = document.querySelector(`#${slideshowId} .next`);
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";

        // Close modal when clicking on the close button
        modal.querySelector('.close').onclick = function() {
            modal.style.display = "none";
            // Show navigation arrows when modal is closed
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
        };

        // Close modal when clicking outside of it
        modal.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
                // Show navigation arrows when modal is closed
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
            }
        };

        // Ensure modal content is contained within its container
        modalContent.style.overflowY = "auto";
    }
});





}

// Initialize slideshows
document.querySelectorAll('.slideshow-container').forEach(container => {
    showSlides(container.id);
});


