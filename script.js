// Your JS code here.
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// function to add active class to image when scrolled to it
function slideInOnScroll() {
    const images = document.querySelectorAll('.slide-in');
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    images.forEach(image => {
        const imageHeight = image.height;
        const imageTop = image.offsetTop;
        const imageBottom = imageTop + imageHeight;

        // check if image is in view
        if (imageBottom >= scrollY && imageTop <= scrollY + windowHeight) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

// pass the slideInOnScroll function to debounce function
window.addEventListener('scroll', debounce(slideInOnScroll));
