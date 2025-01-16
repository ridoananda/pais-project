document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", function () {
    if (!mobileMenu.classList.contains("show")) {
      mobileMenu.classList.toggle("hidden");
      setTimeout(() => {
        mobileMenu.classList.toggle("show");
      }, 100);
    } else {
      mobileMenu.classList.toggle("show");
      setTimeout(() => {
        mobileMenu.classList.toggle("hidden");
      }, 100);
    }
  });

});


function navigateTo(section) {
  const target = navigationLink[section];
  if (target) {
    if (target.startsWith('/')) {
      // Jika target adalah URL, arahkan ke halaman tersebut  
      window.location.href = target;
    } else {
      // Jika target adalah ID, gulir ke elemen tersebut  
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    }
  }
}  
