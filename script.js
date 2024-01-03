document.addEventListener('DOMContentLoaded', function () {
          var menuBtn = document.querySelector('.menu-btn');
          var mobileNav = document.querySelector('.mobile-nav');

          menuBtn.addEventListener('click', function () {
              mobileNav.style.display = (mobileNav.style.display === 'block' ? 'none' : 'block');
          });
      });