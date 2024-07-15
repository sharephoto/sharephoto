document.getElementById('upload-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('image-file');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        alert('Image uploaded successfully');
    } else {
        alert('Image upload failed');
    }
});
