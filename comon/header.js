   // Mobile Menu Toggle
      const mobileMenuBtn = document.getElementById("mobileMenuBtn");
      const mainNav = document.getElementById("mainNav");

      mobileMenuBtn.addEventListener("click", () => {
        mainNav.classList.toggle("active");
        mobileMenuBtn.innerHTML = mainNav.classList.contains("active")
          ? '<i class="fas fa-times"></i>'
          : '<i class="fas fa-bars"></i>';
      });

      // Close mobile menu when clicking a link
      const navLinks = document.querySelectorAll("nav ul li a");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (mainNav.classList.contains("active")) {
            mainNav.classList.remove("active");
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
          }
        });
      });