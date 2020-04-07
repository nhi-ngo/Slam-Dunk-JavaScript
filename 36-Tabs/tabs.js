const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // hide all tab panels

  // tabPanels querySelectorAll returns a node list. We need to loop through them to find the panel we need.
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });

  // mark all tabs as unselected
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });

  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  // find the associated tabPanel and show it
  const { id } = event.currentTarget;

  /* METHOD 1 
  const tabPanel = tabs.querySelector(`[aria-labelledby=${id}]`);
  tabPanel.hidden = false;
  */

  // METHOD 2 - find in the array of tabPanels (turn the tabPanels nodelist into an array before we can use find())
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
