// document.addEventListener("DOMContentLoaded", function () {
//     let lastScrollTop = 0;
//     const topBar = document.querySelector(".top_bar");
//     const navbar = document.querySelector(".navbar");

//     window.addEventListener("scroll", function () {
//         let scrollTop = window.scrollY || document.documentElement.scrollTop;

//         if (scrollTop > lastScrollTop) {
//             // เมื่อเลื่อนลง → ซ่อน top_bar
//             topBar.style.transform = "translateY(-100%)";
//             navbar.style.top = "0";
//         } else {
//             // เมื่อเลื่อนขึ้น → แสดง top_bar
//             topBar.style.transform = "translateY(0)";
//             navbar.style.top = "40px"; // ตำแหน่งที่เคยเป็นของ top_bar
//         }
//         lastScrollTop = scrollTop;
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const topBar = document.querySelector(".top_bar");
    const navbar = document.querySelector(".navbar");
    const hideHeight = 150; // กำหนดระดับความสูงที่ต้องการให้ top_bar หายไป

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > hideHeight) {
            // เมื่อเลื่อนลงเกิน hideHeight → ซ่อน top_bar
            topBar.style.transform = "translateY(-100%)";
            navbar.style.top = "0";
        } else if (scrollTop < lastScrollTop) {
            // เมื่อเลื่อนขึ้น → แสดง top_bar กลับมา
            topBar.style.transform = "translateY(0)";
            navbar.style.top = "40px"; // ตำแหน่งที่เคยเป็นของ top_bar
        }
        lastScrollTop = scrollTop;
    });
});
