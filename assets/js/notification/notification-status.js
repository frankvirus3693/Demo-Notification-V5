document.querySelectorAll(".notification-item").forEach(item => {
    item.addEventListener("click", function () {
        // เปลี่ยนสถานะเป็น read หรือ unread
        const currentStatus = this.getAttribute("data-status");
        this.setAttribute("data-status", currentStatus === "unread" ? "read" : "unread");
    });
});
