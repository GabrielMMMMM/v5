// Depoimentos
const testimonials = [
  {
    name: "Alt Reformas",
    location: "São Paulo, SP",
    rating: 4.9,
    comment:
      "A Autopago revolucionou a forma de lidar com clientes. Temos um fluxo constante de leads qualificados.",
    image: "./img/alt.png",
    roi: "+3200%",
    link: "https://altreformas.com/",
  },
  {
    name: "Studiomn",
    location: "Rio de Janeiro, RJ",
    rating: 4.9,
    comment:
      "Graças à automação e às campanhas da Autopago, conseguimos dobrar nossa base de clientes em menos de 3 meses.",
    image: "./img/studio.png",
    roi: "+3200%",
    link: "https://studiomn.com.br/",
  },
  {
    name: "Pratique Academia",
    location: "Belo Horizonte, MG",
    rating: 4.8,
    comment:
      "O time da Autopago entende de tráfego pago como ninguém. Resultado real, com transparência e estratégia.",
    image: "./img/pratique.jpeg",
    roi: "+3200%",
    link: "https://onlyfans.com",
  },
  {
    name: "Casa & Conforto",
    location: "Campinas, SP",
    rating: 4.7,
    comment:
      "A automação comercial da Autopago nos ajudou a organizar melhor os processos e aumentar as vendas.",
    image: "./img/alt.png",
    roi: "+3200%",
    link: "https://onlyfans.com",
  },
  {
    name: "Vision Marketing",
    location: "Niterói, RJ",
    rating: 4.6,
    comment:
      "A parceria com a Autopago nos trouxe muito mais do que tráfego: trouxe crescimento previsível e escalável.",
    image: "./img/alt.png",
    roi: "+3200%",
    link: "https://onlyfans.com",
  },
  {
    name: "Master Tech",
    location: "Vitória, ES",
    rating: 4.9,
    comment:
      "Desde que contratamos a Autopago, nossa presença online evoluiu muito. Hoje dominamos nosso segmento no Google.",
    image: "./img/alt.png",
    roi: "+3200%",
    link: "https://onlyfans.com",
  },
  {
    name: "Conecta Consultoria",
    location: "São José dos Campos, SP",
    rating: 6.9,
    comment:
      "Ferramentas, estratégia e suporte de primeira. A Autopago foi um divisor de águas no nosso marketing digital.",
    image: "./img/alt.png",
    roi: "+3200%",
    link: "https://onlyfans.com",
  },

  // Add more testimonials if needed
];

// Initialize Swiper
const swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  rewind: false, // alternativa segura ao loop
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Generate testimonial slides
function generateTestimonials() {
  const swiperWrapper = document.querySelector(".swiper-wrapper-testimonials");

  testimonials.forEach((testimonial) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
           <a href="${testimonial.link}" target="_blank" class="group flex flex-col relative p-8 border-2 border-gray-200 rounded-2xl hover:border-sky-500 transition-all mx-5 md:mx-4 lg:mx-0 cursor-pointer">
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center gap-4">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full">
                        <div>
                            <h4 class="font-medium text-lg">${testimonial.name}</h4>
                            <p class="text-gray-400">${testimonial.location}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="font-medium">${testimonial.rating}</span>
                        <img src="./img/star.png" alt="star" class="w-4 h-4">
                    </div>
                </div>
                <p class="text-gray-600">"${testimonial.comment}"</p>
                <div class="flex justify-between items-center mt-4
                       
                         
                          text-sm">

  <div class="bg-sky-50 text-sky-700 px-3 py-2 rounded-lg font-semibold border border-transparent group-hover:border-sky-700  transform group-hover:motion-preset-pulse-sm
                         transition-all duration-300">
    ROI: ${testimonial.roi}
  </div>

  <span class="text-sky-600 font-medium group-hover:underline "  >
    Conheça a empresa
  </span>

</div>


            </a>
        `;

    swiperWrapper.appendChild(slide);
  });
}

// Call the function when the document is loaded
document.addEventListener("DOMContentLoaded", generateTestimonials);

// //icones home

// const icons = document.querySelectorAll(".social-icon");

// function animateOneIcon() {
//   // Escolhe um ícone aleatório
//   const randomIndex = Math.floor(Math.random() * icons.length);
//   const icon = icons[randomIndex];

//   // Aplica a animação
//   icon.classList.add("animate-bounce");

//   // Remove a animação após 1.2s
//   setTimeout(() => {
//     icon.classList.remove("animate-bounce");

//     // Espera 6 segundos antes de animar outro
//     setTimeout(animateOneIcon, 3000);
//   }, 1200);
// }

// // Inicia a sequência após o carregamento
// window.addEventListener("DOMContentLoaded", () => {
//   setTimeout(animateOneIcon, 2000); // espera inicial de 4s
// });

// secao do trafego pago

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll("#cards-container > div");
  const isDesktop = window.innerWidth >= 768;

  cards.forEach((card, index) => {
    if (isDesktop) {
      card.setAttribute("data-aos", "fade-right");
    } else {
      card.setAttribute(
        "data-aos",
        index % 2 === 0 ? "fade-left" : "fade-right"
      );
    }
  });
  // Seção imagem + texto
  const image = document.querySelector("#cards-container-2 img");
  const textBox = document.querySelector("#cards-container-2 div.bg-gray-100");

  if (isDesktop) {
    image.setAttribute("data-aos", "fade-right");
    textBox.setAttribute("data-aos", "fade-right");
  } else {
    image.setAttribute("data-aos", "fade-left");
    textBox.setAttribute("data-aos", "fade-right");
  }
});

//forms

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const errorDiv = document.getElementById("form-error");

  form.addEventListener("submit", function (e) {
    errorDiv.classList.add("hidden");
    errorDiv.textContent = "";

    const nome = document.getElementById("first-name").value.trim();
    const sobrenome = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("message").value.trim();

    // Verificações básicas
    if (!nome || !sobrenome || !email || !mensagem) {
      e.preventDefault();
      errorDiv.textContent =
        "Por favor, preencha todos os campos obrigatórios.";
      errorDiv.classList.remove("hidden");
      return;
    }

    // Verificação de e-mail básico
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      e.preventDefault();
      errorDiv.textContent = "Insira um e-mail válido.";
      errorDiv.classList.remove("hidden");
      return;
    }

    // Se tudo estiver certo, o formulário será enviado normalmente
  });
});

//planos

function toggleTooltip(btn) {
  const tooltip = btn.nextElementSibling;
  const isVisible = tooltip.classList.contains("opacity-100");

  document.querySelectorAll(".tooltip").forEach((t) => {
    t.classList.remove("opacity-100", "pointer-events-auto");
    t.classList.add("opacity-0", "pointer-events-none");
  });

  if (!isVisible) {
    tooltip.classList.remove("opacity-0", "pointer-events-none");
    tooltip.classList.add("opacity-100", "pointer-events-auto");
  }
}

function showTooltip(btn) {
  if (window.innerWidth >= 640) {
    const tooltip = btn.nextElementSibling;
    tooltip.classList.remove("opacity-0", "pointer-events-none");
    tooltip.classList.add("opacity-100", "pointer-events-auto");
  }
}

function hideTooltip(btn) {
  if (window.innerWidth >= 640) {
    const tooltip = btn.nextElementSibling;
    tooltip.classList.remove("opacity-100", "pointer-events-auto");
    tooltip.classList.add("opacity-0", "pointer-events-none");
  }
}

//textos home
