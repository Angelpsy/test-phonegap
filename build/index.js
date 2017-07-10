// var supported = true;
// for (var feature in Modernizr) {
//     if (typeof Modernizr[feature] === "boolean" && Modernizr[feature] == false) {
//         supported = false;
//         break;
//     }
// }

document.addEventListener("DOMContentLoaded", init);

function init() {
    if (!Modernizr) {
        return;
    }

    const elApp = document.querySelector('#app');
    const elObj = elApp.querySelector('.b-features__obj');
    const elList = elApp.querySelector('.b-features__list');

    elObj.innerHTML = JSON.stringify(Modernizr, '', 4);

    console.log(Modernizr);
}