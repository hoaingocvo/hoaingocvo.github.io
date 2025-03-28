document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const toggleButton = document.getElementById("toggleButton");
    const closeButton = document.getElementById("closeButton");
    const songList = document.getElementById("songList");
    const buttonContainer = document.querySelector(".button-container"); 
    const songInfo = document.getElementById("song-info");
    const pdfDownloadButton = document.getElementById("pdfDownloadButton");
    const videoFrameContainer = document.getElementById("video-frame-container");
    const galleryContainer = document.getElementById("galleryContainer");
    const introPage = document.getElementById("intro");


    // Toggle song list visibility for "Performances" button
    toggleButton.addEventListener("click", function() {
        if (songList.style.display === "none" || songList.style.display === "") {
            songList.style.display = "block"; // ✅ Show the song list
        } else {
            songList.style.display = "none"; // Hide if it's already open
        }    });


    // Dynamically load gallery when a song is clicked
    songList.addEventListener("click", function(e) {
        if (e.target && e.target.matches("a")) {
            // Get the song data from the clicked link
            const songID = e.target.getAttribute("data-song-id");
            const songData = songs.find(song => song.songID === songID);
            
            if (songData) {
                loadGallery(songData.songID, songData.songTitle, songData.composerName, songData.videoID, songData.images);
            }
        }

    const songList = document.getElementById("songList");
    const gallery = document.querySelector(".gallery-container"); // Select the gallery

        if (songList) {
        songList.style.display = "none"; // Hide song list
        }

        if (gallery) {
        gallery.style.display = "none"; // Hide gallery
        }
    });
});

function loadGallery(songID, songTitle, composerName, videoID, images) {
    // Set the song title and composer name
    document.getElementById('song-title').textContent = songTitle;
    document.getElementById('composer-name').textContent = composerName;

    // Handle video section
    let videoContainer = document.getElementById("video-frame-container");
    videoContainer.innerHTML = ''; // Clear previous content
    

    if (videoID) {
        const videoFrame = document.createElement('iframe');
        videoFrame.src = `https://www.youtube.com/embed/${videoID}`;
        videoFrame.width = '80%';
        videoFrame.height = '500px';
        videoContainer.appendChild(videoFrame);
        videoContainer.style.display = "flex"; // Show video
    } else {
        videoContainer.style.display = "none"; // Hide video if no ID is given
    }

 // Load the image gallery dynamically
const galleryContainer = document.getElementById('galleryContainer');
galleryContainer.innerHTML = ''; // Clear previous images


images.forEach((image, index) => {
    // Create an anchor (`a`) tag for Lightbox
    const link = document.createElement('a');
    link.href = image;
    link.setAttribute('data-lightbox', songID); // Group images under the same Lightbox gallery
    link.setAttribute('data-title', `${songTitle} - Image ${index + 1}`); // Optional title for Lightbox

    // Create the image element
    const img = document.createElement('img');
    img.src = image;
    img.alt = `${songTitle} Image`;
    img.classList.add('gallery-image'); // You can style this class in CSS

    // Append the image inside the link, and the link inside the gallery container
    link.appendChild(img);
    galleryContainer.appendChild(link);
});



    document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("galleryContainer");

    if (!galleryContainer) {
        console.error("Gallery container not found!");
        return;
    }

    images.forEach((image, index) => {
        // Create an anchor (`a`) tag for Lightbox
        const link = document.createElement("a");
        link.href = image;
        link.setAttribute("data-lightbox", "gallery"); // Group images in the same Lightbox
        link.setAttribute("data-title", `Image ${index + 1}`);

        // Create the image element
        const img = document.createElement("img");
        img.src = image;
        img.alt = `Image ${index + 1}`;
        img.classList.add("gallery-image"); // Ensure this class is styled properly in CSS

        // Append the image inside the link, and the link inside the gallery container
        link.appendChild(img);
        galleryContainer.appendChild(link);
    });
});

    // Ensure Lightbox initializes after dynamically adding images
    setTimeout(() => {
        lightbox.init();
    }, 100);


    // ✅ Show the gallery container and other elements
    document.getElementById("song-info").style.display = "block";  // Show song info container
    document.getElementById("pdfDownloadButton").style.display = "block";  // Show PDF button
    galleryContainer.style.display = "grid";  // Show the gallery
    document.getElementById('songList').style.display = 'none';


    // Set the PDF download button
    const pdfButton = document.getElementById('pdfDownloadButton');
    pdfButton.href = `sheets/${songID}.pdf`; // Assuming the PDF filename is based on songID
    pdfButton.setAttribute('download', `${songID}.pdf`);
    pdfButton.textContent = `Download Sheet Music for ${songTitle}`;
}


// Toggle the visibility of the sheet music list (composer buttons section)
const toggleSheetMusic = document.getElementById("toggleSheetMusic");
const composerButtons = document.getElementById("composerButtons");
const sheetMusicList = document.getElementById("sheetMusicList");

toggleSheetMusic.addEventListener("click", function() {
    // Toggle composer buttons
    if (composerButtons.style.display === "none" || composerButtons.style.display === "") {
        composerButtons.style.display = "grid"; // Show buttons
        sheetMusicList.style.display = "block"; // Show sheet music list
    } else {
        composerButtons.style.display = "none"; // Hide buttons
        sheetMusicList.style.display = "none"; // Hide sheet music list
    }
});

