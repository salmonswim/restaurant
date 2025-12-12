/*
* update slider background / number
*/
const quantityslider = document.getElementById("quantityslider");
let qtyBGPercent = 0;

quantityslider.oninput = function() {
    qtyBGPercent = (((quantityslider.clientWidth - quantityslider.clientHeight) / quantityslider.clientWidth) * (quantityslider.value - 1) * 0.98) + (quantityslider.clientHeight / quantityslider.clientWidth * 100);
    quantityslider.style.setProperty("--slider-bg", `linear-gradient(to right, #4a8a40 ${qtyBGPercent}%, #75ab42 ${qtyBGPercent}%)`);

    // update number here
};