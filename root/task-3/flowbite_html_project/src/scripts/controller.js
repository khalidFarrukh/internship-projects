function elementToggle(elementId, containsClass = 'block') {
  const element = document.getElementById(elementId);
  if (element && element.classList.contains(containsClass)) {
    element.classList.add('hidden');
    element.classList.remove(containsClass);
  }
  else {
    element.classList.remove('hidden');
    element.classList.add(containsClass);
  }
}

document.querySelectorAll('[data-dropdown-toggle="profile3DotsDropDown"]').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const dropdown = document.getElementById('profile3DotsDropDown');
    const rect = btn.getBoundingClientRect();

    dropdown.style.position = 'absolute';
    dropdown.style.top = `${rect.bottom + window.scrollY}px`;
    dropdown.style.left = `${rect.left + window.scrollX}px`;
    dropdown.classList.toggle('hidden');
  });
});


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

let w825_swap1_check = false;
function swapCondition(width, check, el1, el2) {
  console.log(check)
  if (window.innerWidth < width && !check) {
    console.log("shrinking");
    swapElements(el1, el2);
    return !check;
  }
  else if (window.innerWidth >= width && check) {
    console.log("expanding");
    swapElements(el1, el2);
    return !check;
  }
  return check;
}


// Run on load
window.addEventListener('load', () => { w825_swap1_check = swapCondition(825, w825_swap1_check, "swap1_n1", "swap1_n2") });

// Run on resize
window.addEventListener('resize', () => { w825_swap1_check = swapCondition(825, w825_swap1_check, "swap1_n1", "swap1_n2") });