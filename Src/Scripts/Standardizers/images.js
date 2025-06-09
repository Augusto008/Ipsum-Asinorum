var STANDARD = "./../../../Public/Images/Icons/icon-wbg2.png";
function altImg() {
    var images = document.querySelectorAll('img');
    images.forEach(function (img) {
        var _a;
        var originalSrc = (_a = img.getAttribute('src')) === null || _a === void 0 ? void 0 : _a.trim();
        if (!originalSrc) {
            img.src = STANDARD;
        }
        img.onerror = function () {
            if (img.src !== STANDARD) {
                img.src = STANDARD;
            }
        };
    });
}
window.addEventListener("DOMContentLoaded", altImg);
