   const menuBar = document.querySelector(".menu");
   const navbar = document.querySelector(".navbar .links");

   menuBar.addEventListener("click", () => {
    navbar.classList.toggle("active");
   })
   
   const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
  const scrollBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    });

    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });