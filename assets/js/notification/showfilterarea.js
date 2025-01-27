document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleDateFilter");
    const dateFilterSection = document.getElementById("dateFilterSection");
    const filterButton = document.getElementById("filterByDate");

    // เมื่อกดปุ่ม toggleDateFilter
    toggleButton.addEventListener("click", function (event) {
        event.preventDefault(); // ป้องกัน behavior default
        event.stopPropagation(); // ป้องกัน dropdown menu ปิด
        
        // สลับการแสดงผลของ dateFilterSection
        if (dateFilterSection.style.display === "none" || dateFilterSection.style.display === "") {
            dateFilterSection.style.display = "block"; // แสดงส่วนกรอง
        } else {
            dateFilterSection.style.display = "none"; // ซ่อนส่วนกรอง
        }
    });

    // เพิ่ม event listener สำหรับปุ่มกรอง
    if (filterButton) {
        filterButton.addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            // โค้ดสำหรับการกรองตามวันที่
        });
    }

    // ป้องกันการปิด dropdown เมื่อคลิกที่ input date
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        input.addEventListener("click", function(event) {
            event.stopPropagation();
        });
    });
});
