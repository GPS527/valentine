document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('letter');
    textarea.addEventListener('input', () => {
        localStorage.setItem('valentineLetter', textarea.value);
    });
    
    const savedLetter = localStorage.getItem('valentineLetter');
    if (savedLetter) {
        textarea.value = savedLetter;
    }
});
