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

    //contact us form validation
  const form = document.querySelector(".contact form");
const confirmationMsg = document.querySelector(".confirmation-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector(".name").value.trim();
  const email = form.querySelector(".email").value.trim();
  const message = form.querySelector(".message").value.trim();

  if (!name || !email || !message) {
    confirmationMsg.style.color = "red";
    confirmationMsg.textContent = "Please fill in all the fields.";
    return;
  }

 
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    confirmationMsg.style.color = "red";
    confirmationMsg.textContent = "Please enter a valid email.";
    return;
  }

  confirmationMsg.style.color = "white";
  confirmationMsg.textContent = `Thank you ${name}! We will get back to you as soon as possible.`;

  form.reset();
});
