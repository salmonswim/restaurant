/*
* update slider background / number
*/
const quantityslider = document.getElementById("quantityslider");
let qtyBGPercent = 0;

quantityslider.oninput = function() {
    qtyBGPercent =  quantityslider.value; // calculate slider percent
    quantityslider.style.setProperty("--slider-bg", `linear-gradient(to right, #4a8a40 ${qtyBGPercent}%, #75ab42 ${qtyBGPercent}%)`);

    // update number here
};