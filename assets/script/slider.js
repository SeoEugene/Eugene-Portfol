let currentPage = 1;
let isMouseEnabled = true;

function nextoverPage() {
    const list = document.querySelector(".effert__wrap");
    const pageWidth = document.querySelector('.page').offsetWidth;
    const totalPages = document.querySelectorAll('.page').length;

    if (currentPage < totalPages) {
        currentPage++;
    } else {
        currentPage = 1;
    }

    list.style.transform = `translateX(-${(currentPage - 1) * pageWidth}px)`;
    document.querySelectorAll(".over").forEach((element) => {
        // 클래스 추가
        element.classList.add('none');

        // 3초 후에 클래스 제거
        setTimeout(() => {
            element.classList.remove('none');
        }, 1500);
    });
}

function prevoverPage() {
    const list = document.querySelector(".effert__wrap");
    const pageWidth = document.querySelector('.page').offsetWidth;
    const totalPages = document.querySelectorAll('.page').length;

    if (currentPage === 1) {
        currentPage = totalPages;
    } else {
        currentPage--;
    }

    list.style.transform = `translateX(-${(currentPage - 1) * pageWidth}px)`;
    document.querySelectorAll(".over").forEach((element) => {
        // 클래스 추가
        element.classList.add('none');

        // 3초 후에 클래스 제거
        setTimeout(() => {
            element.classList.remove('none');
        }, 1500);
    });
}