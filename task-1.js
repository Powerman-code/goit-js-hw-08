// Задание
// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне.
// Превью результата посмотри https://monosnap.com/file/KKoRHdov8Thm2oWpzURSOg2L6iDCp3

// Разбей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js - gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data - action= "close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для того,
// чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

// Дополнительно
// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data - атрибуте source на элементе img,
// и указываться в href ссылки(это необходимо для доступности).

{
  /* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>; */
}

import galleryImages from "./gallery-items.js";
// console.log(galleryImages);

// console.log(galleryCreatorMarkup(galleryImages));

const gallaryElementContainer = document.querySelector(".js-gallery");
// console.log(gallaryElementContainer);
const modal = document.querySelector(".js-lightbox");

const gallaryMarkup = galleryCreatorMarkup(galleryImages);

const modalCloseButton = document.querySelector(".lightbox__button");

const imageModalRef = document.querySelector(".lightbox__image");

const backdropRef = document.querySelector(".lightbox__overlay");

gallaryElementContainer.insertAdjacentHTML("beforeend", gallaryMarkup);

function galleryCreatorMarkup(galleryImages) {
  return galleryImages
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join("");
  console.log(markup);
}

gallaryElementContainer.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();
  console.log(evt.target.nodeName);
  // console.log(evt.target.src);
  // evt.target.alt;
  window.addEventListener("keydown", onEscKeyPress);
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  openModal();
  imageModalRef.src = evt.target.dataset.source;
  console.log(imageModalRef.src);
}

function openModal() {
  modal.classList.add("is-open");
  // imageModalRef.src =
  // modal.img.src = evt.target.img.src;
  // evt.target.img.src;
}

function closeModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  modal.classList.remove("is-open");
  imageModalRef.src = "";
}

function onEscKeyPress(evt) {
  console.log(evt.code);
  if (evt.code === "Escape") {
    closeModal();
  }
  if (evt.code === "ArrowLeft") {
  }
  if (evt.code === "ArrowRight") {
  }
  console.log(evt);
}

backdropRef.addEventListener("click", closeModal);

modalCloseButton.addEventListener("click", closeModal);

// console.log(openModal());

// dirBox.style.height = 30 + i * 10 + "px";

// const refs = {
//   openModalBtn: document.querySelector('');
// };
// is - open;
