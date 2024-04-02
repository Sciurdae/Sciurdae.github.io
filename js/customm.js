var navbarWidget = document.getElementById("navbar");

function toggleNavbar() {
  var prevScrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  window.addEventListener('scroll', function () {
    var currentScrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if (prevScrollPos > currentScrollPos) {
      // 向上滚动，显示导航栏
      navbarWidget.style.top = '0';
    } else {
      // 向下滚动，隐藏导航栏
      navbarWidget.style.top = '-100px';
    }
    prevScrollPos = currentScrollPos;
  });
};

window.onload = function () {
  toggleNavbar();
};
