function closeDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (dropdown && dropdown.classList.contains('block')) {
    dropdown.classList.add('hidden');
    dropdown.classList.remove('block');
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