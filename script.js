// main.js

// فتح/إغلاق القائمة الجانبية
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  const icon = hamburger.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
    mobileNav.classList.remove('open');
    hamburger.querySelector('i').classList.replace('fa-times','fa-bars');
  }
});

// تنقل سلس عند الضغط على الروابط
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    if (mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      hamburger.querySelector('i').classList.replace('fa-times','fa-bars');
    }
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      setTimeout(() => {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }, 300);
    }
  });
});

// معالجة إرسال النموذج وعرض رسالة نجاح
function handleOrder(event) {
  event.preventDefault();
  // هنا يمكنك إضافة منطق إرسال البيانات عبر AJAX أو API
  alert('تم استلام طلبك بنجاح! سيصلك الرد خلال دقيقة إلى 24 ساعة.');
  event.target.reset();
}
