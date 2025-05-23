let dropdownTemplate = null;

async function loadDropdownTemplate() {
  if (!dropdownTemplate) {
    const res = await fetch('../components/profile3DotdDropDown.html');
    const html = await res.text();
    dropdownTemplate = new DOMParser().parseFromString(html, 'text/html').body.firstElementChild;
  }
  return dropdownTemplate.cloneNode(true); // Return fresh copy
}

function loadDependentScript() {
  const script = document.createElement('script');
  script.src = './profile3DotDropDownDepentent.js';
  document.body.appendChild(script);
}

document.querySelectorAll('[data-dropdown-toggle="profile3DotsDropDown"]').forEach(button => {
  button.addEventListener('click', async () => {
    const parent = button.closest('.profile3DotDropDown-parent');

    // Remove existing dropdown from DOM if found elsewhere
    const existingDropdown = document.getElementById('profile3DotsDropDown');
    if (existingDropdown && !parent.contains(existingDropdown)) {
      existingDropdown.remove();
    }

    // Check if already exists inside parent
    let dropdown = parent.querySelector('#profile3DotsDropDown');
    if (!dropdown) {
      dropdown = await loadDropdownTemplate();
      parent.appendChild(dropdown);
    }

    const event = new Event('dropdown:ready');
    document.dispatchEvent(event);

    // Toggle visibility
    dropdown.classList.toggle('hidden');
  });
});

document.addEventListener('dropdown:ready', () => {
  // safe to bind handlers here
  loadDependentScript();
});
