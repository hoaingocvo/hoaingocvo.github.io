// Function to toggle the menu overlay
function toggleMenu() {
    const menuOverlay = document.getElementById('menu-overlay');
    menuOverlay.style.display = menuOverlay.style.display === 'block' ? 'none' : 'block';
}

// Function to load the gallery, song title, composer, and video
function loadGallery(songKey, title, composer, videoId) {
    // Update song title and composer
    document.getElementById('song-title').textContent = title;
    document.getElementById('composer-name').textContent = composer;

    // Update video by changing the iframe's src to the new video
    const videoFrame = document.getElementById('video-frame');
    videoFrame.src = `https://www.youtube.com/embed/${videoId}`;

    // Load images based on song selection
    const galleryContainer = document.getElementById('galleryContainer');
    galleryContainer.innerHTML = ''; // Clear any existing images

    // Example images for each song
    let images;
    if (songKey === 'song1') {
        images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
    } else if (songKey === 'song2') {
        images = ['image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg'];
    } else if (songKey === 'song3') {
        images = ['image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg'];
    }

    // Display images for the selected song
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${image}`;
        imgElement.alt = `${title} - Image`;
        galleryContainer.appendChild(imgElement);
    });
}
