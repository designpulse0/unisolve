// فتح وإغلاق القائمة الجانبية
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  // تبديل الأيقونة بين bars و times
  const icon = hamburger.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// التمرير السلس وإغلاق القائمة تلقائيًا عند الضغط على رابط
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
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
