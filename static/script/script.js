document.getElementById('copyEmailButton').addEventListener('click', function() {
  const email = 'seu.email@exemplo.com';
  const el = document.createElement('textarea');
  el.value = email;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  alert('Email copiado: ' + email);
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  var btnTop = document.getElementById("btnTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

window.addEventListener("scroll", function () {
  var btnWhatsApp = document.querySelector('.btn-whatsapp');
  btnWhatsApp.style.display = "block";
});




document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll('.fade-in');
  const options = {
    threshold: 0.1
  };

  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});


document.getElementById('copyEmailButton').addEventListener('click', function () {
  const email = 'juan.devx@gmail.com';
  const el = document.createElement('textarea');
  el.value = email;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  const tooltipText = document.getElementById('tooltipText');
  tooltipText.innerText = 'Copiado!';
  setTimeout(function () {
    tooltipText.innerText = 'Copiar';
  }, 2000);
});
