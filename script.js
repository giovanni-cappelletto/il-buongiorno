// Nav visibility
const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Animation
const canvas = document.querySelector(".animation");

const animation = new rive.Rive({
  src: "./public/assets/animation.riv",
  canvas,
  autoplay: false,
  animations: ["Initialize", "Loop Animation"],
  fit: rive.Fit.cover,
});
animation.play();

// Slider
const slideImagesBtns = document.querySelectorAll(".slider__images a");
const rightArrowBtn = document.querySelector("#right_arrow_btn");
const leftArrowBtn = document.querySelector("#left_arrow_btn");
const dots = document.querySelectorAll(".dot");
// Anchors
const sideBtnOne = slideImagesBtns[0];
const mainBtn = slideImagesBtns[1];
const sideBtnTwo = slideImagesBtns[2];
// Images
const sideImageOne = sideBtnOne.children[0];
const mainImage = mainBtn.children[0];
const sideImageTwo = sideBtnTwo.children[0];
let slideIndex = 0;

const periodicals = [
  {
    title: "Blast from the past",
    fileName: "Giugno",
    edition: 4,
    pages: 32,
    year: 2023,
  },
  {
    title: "Si vis pacem, para pacem",
    fileName: "Aprile",
    edition: 1,
    pages: 40,
    year: 2022,
  },
  {
    title: "Il latte dei sogni",
    fileName: "Novembre",
    edition: 2,
    pages: 40,
    year: 2022,
  },
  {
    title: "Racconti dalle ombre",
    fileName: "Marzo",
    edition: 3,
    pages: 32,
    year: 2023,
  },
];

const getInfos = ({ fileName, year }) => {
  const altMessage = `Giornalino di ${fileName}`;
  const thumbnailSrc = `./public/thumbnails/${year}/${fileName}.png`;
  const pdfSrc = `./public/pdf/${year}/${fileName}.pdf`;

  return { altMessage, thumbnailSrc, pdfSrc };
};

const setInfos = (btn, image, { altMessage, thumbnailSrc, pdfSrc }) => {
  btn.href = pdfSrc;
  btn.download = altMessage;
  image.alt = altMessage;
  image.src = thumbnailSrc;
};

const setImages = () => {
  let currentImageIndex = slideIndex;

  setInfos(sideBtnOne, sideImageOne, getInfos(periodicals[currentImageIndex]));
  currentImageIndex++;

  if (currentImageIndex > slideImagesBtns.length) currentImageIndex = 0;

  setInfos(mainBtn, mainImage, getInfos(periodicals[currentImageIndex]));
  currentImageIndex++;

  if (currentImageIndex > slideImagesBtns.length) currentImageIndex = 0;

  setInfos(sideBtnTwo, sideImageTwo, getInfos(periodicals[currentImageIndex]));
};
setImages();

const cleanDots = () => {
  for (const dot of dots) {
    dot.classList.remove("active");
  }
};

rightArrowBtn.addEventListener("click", () => {
  if (slideIndex === periodicals.length - 1) return;

  if (slideIndex + 1 === periodicals.length - 1) {
    rightArrowBtn.classList.add("disabled");
  }

  cleanDots();

  if (leftArrowBtn.classList.contains("disabled"))
    leftArrowBtn.classList.remove("disabled");

  slideIndex++;
  setImages();
  dots[slideIndex].classList.add("active");
});

leftArrowBtn.addEventListener("click", () => {
  if (slideIndex === 0) return;

  if (slideIndex - 1 === 0) {
    leftArrowBtn.classList.add("disabled");
  }

  cleanDots();

  if (rightArrowBtn.classList.contains("disabled"))
    rightArrowBtn.classList.remove("disabled");

  slideIndex--;
  setImages();
  dots[slideIndex].classList.add("active");
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    rightArrowBtn.classList.remove("disabled");
    leftArrowBtn.classList.remove("disabled");

    cleanDots();
    slideIndex = index;
    setImages();
    dots[slideIndex].classList.add("active");

    if (slideIndex === 0) {
      leftArrowBtn.classList.add("disabled");
    }

    if (slideIndex === periodicals.length - 1) {
      rightArrowBtn.classList.add("disabled");
    }
  });
});

// Retrieve infos
const infoBtns = document.querySelectorAll(".info_icon");
const closeIcon = document.querySelector(".close_icon");
const sliderSection = document.querySelector("#giornalini");
const dialog = document.querySelector("dialog");
const dialogTitle = document.querySelector(".dialog__title");
const dialogProperties = document.querySelectorAll(".value");
let anchor = (href = download = "");

infoBtns.forEach((infoBtn) => {
  infoBtn.addEventListener("click", () => {
    anchor = infoBtn.parentElement;
    href = anchor.href;
    download = anchor.download;

    anchor.removeAttribute("download");
    anchor.removeAttribute("href");

    // Finding the periodical through the fileName
    const baseURL = "http://127.0.0.1:5500/";
    const baseFolder = "public/thumbnails/YYYY/";
    const imageSrc = anchor.children[0].src;
    const month = imageSrc.slice(baseURL.length + baseFolder.length, -4);

    for (const { title, fileName, edition, pages, year } of periodicals) {
      if (fileName === month) {
        dialogTitle.textContent = title;
        dialogProperties[0].textContent = edition;
        dialogProperties[1].textContent = pages;
        dialogProperties[2].textContent = year;
      }
    }

    dialog.open = true;
    sliderSection.style.pointerEvents = "none";
  });
});

closeIcon.addEventListener("click", () => {
  dialog.open = false;

  anchor.setAttribute("download", download);
  anchor.setAttribute("href", href);

  sliderSection.style.pointerEvents = "all";
});
