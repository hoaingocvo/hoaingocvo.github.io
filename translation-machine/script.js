document.addEventListener("DOMContentLoaded", function() {
    // Get the toggle button and the song list panel
    const toggleButton = document.getElementById("toggleButton");
    const songList = document.getElementById("songList");

    // Add event listener to toggle the visibility of the song list
    toggleButton.addEventListener("click", function() {
        // Toggle the "active" class to show or hide the song list
        songList.classList.toggle("active");
    });
});

// Function to load the gallery for each song
function loadGallery(songID, songTitle, composerName, videoID, images) {
    // Set the song title and composer name
    document.getElementById('song-title').textContent = songTitle;
    document.getElementById('composer-name').textContent = composerName;

    // Load the video
    const videoFrame = document.createElement('iframe');
    videoFrame.src = `https://www.youtube.com/embed/${videoID}`;
    videoFrame.width = '80%';
    videoFrame.height = '500px';
    document.getElementById('video-frame-container').innerHTML = '';  // Clear previous content
    document.getElementById('video-frame-container').appendChild(videoFrame);

    // Load the image gallery
    const galleryContainer = document.getElementById('galleryContainer');
    galleryContainer.innerHTML = ''; // Clear previous images
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = `${songTitle} Image`;
        img.classList.add('gallery-image'); // Add class for styling or lightbox functionality
        galleryContainer.appendChild(img);
    });

    // Initialize lightbox functionality
    let galleryImagesElems = document.querySelectorAll('.gallery-image');
    galleryImagesElems.forEach((img, index) => {
        img.addEventListener('click', function() {
            openLightbox(index); // Open lightbox with clicked image
        });
    });
}

// Lightbox functionality
let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    let lightbox = document.getElementById('lightbox');
    let lightboxImage = document.getElementById('lightboxImage');
    let galleryImagesElems = document.querySelectorAll('.gallery-image');
    lightboxImage.src = galleryImagesElems[currentImageIndex].src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    let lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    let galleryImagesElems = document.querySelectorAll('.gallery-image');
    if (currentImageIndex >= galleryImagesElems.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryImagesElems.length - 1;
    }
    let lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = galleryImagesElems[currentImageIndex].src;
}


// Call the loadGallery function for Song 1 when the page loads
window.onload = function() {
    loadGallery('song1', 'Song Title 1', 'Composer 1', 'videoID1', [
        'images/song1-image1.jpg',
        'images/song1-image2.jpg',
        'images/song1-image3.jpg',
        'images/song1-image4.jpg'
    ]);
};