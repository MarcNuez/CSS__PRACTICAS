console.log("altura pantalla: " + window.innerHeight)
let sections = document.querySelectorAll('section')


window.addEventListener('scroll', () => {
    var scrollPosition = document.documentElement.scrollTop;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            let currentId = section.getAttribute("class");
            removeAllActiveClasses();
            addActiveClass(currentId);
            console.log(currentId)
        }
    })

})



function removeAllActiveClasses() {
    document.querySelectorAll('nav ul li').forEach(x => {
        x.classList.remove('active')
    })
}

function addActiveClass(currentId) {
    console.log(currentId)

    let selector = `li[class="list-${currentId}"]`;
    console.log(selector)
    let elem = document.querySelector(selector)
    console.log(elem)
    elem.classList.add('active')
}