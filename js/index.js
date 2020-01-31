
$("#menu").click((e) => {
    switch ($(e.target).prop('id')) {
        case 'navSobrenos':
            nav('#sobrenos')
            break;

        case 'navProcessos':
            nav('#processos')
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

let modalData;

$.getJSON('https://raw.githubusercontent.com/lpjahjah/fbrrecapadora/master/js/content.json', data => {
    modalData = data;
    $.each(data.processos, (key, val) => {
        $("<button/>", {
            id: key,
            text: val.title,
            type: 'button',
            class: 'btn btn-primary btnGeneral',
            'data-toggle': 'modal',
            'data-target': '#modal'
        }).appendTo("#btnProcessos")
    });

    $.each(data.bandas, (key, val) => {
        $("<button/>", {
            id: key,
            text: val.name,
            type: 'button',
            class: 'btn btn-primary btnGeneral',
            'data-toggle': 'modal',
            'data-target': '#modal'
        }).appendTo("#btnBandas")
    });
});

function changeModal(title, text) {
    $("#modalTitle").text(title);
    $("#modalBody").text(text);
}

$("#btnProcessos").click((e) => {
    changeModal(modalData.processos[$(e.target).prop('id')].title, modalData.processos[$(e.target).prop('id')].text);
})


observer.observe(content);

