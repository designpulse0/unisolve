// main.js

// اختر زر الهامبرغر والقائمة الجانبية
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

// تعرّف على حدث النقر لفتح/إغلاق القائمة الجانبية
hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  // بدل الأيقونة بين شريط (bars) وإغلاق (times)
  const icon = hamburger.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// إضافة السلاسة في التمرير وإغلاق القائمة عند اختيار رابط
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // إذا كانت القائمة مفتوحة، أوقفها وأعد الأيقونة إلى bars
    if (mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      hamburger.querySelector('i').classList.replace('fa-times','fa-bars');
    }

    // التمرير إلى القسم المستهدف مع تعويض ارتفاع الهيدر
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
