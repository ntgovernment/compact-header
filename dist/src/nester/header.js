(function () {
  function moveMainMenuInline() {
    var mainMenu = document.getElementById("mainmenu");
    var inlineSlot = document.querySelector(
      ".ntgc-header [data-mainmenu-inline-slot='true']",
    );
    if (mainMenu && inlineSlot && !inlineSlot.contains(mainMenu)) {
      inlineSlot.appendChild(mainMenu);
    }
  }

  function removeDuplicateUtilityLinks(mainMenu) {
    var utilityLinkPatterns = [
      "phones.nt.gov.au",
      "ntgcentral.nt.gov.au/policy-library",
      "ntgcentral.nt.gov.au/ntgov-noticeboard/all-items",
      "myhr.nt.gov.au",
      "myforms.nt.gov.au",
      "ntgcentral.nt.gov.au/online-systems",
    ];

    mainMenu.querySelectorAll("ul.level-one > li").forEach(function (item) {
      var link = item.querySelector(":scope > a");
      var href = link ? link.getAttribute("href") || "" : "";
      var isUtilityLink = utilityLinkPatterns.some(function (pattern) {
        return href.indexOf(pattern) !== -1;
      });

      if (item.classList.contains("ml-auto") || isUtilityLink) {
        item.remove();
      }
    });
  }

  function alignMainMenuPanels(mainMenu) {
    var isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    var panels = mainMenu.querySelectorAll(".menu-wrapper");
    panels.forEach(function (panel) {
      if (!isDesktop) {
        panel.style.left = "";
        panel.style.right = "";
        return;
      }

      var viewportCenter = window.innerWidth / 2;
      var navRect = mainMenu.getBoundingClientRect();
      panel.style.left = viewportCenter - navRect.left + "px";
      panel.style.right = "auto";
    });
  }

  function closeUtilityDropdowns(utilityNav) {
    utilityNav
      .querySelectorAll(".ntgc-utility-dropdown.is-open")
      .forEach(function (dropdown) {
        dropdown.classList.remove("is-open");
        var trigger = dropdown.querySelector(
          ".ntgc-navigation--utility__trigger",
        );
        if (trigger) {
          trigger.setAttribute("aria-expanded", "false");
        }
      });
  }

  function initUtilityDropdowns() {
    var utilityNav = document.querySelector(".ntgc-navigation--utility");
    if (!utilityNav) {
      return;
    }

    utilityNav
      .querySelectorAll(".ntgc-utility-dropdown")
      .forEach(function (dropdown) {
        var trigger = dropdown.querySelector(
          ".ntgc-navigation--utility__trigger",
        );
        if (!trigger) {
          return;
        }

        trigger.setAttribute("aria-expanded", "false");
        trigger.addEventListener("click", function () {
          var shouldOpen = !dropdown.classList.contains("is-open");
          closeUtilityDropdowns(utilityNav);
          if (shouldOpen) {
            dropdown.classList.add("is-open");
            trigger.setAttribute("aria-expanded", "true");
          }
        });
      });

    document.addEventListener("click", function (event) {
      if (!utilityNav.contains(event.target)) {
        closeUtilityDropdowns(utilityNav);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeUtilityDropdowns(utilityNav);
      }
    });
  }

  function initHeader() {
    moveMainMenuInline();
    var mainMenu = document.getElementById("mainmenu");
    if (mainMenu) {
      removeDuplicateUtilityLinks(mainMenu);
      alignMainMenuPanels(mainMenu);
      window.addEventListener("resize", function () {
        alignMainMenuPanels(mainMenu);
      });
    }
    initUtilityDropdowns();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeader);
  } else {
    initHeader();
  }
})();