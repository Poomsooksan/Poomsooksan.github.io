let lastScrollTop = 0; // ตำแหน่งที่เลื่อนล่าสุด
const topBar = document.querySelector('.top_bar'); // เลือก top_bar
const navbar = document.querySelector('.navbar'); // เลือก navbar

// ตรวจจับการเลื่อนหน้าเว็บ
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // เมื่อเลื่อนลง (ตรวจสอบว่าเลื่อนลงมากกว่าครั้งก่อน)
    if (currentScroll > lastScrollTop) {
        topBar.style.top = "-80px"; // ซ่อน top_bar (ให้มันหายไป)
        navbar.style.top = "0"; // ขยับ navbar ขึ้นมาแทนที่
    } else {
        topBar.style.top = "0"; // แสดง top_bar กลับมา
        navbar.style.top = "80px"; // กลับ navbar ไปที่ตำแหน่งเดิม
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // ตรวจสอบว่าค่าของ lastScrollTop ไม่เป็นค่าลบ
});
