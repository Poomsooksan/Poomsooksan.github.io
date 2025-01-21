let lastScrollTop = 0; // ตำแหน่งที่เลื่อนล่าสุด
const topBar = document.querySelector('.top_bar'); // เลือก top_bar
const navbar = document.querySelector('.navbar'); // เลือก navbar

// ตรวจจับการเลื่อนหน้าเว็บ
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const topBarHeight = topBar.offsetHeight; // ความสูงของ top_bar
    const topBarOffset = topBar.offsetTop; // ตำแหน่งของ top_bar จากบนสุดของหน้าเว็บ

    if (currentScroll > topBarOffset + topBarHeight) {
        // ซ่อน top_bar และแสดง navbar เมื่อเลื่อนลงต่ำกว่าตำแหน่งของ top_bar
        topBar.style.top = `-${topBarHeight}px`; // ซ่อน top_bar (เลื่อนหายไป)
        navbar.style.top = "0"; // แสดง navbar แทนที่
    } else {
        // แสดง top_bar และซ่อน navbar เมื่อเลื่อนขึ้นถึงตำแหน่งของ top_bar
        topBar.style.top = "0"; // แสดง top_bar กลับมา
        navbar.style.top = `${topBarHeight}px`; // ย้าย navbar กลับไปด้านล่างของ top_bar
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // ตรวจสอบว่าค่าของ lastScrollTop ไม่เป็นค่าลบ
});