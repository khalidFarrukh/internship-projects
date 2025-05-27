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