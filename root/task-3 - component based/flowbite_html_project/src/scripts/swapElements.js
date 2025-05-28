function swapElements(el1, el2) {
  const el_1 = document.getElementById(el1);
  const el_2 = document.getElementById(el2);

  const parent1 = el_1.parentNode;
  const parent2 = el_2.parentNode;

  // create a temporary placeholder
  const temp = document.createElement("div");

  parent1.replaceChild(temp, el_1);
  parent2.replaceChild(el_1, el_2);
  parent1.replaceChild(el_2, temp);
}


// function swapCondition(width, check, el1, el2) {
//   console.log(check)
//   if (window.innerWidth < width && !check) {
//     console.log("smaller than a specified width");
//     swapElements(el1, el2);
//     return !check;
//   }
//   else if (window.innerWidth >= width && check) {
//     console.log("bigger than a specified width");
//     swapElements(el1, el2);
//     return !check;
//   }
//   return check;
// }




// let w825_swap1_check = false;
// // Run on load
// window.addEventListener('load', () => { w825_swap1_check = swapCondition(825, w825_swap1_check, "swap1_n1", "swap1_n2") });
// // Run on resize
// window.addEventListener('resize', () => { w825_swap1_check = swapCondition(825, w825_swap1_check, "swap1_n1", "swap1_n2") });


const nodes1 = document.querySelectorAll('[data-node="n1"]');
const nodes2 = document.querySelectorAll('[data-node="n2"]');

function swapElements(el1, el2) {
  const parent1 = el1.parentNode;
  const parent2 = el2.parentNode;

  // create a temporary placeholder
  const temp = document.createElement("div");

  parent1.replaceChild(temp, el1);
  parent2.replaceChild(el1, el2);
  parent1.replaceChild(el2, temp);
}

window.addEventListener("load", handleResponsiveSwaps);
window.addEventListener("resize", handleResponsiveSwaps);
handleResponsiveSwaps(); // Run once on load

function handleResponsiveSwaps() {
  const width = window.innerWidth;

  nodes1.forEach((el1, i) => {
    const el2 = nodes2[i];
    const swapWidth = parseInt(el1.dataset.swapwidth, 10);
    const swapped = el1.dataset.swapped === "true";
    if (width < swapWidth && !swapped) {
      swapElements(el1, el2);
      el1.dataset.swapped = "true";
    } else if (width >= swapWidth && swapped) {
      swapElements(el1, el2);
      el1.dataset.swapped = "false";
    }
  });
}