// ฟังก์ชันสำหรับแสดงหรือซ่อนแจ้งเตือน

function filterNotifications(filter) {
    const notifications = document.querySelectorAll(".notification-item");

    notifications.forEach(notification => {
        if (filter === "all") {
            notification.style.display = "flex"; // แสดงทั้งหมด
        } else if (filter === "unread") {
            const status = notification.getAttribute("data-status");
            if (status === "unread") {
                notification.style.display = "flex"; // แสดงเฉพาะยังไม่ได้อ่าน
            } else {
                notification.style.display = "none"; // ซ่อนที่อ่านแล้ว
            }
        }
    });
}

// Event listener สำหรับปุ่ม "ทั้งหมด"
document.getElementById("showAllNotifications").addEventListener("click", (event) => {
    event.preventDefault(); // ป้องกัน behavior default
    event.stopPropagation(); // ป้องกัน dropdown menu ปิด

    // เรียกฟังก์ชันแสดงแจ้งเตือนทั้งหมด
    filterNotifications("all");

    // อัปเดตคลาสปุ่ม
    document.getElementById("showAllNotifications").classList.add("btn-primary", "active");
    document.getElementById("showAllNotifications").classList.remove("btn-outline-secondary");
    document.getElementById("showUnreadNotifications").classList.add("btn-outline-secondary");
    document.getElementById("showUnreadNotifications").classList.remove("btn-primary", "active");
});

// Event listener สำหรับปุ่ม "ยังไม่ได้อ่าน"
document.getElementById("showUnreadNotifications").addEventListener("click", (event) => {
    event.preventDefault(); // ป้องกัน behavior default
    event.stopPropagation(); // ป้องกัน dropdown menu ปิด

    // เรียกฟังก์ชันแสดงแจ้งเตือนที่ยังไม่ได้อ่าน
    filterNotifications("unread");

    // อัปเดตคลาสปุ่ม
    document.getElementById("showUnreadNotifications").classList.add("btn-primary", "active");
    document.getElementById("showUnreadNotifications").classList.remove("btn-outline-secondary");
    document.getElementById("showAllNotifications").classList.add("btn-outline-secondary");
    document.getElementById("showAllNotifications").classList.remove("btn-primary", "active");
});

