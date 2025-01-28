// ข้อมูลแจ้งเตือนทั้งหมด
const notifications = [
    {
        id: 1,
        icon: "assets/image/news/icon/sniper-news.jpg",
        title: "SNIPER NEWS",
        text: "บินเติมเชื้อเพลิงกลางอากาศล่องหน",
        time: "10 นาทีที่แล้ว",
        date: "24/01/2025",
        thumbnail: "assets/image/news/img/news1.jpg",
        status: "unread"
    },
    {
        id: 2,
        icon: "assets/image/news/icon/a-time.jpg",
        title: "ATIME",
        text: "กำลังถ่ายทอดสด: GREEN MORNING SHOW 24 ม.ค. 68",
        time: "2 ชั่วโมงที่แล้ว",
        date: "24/01/2025",
        thumbnail: "assets/image/news/img/news2.jpg",
        status: "unread"
    },
    {
        id: 3,
        icon: "assets/image/news/icon/siamsport.jpg",
        title: "SIAMSPORT",
        text: "แมนยูยิงแหลกคาบ้าน Manchester United 2-1 Rangers",
        time: "4 ชั่วโมงที่แล้ว",
        date: "24/01/2025",
        thumbnail: "assets/image/news/img/news3.jpeg",
        status: "unread"
    },
    {
        id: 4,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 1",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "20/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 5,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 2",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "20/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 6,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 3",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "20/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 7,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 4",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "19/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 8,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 5",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "18/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 9,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 6",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "18/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 10,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 7",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "18/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 11,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 8",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "18/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 12,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 9",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "18/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 13,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 10",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "18/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 14,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 11",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "18/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 15,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 12",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "18/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 16,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 13",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "18/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 17,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 14",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "18/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 18,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 15",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "18/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 19,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 16",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "18/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },
    {
        id: 20,
        icon: "assets/image/news/icon/kbank.jpg",
        title: "Example News 17",
        text: "This is a hidden notification example 1.",
        time: "5 ชั่วโมงที่แล้ว",
        date: "18/01/2025",
        thumbnail: "assets/image/news/img/news4.jpg",
        status: "unread"
    },

    
];


// ฟังก์ชันแปลงรูปแบบวันที่จาก "DD/MM/YYYY" เป็น Date object
function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('/');
    return new Date(year, month - 1, day);
}

function filterByDate(startDate, endDate) {
    return notifications.filter(notification => {
        const notifDate = parseDate(notification.date);

        // กำหนดให้ endDate เป็นสิ้นสุดของวัน
        if (endDate) {
            endDate.setHours(23, 59, 59, 999);
        }

        // ตรวจสอบเงื่อนไขวันที่ให้ครอบคลุม
        return (!startDate || notifDate >= startDate) && (!endDate || notifDate <= endDate);
    });
}


// ฟังก์ชันสำหรับแสดงแจ้งเตือน
function renderNotifications(startIndex = 0, limit = 5, notificationsToRender = notifications) {
    const container = document.getElementById("notificationContainer");
    container.innerHTML = ""; // ล้างข้อมูลเก่าใน container

    const visibleNotifications = notificationsToRender.slice(startIndex, startIndex + limit);

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
                <span class="notification-status"></span>
            </div>
        `;
        container.insertAdjacentHTML("beforeend", notificationItem);
    });

    // เพิ่ม Event Listener ให้กับแจ้งเตือน
    addNotificationClickListeners();

    // แสดงหรือซ่อนปุ่ม "ดูแจ้งเตือนก่อนหน้า"
    const showMoreButton = document.getElementById("showMoreNotifications");
    if (notificationsToRender.length > startIndex + limit) {
        showMoreButton.style.display = "block"; // แสดงปุ่มถ้ามีแจ้งเตือนเกิน limit
    } else {
        showMoreButton.style.display = "none"; // ซ่อนปุ่มถ้าทั้งหมดถูกแสดงแล้ว
    }
}

// ฟังก์ชันเพิ่ม Event Listener ให้กับแจ้งเตือน
function addNotificationClickListeners() {
    const notificationItems = document.querySelectorAll(".notification-item");
    notificationItems.forEach((item) => {
        item.addEventListener("click", function () {
            const id = parseInt(this.getAttribute("data-id"), 10);
            toggleNotificationStatus(id); // เปลี่ยนสถานะการอ่าน
        });
    });
}

// ฟังก์ชันเปลี่ยนสถานะการอ่าน
function toggleNotificationStatus(id) {
    const notification = notifications.find((n) => n.id === id);
    if (notification) {
        // เปลี่ยนสถานะในอาร์เรย์
        notification.status = notification.status === "unread" ? "read" : "unread";

        // อัปเดต DOM ทันที
        const notificationElement = document.querySelector(`.notification-item[data-id="${id}"]`);
        notificationElement.setAttribute("data-status", notification.status);

        // อัปเดตสีหรือสไตล์ตามสถานะ
        if (notification.status === "read") {
            notificationElement.classList.add("read");
        } else {
            notificationElement.classList.remove("read");
        }
    }
}

// ฟังก์ชันสำหรับแสดงหรือซ่อนแจ้งเตือน
function filterNotifications(filter) {
    const notificationItems = document.querySelectorAll(".notification-item");

    notificationItems.forEach(notification => {
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


// ฟังก์ชันอัปเดตจำนวนการแจ้งเตือน
function updateNotificationBadge() {
    const notificationBadge = document.querySelector(".notification-badge");
    
    // กรองเฉพาะแจ้งเตือนที่ยังไม่ได้อ่าน
    const unreadNotifications = notifications.filter(
        (notification) => notification.status === "unread"
    );

    // อัปเดต badge
    notificationBadge.textContent = unreadNotifications.length;

    // ซ่อน badge หากไม่มีแจ้งเตือน
    if (unreadNotifications.length === 0) {
        notificationBadge.style.display = "none";
    } else {
        notificationBadge.style.display = "inline-block";
    }
}

// เรียกใช้ฟังก์ชันเมื่อโหลดหน้า
updateNotificationBadge();
