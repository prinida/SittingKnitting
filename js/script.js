var swiper = new Swiper(".slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
});

var swiper = new Swiper(".reviewsSlider", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll('.view-mode-buttons').forEach(function (viewMode) {
  const tileButton = viewMode.querySelector('.tile-view-mode');
  const simpleButton = viewMode.querySelector('.simple-view-mode');
  const tileInput = document.querySelector('.tile-view-mode__input');
  const simpleInput = document.querySelector('.simple-view-mode__input');
  const cardsList = document.querySelector('.product-dem__cards-list');
  const cards = cardsList.querySelectorAll('.card');

  tileButton.addEventListener('click', () => {
    tileButton.classList.add("tile-view-mode--checked");

    cardsList.classList.remove("product-dem__cards-list--simple-mode");
    cardsList.classList.add("product-dem__cards-list--tile-mode");

    cards.forEach((card) => {
      card.classList.remove("card--simple-mode");
    });
    cards.forEach((card) => {
      card.classList.add("card--tile-mode");
    });

    if (tileInput.getAttribute("checked") === "true" && simpleInput.getAttribute("checked") === "true") {
      tileInput.setAttribute("checked", "false");
    }
    else {
      tileInput.setAttribute("checked", "true");
      simpleButton.classList.remove("simple-view-mode--checked");
      simpleInput.setAttribute("checked", "false");
    }
  });

  tileButton.addEventListener('mouseover', (e) => {
    simpleButton.classList.remove("simple-view-mode--checked");
  });

  tileButton.addEventListener('mouseout', () => {
    if (simpleInput.getAttribute("checked") === "true") {
      simpleButton.classList.add("simple-view-mode--checked");
    }
  });

  simpleButton.addEventListener('click', () => {
    simpleButton.classList.add("simple-view-mode--checked");

    cardsList.classList.remove("product-dem__cards-list--tile-mode");
    cardsList.classList.add("product-dem__cards-list--simple-mode");

    cards.forEach((card) => {
      card.classList.remove("card--tile-mode");
    });
    cards.forEach((card) => {
      card.classList.add("card--simple-mode");
    });

    if (simpleInput.getAttribute("checked") === "true" && tileInput.getAttribute("checked") === "true") {
      simpleInput.setAttribute("checked", "false");
    }
    else {
      simpleInput.setAttribute("checked", "true");
      tileButton.classList.remove("tile-view-mode--checked");
      tileInput.setAttribute("checked", "false");
    }
  });

  simpleButton.addEventListener('mouseover', () => {
    tileButton.classList.remove("tile-view-mode--checked");
  });

  simpleButton.addEventListener('mouseout', () => {
    if (tileInput.getAttribute("checked") === "true") {
      tileButton.classList.add("tile-view-mode--checked");
    }
  });
});

const noveltyBtn = document.querySelector('.product-dem__novelty-button');
const noveltyInput = document.querySelector('.product-dem__input-novelty');

noveltyBtn.addEventListener('click', () => {
  noveltyBtn.classList.toggle('product-dem__novelty-button--checked');

  if (noveltyInput.getAttribute('checked') === "true")
    noveltyInput.setAttribute('checked', "false");
  else noveltyInput.setAttribute('checked', "true");
});

const discountBtn = document.querySelector('.product-dem__discount-button');
const discountInput = document.querySelector('.product-dem__input-discount');

discountBtn.addEventListener('click', () => {
  discountBtn.classList.toggle('product-dem__discount-button--checked');
  if (discountInput.getAttribute('checked') === "true")
    discountInput.setAttribute('checked', "false");
  else discountInput.setAttribute('checked', "true");
});

const popularBtn = document.querySelector('.product-dem__popular-button');
const popularInput = document.querySelector('.product-dem__input-popular');

popularBtn.addEventListener('click', () => {
  popularBtn.classList.toggle('product-dem__popular-button--checked');
  if (popularInput.getAttribute('checked') === "true")
    popularInput.setAttribute('checked', "false");
  else popularInput.setAttribute('checked', "true");
});

const brandsBtn = document.querySelector('.brands__button');
const brandsSubmain = document.querySelector('.brands__submain');
const brandsMain = document.querySelector('.brands__main');

brandsBtn.addEventListener('click', () => {
  if (brandsSubmain.style.display === "none") {
    brandsSubmain.style.display = "flex";
    brandsBtn.textContent = "Скрыть";
    brandsBtn.style.padding = "5px 0 0 35px";
    brandsMain.style.margin = "0 0 50px 0";
  }
  else {
    brandsSubmain.style.display = "none";
    brandsBtn.textContent = "Показать все";
    brandsBtn.style.padding = "5px 0 0 15px";
    brandsMain.style.margin = "0 0 13px 0";
  }
});

document.querySelectorAll('.news__item').forEach(function (item) {
  const link = item.querySelector('.news__link').getAttribute('href');

  item.addEventListener('click', () => {
    window.location.href = link;
  });
});