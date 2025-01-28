document.addEventListener("DOMContentLoaded", () => {
    let visibleCount = 4; // จำนวนแจ้งเตือนที่จะแสดงเริ่มต้น
    const loadIncrement = 2; // จำนวนแจ้งเตือนที่จะแสดงเพิ่มทีละ 2

    // ฟังก์ชันแสดงแจ้งเตือน
    function renderNotificationsLazy(notificationsToRender = notifications) {
        const container = document.getElementById("notificationContainer");

        if (!container) {
            console.error("notificationContainer ไม่พบใน DOM");
            return;
        }

        // แสดงเฉพาะจำนวนแจ้งเตือนตาม visibleCount
        const visibleNotifications = notificationsToRender.slice(0, visibleCount);

        // ล้าง container ก่อนแสดงผลใหม่
        container.innerHTML = "";

        visibleNotifications.forEach((notification) => {
            const notificationItem = `
                <div class="notification-item" data-id="${notification.id}" data-status="${notification.status}">
                    <img src="${notification.icon}" alt="icon" class="notification-img">
                    <div class="notification-content">
                        <h6 class="mb-1">${notification.title}</h6>
                        <p class="notification-text mb-0">${notification.text}</p>
                        <small class="notification-time">${notification.time}</small>
                        <small class="notification-date">${notification.date}</small>
                    </div>
                    <img src="${notification.thumbnail}" alt="Thumbnail" class="notification-thumbnail">
                </div>
            `;
            container.insertAdjacentHTML("beforeend", notificationItem);
        });

        // เพิ่ม Event Listener ให้กับแจ้งเตือนที่สร้างใหม่
        addNotificationClickListeners();
    }

    // เพิ่ม Event Listener สำหรับ Scroll ใน Dropdown Menu
    const dropdownMenu = document.querySelector(".dropdown-menu");
    if (dropdownMenu) {
        dropdownMenu.addEventListener("scroll", () => {
            const scrollTop = dropdownMenu.scrollTop;
            const scrollHeight = dropdownMenu.scrollHeight;
            const clientHeight = dropdownMenu.clientHeight;

            // ตรวจสอบว่าผู้ใช้เลื่อนถึงใกล้ด้านล่างของ Dropdown Menu
            if (scrollTop + clientHeight >= scrollHeight - 10) {
                if (visibleCount < notifications.length) {
                    visibleCount += loadIncrement; // เพิ่มจำนวนแจ้งเตือนที่แสดง
                    renderNotificationsLazy(); // อัปเดตการแสดงผล
                }
            }
        });
    } else {
        console.error("ไม่พบ .dropdown-menu ใน DOM");
    }

    // แสดงแจ้งเตือนเริ่มต้น
    renderNotificationsLazy();
});
