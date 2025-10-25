const STANDARD = "../../../../Public/Images/Icons/icon-wbg2.png";
export function altImg() {
    const images = document.querySelectorAll('img');
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
//# sourceMappingURL=images.js.map