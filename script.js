function toggleNav() {
    var element = document.getElementById("mynav");
    var menuIcon = document.getElementById("menuIcon");
    var closeIcon = document.getElementById("closeIcon");

    element.classList.toggle("nav-open");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
   }