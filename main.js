const images = document.querySelectorAll('img');
// let count = 0 ; 
// images.forEach(image => {
//     console.log(image);
//     count ++;
//     if(count%2 == 0){
//         console.log('These images comes from left');
//         image.style.transform = 'translateX(-500px)';
//     }else{
//         console.log('These images comes from right');
//         image.style.transform = 'translateX(500px)';
//     }

// })

function debounce(func, wait = 5, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


function checkForSlide(e) {
    images.forEach(image => {
        //halfway of the image 
        const slideinAt = (window.scrollY + window.innerHeight) - image.height / 2;
        //bottom of the image 
        const imageBottom = image.offsetTop + image.height;

        const isHalfShown = slideinAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {

            if (image.classList[0] == 'even') {
                image.classList.add('slideInImageEven');
            }
            if (image.classList[0] == 'odd') {
                image.classList.add('slideInImageOdd');
            }

        } else {
            console.log(image);
            image.classList.remove('slideInImageEven');
            image.classList.remove('slideInImageOdd');
        }

    })
}
window.addEventListener('scroll', debounce(checkForSlide))
