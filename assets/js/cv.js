let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menubar");
let loadtake = document.querySelector(".nav-logo")
let finish = document.querySelectorAll(".finish");
let overlay = document.querySelector(".over-layer")
let bgbody = document.querySelector(".bg-bodys");
let fix1 = document.querySelector(".fix1");
let fix2 = document.querySelector(".fix2");
let fix3 = document.querySelector(".fix3");
nav.addEventListener("click", function () {
    menubar.classList.toggle("left-0")
    fix1.classList.toggle("fixer1")
    fix2.classList.toggle("fixer2")
    nav.classList.toggle("nav-down")
    fix3.classList.toggle("fixer3")
    overlay.classList.toggle("left-0")
    bgbody.classList.toggle("over-flow")
    // nav.classList.toggle("left-corner")
})
overlay.addEventListener("click", function () {
    menubar.classList.toggle("left-0")
    fix1.classList.toggle("fixer1")
    fix2.classList.toggle("fixer2")
    fix3.classList.toggle("fixer3")
    loadtake.classList.toggle("nav-logo-routate")
    overlay.classList.toggle("left-0")
    bgbody.classList.toggle("over-flow")
    // nav.classList.toggle("left-corner")
})
finish.forEach(e => {
    e.addEventListener("click", function () {
        menubar.classList.remove("left-0")
        fix1.classList.toggle("fixer1")
        fix2.classList.toggle("fixer2")
        fix3.classList.toggle("fixer3")
        bgbody.classList.remove("over-flow")
        overlay.classList.toggle("left-0")
        loadtake.classList.toggle("nav-logo-routate")
        fix2.classList.toggle("fixer2")
        fix3.classList.toggle("fixer3")
        // nav.classList.toggle("left-corner")
    })
});
// preloder
setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
}, 2000);
// backtotop
function backtop() {
    window.scrollTo(0, 0);
}
window.addEventListener("scroll", function () {
    const mybackto = document.getElementById("backtops");
    if (window.scrollY > 500) {
        mybackto.style.display = "block";
    }
    else {
        mybackto.style.display = "none";
    }
});

$('.slick-cardtheme').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1140,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 385,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// slider 2 
$('.slick-headerslide').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});

// slider 3 
$('.slick-Clients').slick({
    dots: false,
    arrows: true,
    prevArrow: ".preview",
    nextArrow: ".next",
    infinite: true,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});

// slider 4 
$('.slick-Clients-sm').slick({
    dots: false,
    arrows: true,
    infinite: true,
    prevArrow: ".preview2",
    nextArrow: ".next2",
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 690,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
            }
        },
    ]
});
//  aos animation 
AOS.init({ duration: 2000, once: true });