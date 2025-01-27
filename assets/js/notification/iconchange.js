        // เลือก dropdown และ img
        const dropdown = document.getElementById('notificationDropdown');
        const dropdownMenu = document.querySelector('.dropdown-menu');

        // เพิ่ม Event Listener เมื่อ dropdown ถูกกด
        dropdown.addEventListener('click', () => {
            // สลับ aria-expanded (true/false)
            const isExpanded = dropdown.getAttribute('aria-expanded') === 'true';

            // เปลี่ยนรูปตามสถานะ
            if (isExpanded) {
                dropdown.src = 'assets/image/icon/bell-regular.svg'; // รูปปกติ
            } else {
                dropdown.src = 'assets/image/icon/bell-solid.svg'; // รูปเมื่อ active
            }
        });