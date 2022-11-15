const dropdownBtn = document.querySelectorAll(`.dropdownButton`);
const dropdownList = document.querySelectorAll(`.dropdownList`);

/* Prevent hiding dropdown on clicking inside */
dropdownList.forEach(list => list.addEventListener(`click`, function (e){
    e.stopPropagation();
}))


/* dropdown function */
function dropdownHandler(e) {

    const button = e.currentTarget;


    if (button === dropdownBtn[0] && dropdownList[0].classList.contains(`hidden`)) {
        dropdownList[0].classList.remove(`hidden`);
        return dropdownList[0].classList.remove(`slideOut`);
    }
    if (button === dropdownBtn[0] && !dropdownList[0].classList.contains(`hidden`)) {
        dropdownList[0].classList.add(`hidden`);
        return dropdownList[0].classList.add(`slideOut`);
    }
    if (button === dropdownBtn[1] && dropdownList[1].classList.contains(`hidden`)) {
        dropdownList[1].classList.remove(`hidden`);
        return dropdownList[1].classList.add(`slideOut`);
    }
    if (button === dropdownBtn[1] && !dropdownList[1].classList.contains(`hidden`)) {
        dropdownList[1].classList.add(`hidden`);
        return dropdownList[1].classList.remove(`slideOut`);
    }

}

/* hide dropdown on clicking outside */

window.onclick = function (e) {

    if (!e.target.matches(`.dropdownButton`)) {

        for (let i = 0; i < dropdownList.length; i++) {
            const openDropdown = dropdownList[i];
            if (!openDropdown.classList.contains(`hidden`)) {
                openDropdown.classList.add(`hidden`)
            }
        }
    }
}


dropdownBtn.forEach(button => button.addEventListener(`click`, dropdownHandler));

/* Mobile menu handling */

const hamburger = document.querySelector(`.hamburgerMobile `);
const navigation = document.querySelector(`.navigation`);
const mainContent = document.querySelector(`.mainContent`);
const attribution = document.querySelector(`.attribution`);

console.log(hamburger)

function hamburgerAnimationHandler(e) {
  e.currentTarget.classList.toggle("change");
  if (navigation.classList.contains(`navigationShow`)) {
      navigation.classList.remove(`navigationShow`);
      navigation.classList.add(`slideBackLeft`);
      mainContent.classList.remove(`darkScreen`);
      attribution.classList.remove(`darkScreen`);
  } else {
      navigation.classList.add(`navigationShow`);
      navigation.classList.remove(`slideBackLeft`);
      mainContent.classList.add(`darkScreen`);
      attribution.classList.add(`darkScreen`);
  }

}

hamburger.addEventListener(`click`, hamburgerAnimationHandler);




