(function () {
  function removeDuplicateUtilityLinksFromMainMenu() {
    var mainMenu = document.getElementById("mainmenu");
    if (!mainMenu) {
      return;
    }

    var utilityLinkPatterns = [
      "phones.nt.gov.au",
      "ntgcentral.nt.gov.au/policy-library",
      "ntgcentral.nt.gov.au/ntgov-noticeboard/all-items",
      "nt.gov.au/",
    ];

    var topLevelItems = mainMenu.querySelectorAll("ul.level-one > li");
    topLevelItems.forEach(function (li) {
      var anchor = li.querySelector(":scope > a");
      if (!anchor) {
        return;
      }

      var href = anchor.getAttribute("href") || "";
      var isDuplicateUtility = utilityLinkPatterns.some(function (pattern) {
        return href.indexOf(pattern) !== -1;
      });

      if (li.classList.contains("ml-auto") || isDuplicateUtility) {
        li.remove();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      removeDuplicateUtilityLinksFromMainMenu,
    );
  } else {
    removeDuplicateUtilityLinksFromMainMenu();
  }
})();
