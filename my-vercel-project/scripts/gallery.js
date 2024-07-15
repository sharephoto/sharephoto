document.addEventListener('DOMContentLoaded', async () => {
    const gallery = document.getElementById('gallery');
    
    const response = await fetch('/api/list');
    const images = await response.json();

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.url;
        gallery.appendChild(img);

        const approveBtn = document.createElement('button');
        approveBtn.textContent = 'Approve';
        approveBtn.onclick = async () => {
            const response = await fetch('/api/approve', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fileName: image.fileName })
            });
            if (response.ok) {
                alert('Image approved');
            } else {
                alert('Approval failed');
            }
        };
        gallery.appendChild(approveBtn);
    });
});
