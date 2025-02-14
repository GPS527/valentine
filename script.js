document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('letter');
    const photoInput = document.getElementById('photo-input');
    const uploadedPhoto = document.getElementById('uploaded-photo');
    
    textarea.addEventListener('input', () => {
        localStorage.setItem('valentineLetter', textarea.value);
    });
    
    photoInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (e) => {
            uploadedPhoto.src = e.target.result;
            localStorage.setItem('uploadedPhoto', e.target.result);
        };
        
        if (file) {
            reader.readAsDataURL(file);
        }
    });
    
    const savedLetter = localStorage.getItem('valentineLetter');
    if (savedLetter) {
        textarea.value = savedLetter;
    }
    
    const savedPhoto = localStorage.getItem('uploadedPhoto');
    if (savedPhoto) {
        uploadedPhoto.src = savedPhoto;
    }
});
