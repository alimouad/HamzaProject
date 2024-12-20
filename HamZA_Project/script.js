
const imageList = ['10.png','1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png']; // Add your images here
const imageContainer = document.querySelector('.image');

let currentIndex = 0;

// Function to load the current image into the image container with transition
function showImage(index) {
    imageContainer.innerHTML = ''; 

    const imgElement = document.createElement('img');
    imgElement.src = `assets/${imageList[index]}`; 

    // Wait for the image to load before adding the 'show' class for transition
    imgElement.onload = () => {
        imgElement.classList.add('show'); 
    };

    imageContainer.appendChild(imgElement);
}

// Event listeners for navigation buttons
document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : imageList.length - 1;
    showImage(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex < imageList.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

// Initialize the first image
showImage(currentIndex);



document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
        rvmActive()
    });
});


document.getElementById("downloadBtn").addEventListener("click", function () {
    // Show the message
    const message = document.getElementById("message");
    message.style.display = "block";

    // Simulate download logic (e.g., link to download file)
    // setTimeout(() => {
    //     alert("Download process initiated."); // Example logic for user feedback
    // }, 500);

    // Optionally hide the message after a few seconds
    setTimeout(() => {
        message.style.display = "none";
    }, 10000);
});
