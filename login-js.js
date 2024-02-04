 // Add this JavaScript function in your script section or external script file
    function logoutUser() {
        // Send an AJAX request to a server-side script to handle the logout
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    // Successful logout, you can redirect or perform other actions
                    alert('User logged out!');
                    window.location.href = 'login.php';  // Redirect to your login page
                } else {
                    // Handle logout error
                    alert('Error logging out: ' + xhr.responseText);
                }
            }
        };
        xhr.open('GET', 'logout.php', true);
        xhr.send();
    }

 function updateProgressBar(percentage) {
            var progressBar = document.getElementById('progress-bar');
            progressBar.style.width = percentage + '%';
        }

        // Function to handle file upload
        function uploadFiles() {
            var formData = new FormData(document.getElementById('uploadForm'));
            var xhr = new XMLHttpRequest();

            xhr.upload.addEventListener('progress', function (event) {
                if (event.lengthComputable) {
                    var percentage = (event.loaded / event.total) * 100;
                    updateProgressBar(percentage);
                }
            });

            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        alert('Files uploaded successfully!');
                        closeModal();
                        refreshGallery();
                        window.location.reload(true); // Force a full page reload
                    } else {
                        alert('Error uploading files: ' + xhr.responseText);
                    }
                }
            };

            xhr.open("POST", "upload.php", true);
            xhr.send(formData);
            
            // Display the progress bar container
            document.getElementById('progress-container').style.display = 'block';
        }



function openModal() {
        document.getElementById('addPhotoModal').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('addPhotoModal').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }

    function createFolder() {
        var folderName = document.getElementById('folderName').value.trim();

        if (folderName !== "") {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                        alert('Folder created successfully!');
                        closeModal();
                        // You may want to refresh the content after creating a folder
                        refreshGallery();
                    } else {
                        alert('Error creating folder: ' + xhr.responseText);
                    }
                }
            };
            xhr.open("POST", "create_folder.php", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send("folderName=" + encodeURIComponent(folderName));
        } else {
            alert('Please enter a folder name.');
        }
    }

    function refreshGallery() {
        // This is where you can make an AJAX request to update the gallery content
        // For simplicity, let's assume you have a separate PHP file (e.g., fetch_gallery.php) to fetch updated gallery content
        var galleryContainer = document.querySelector('.gallery-container');
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Update gallery content
                    galleryContainer.innerHTML = xhr.responseText;
                } else {
                    console.error('Error fetching gallery content: ' + xhr.responseText);
                }
            }
        };

        xhr.open("GET", "fetch_gallery.php", true);
        xhr.send();
    }

    function updateProgressBar(percentage) {
        var progressBar = document.getElementById('progress-bar');
        progressBar.style.width = percentage + '%';
    }

    // Function to handle file upload
    function uploadFiles() {
        var formData = new FormData(document.getElementById('uploadForm'));
        var xhr = new XMLHttpRequest();

        xhr.upload.addEventListener('progress', function (event) {
            if (event.lengthComputable) {
                var percentage = (event.loaded / event.total) * 100;
                updateProgressBar(percentage);
            }
        });

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    alert('Files uploaded successfully!');
                    closeModal();
                    refreshGallery();
                    window.location.reload(true); // Force a full page reload
                } else {
                    alert('Error uploading files: ' + xhr.responseText);
                }
            }
        };

        xhr.open("POST", "upload.php", true);
        xhr.send(formData);
    }


// Function to refresh the page
    function refreshPage() {
      location.reload(true); // Reloads the current page from the server
    }

    // Set a timeout to call the refreshPage function every 400 milliseconds
    setInterval(refreshPage, 60000);
