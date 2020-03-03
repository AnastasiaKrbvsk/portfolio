window.addEventListener('scroll', () => {
    let navigation = document.getElementById('navigation');
    if (pageYOffset > 100) {
        console.log(pageYOffset);
        navigation.classList.add('second-scroll');
    } 
    if (pageYOffset < 100) {
        navigation.classList.remove('second-scroll');
    }
    if (pageYOffset > 1000) {
        navigation.classList.remove('second-scroll');
        navigation.classList.add('first-scroll');
    }
    if (pageYOffset < 1000) {
        navigation.classList.remove('first-scroll');
    }
});