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




function swapElements(el1, el2) {
  const parent1 = el1.parentNode;
  const parent2 = el2.parentNode;

  // create a temporary placeholder
  const temp = document.createElement("div");

  parent1.replaceChild(temp, el1);
  parent2.replaceChild(el1, el2);
  parent1.replaceChild(el2, temp);
}

let nodes_n1 = null,
  nodes_n2 = null,
  nodes_a1 = null,
  nodes_a2 = null,
  nodes_b1 = null,
  nodes_b2 = null,
  nodes_c1 = null,
  nodes_c2 = null,
  nodes_d1 = null,
  nodes_d2 = null;


let areElementsLoaded = false;
const loadElements = () => {
  if (!areElementsLoaded) {
    nodes_n1 = document.querySelectorAll('[data-node="n1"]');
    nodes_n2 = document.querySelectorAll('[data-node="n2"]');
    nodes_a1 = document.querySelectorAll('[data-node="a1"]');
    nodes_a2 = document.querySelectorAll('[data-node="a2"]');
    nodes_b1 = document.querySelectorAll('[data-node="b1"]');
    nodes_b2 = document.querySelectorAll('[data-node="b2"]');
    nodes_c1 = document.querySelectorAll('[data-node="c1"]');
    nodes_c2 = document.querySelectorAll('[data-node="c2"]');
    nodes_d1 = document.querySelectorAll('[data-node="d1"]');
    nodes_d2 = document.querySelectorAll('[data-node="d2"]');
    areElementsLoaded = true;
  }
  return [
    nodes_n1,
    nodes_n2,
    nodes_a1,
    nodes_a2,
    nodes_b1,
    nodes_b2,
    nodes_c1,
    nodes_c2,
    nodes_d1,
    nodes_d2
  ]
}



window.addEventListener("DOMContentLoaded", () => {
  const [
    nodes_n1,
    nodes_n2,
    nodes_a1,
    nodes_a2,
    nodes_b1,
    nodes_b2,
    nodes_c1,
    nodes_c2,
    nodes_d1,
    nodes_d2
  ] = loadElements();
  console.log(nodes_a1.length)
  nodes_n1.length > 0 ? handleResponsiveSwaps(nodes_n1, nodes_n2) : "";
  nodes_a1.length > 0 ? handleResponsiveSwaps(nodes_a1, nodes_a2) : "";
  nodes_b1.length > 0 ? handleResponsiveSwaps(nodes_b1, nodes_b2) : "";
  nodes_c1.length > 0 ? handleResponsiveSwaps(nodes_c1, nodes_c2) : "";
  nodes_d1.length > 0 ? handleResponsiveSwaps(nodes_d1, nodes_d2) : "";
});

window.addEventListener("resize", () => {
  const [
    nodes_n1,
    nodes_n2,
    nodes_a1,
    nodes_a2,
    nodes_b1,
    nodes_b2,
    nodes_c1,
    nodes_c2,
    nodes_d1,
    nodes_d2
  ] = loadElements();
  handleResponsiveSwaps(nodes_n1, nodes_n2)
  handleResponsiveSwaps(nodes_a1, nodes_a2)
  handleResponsiveSwaps(nodes_b1, nodes_b2)
  handleResponsiveSwaps(nodes_c1, nodes_c2)
  handleResponsiveSwaps(nodes_d1, nodes_d2)
});

function handleResponsiveSwaps(nodes1, nodes2) {
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