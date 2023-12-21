
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".top").classList.remove("fade-out");
    document.querySelector(".left").classList.remove("fade-out");
    document.querySelector(".content").classList.remove("fade-out");
    document.querySelector(".top").classList.add("fade-in");
    document.querySelector(".left").classList.add("fade-in");
    document.querySelector(".content").classList.add("fade-in");
})

document.querySelector(".title").addEventListener("click", () => {
    event.preventDefault();

    document.querySelector(".top").classList.add("fade-out");
    document.querySelector(".left").classList.add("fade-out");
    document.querySelector(".content").classList.add("fade-out");

    setTimeout(function () {
        window.location.href = "/";
    }, 3000);

})

// let navItems = document.querySelectorAll(".nav>ul> li");
// navItems.forEach(function (navItem) {
//     navItem.addEventListener("click", function (event) {
//         event.preventDefault();

//         let linkElement = navItem.querySelector("a");

//         if (linkElement) {
//             document.querySelector(".top").classList.add("fade-out");
//             document.querySelector(".left").classList.add("fade-out");
//             document.querySelector(".content").classList.add("fade-out");

//             setTimeout(function () {
//                 window.location.href = linkElement.getAttribute("href");
//             }, 3000);
//         }
//     });
// });

let navItems = document.querySelectorAll(".nav > ul > li");
navItems.forEach(function (navItem) {
    navItem.addEventListener("click", function (event) {
        let linkElement = navItem.querySelector("a");

        if (linkElement) {
            if (navItem.querySelector("ul")) {
                // 하위 메뉴가 있는 경우에는 기본 동작을 막지 않고 함수를 종료
                return;
            }

            event.preventDefault();
            document.querySelector(".top").classList.add("fade-out");
            document.querySelector(".left").classList.add("fade-out");
            document.querySelector(".content").classList.add("fade-out");

            setTimeout(function () {
                window.location.href = linkElement.getAttribute("href");
            }, 3000);
        }
    });
});
