const STANDARD = "./../../../Public/Images/Icons/icon-wbg2.png";

function altImg() {
  const images = document.querySelectorAll<HTMLImageElement>('img');

  images.forEach(img => {
    const originalSrc = img.getAttribute('src')?.trim();

    if (!originalSrc) {
      img.src = STANDARD;
    }

    img.onerror = () => {
      if (img.src !== STANDARD) {
        img.src = STANDARD;
      }
    };
  });
}

window.addEventListener("DOMContentLoaded", altImg);
