
const observer = new IntersectionObserver((entries) => {
    entries.forEach((element) => {
        console.log(element);

        if (element.isIntersecting) {
            element.target.classList.add('show');
        } else {
            element.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((element) => {
    observer.observe(element);
});


// music
document.addEventListener('DOMContentLoaded', function () {
    // Get the audio element
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Play the background music
    backgroundMusic.play();

    // Your existing Intersection Observer code can go here
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);

            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');

    hiddenElements.forEach((element) => {
        observer.observe(element);
    });
});
