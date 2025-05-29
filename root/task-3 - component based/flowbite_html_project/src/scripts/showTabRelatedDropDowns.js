
window.addEventListener("load", () => {
  document.querySelectorAll('[role="tab"]').forEach(tab => {
    tab.addEventListener('click', () => {
      setTimeout(() => {
        const selectedTab = document.querySelector('[role="tab"][aria-selected="true"]');
        switch (selectedTab.id) {
          case "active-tab":

            break;
          case "shared-tab":

            break;
          case "archived-tab":

            break;
        }
      }, 200);
      console.log("Tab changed. Now active tab is:", selectedTab.id);
    });
  });
});