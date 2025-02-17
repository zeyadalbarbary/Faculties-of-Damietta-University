// وظيفة لتبديل عرض القائمة المنسدلة
function toggleDropdown(button) {
    const dropdown = button.nextElementSibling;
    dropdown.classList.toggle("show");
  }
  
  // إغلاق القوائم المفتوحة عند النقر خارجها
  document.addEventListener("click", function(event) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((dropdown) => {
      if (!dropdown.parentElement.contains(event.target)) {
        dropdown.classList.remove("show");
      }
    });
  });
  // إضافة تأثيرات اجتماعية عند النقر على الروابط
const socialLinks = document.querySelectorAll("#footer_dark .contact-social a");

socialLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "scale(1.1)";
    link.style.transition = "transform 0.3s";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1)";
  });
});

// إضافة تأثير النقر على زر واتساب
const whatsappButton = document.querySelector("#footer_dark .whatapp-footer-btn a");

whatsappButton.addEventListener("mouseenter", () => {
  whatsappButton.style.backgroundColor = "#1da851";
  whatsappButton.style.transition = "background-color 0.3s";
});

whatsappButton.addEventListener("mouseleave", () => {
  whatsappButton.style.backgroundColor = "#25d366";
});
