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