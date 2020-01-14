
$("#menu").click((e) => {
    switch ($(e.target).prop('id')) {
        case 'navSobrenos':
            nav('#sobrenos')
            break;

        case 'navProcesso':
            nav('#processo')
            break;

        case 'navBandas':
            nav('#bandas')
            break;

        case 'navContato':
            nav('#contato')
            break;

        default:
            break;
    }
})

function nav(point) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(point).offset().top - 80
    }, 500);
}

const content = document.querySelector('.content');
const menu = document.querySelector('.menu-bg');
const menuLogo = document.querySelector('.menu-logo');


const options = {
    threshold: 0.2
};

let observer = new IntersectionObserver(contentCheck, options);

function contentCheck(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            menu.classList.add("menu-sticky")
            menuLogo.classList.add("logo-pequena")

        }
        else {
            menu.classList.remove("menu-sticky")
            menuLogo.classList.remove("logo-pequena")

        }
    })
}


observer.observe(content);

