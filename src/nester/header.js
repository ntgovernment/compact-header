(function () {
  function moveMainMenuInline() {
    var mainMenu = document.getElementById("mainmenu");
    if (!mainMenu) {
      return;
    }

    var inlineSlot = document.querySelector(
      ".ntgc-header [data-mainmenu-inline-slot='true']",
    );
    if (!inlineSlot) {
      return;
    }

    if (!inlineSlot.contains(mainMenu)) {
      inlineSlot.appendChild(mainMenu);
    }

    var legacyMainNavRow = document.querySelector(
      ".ntgc-header .ntgc-header__inner--main-nav-figma",
    );
    if (legacyMainNavRow) {
      legacyMainNavRow.style.display = "none";
    }
  }

  function removeDuplicateUtilityLinksFromMainMenu() {
    var mainMenu = document.getElementById("mainmenu");
    if (!mainMenu) {
      return;
    }

    var utilityLinkPatterns = [
      "phones.nt.gov.au",
      "ntgcentral.nt.gov.au/policy-library",
      "ntgcentral.nt.gov.au/ntgov-noticeboard/all-items",
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

  function closeAllMainMenuPanels(mainMenu) {
    var openItems = mainMenu.querySelectorAll("ul.level-one > li.active");
    openItems.forEach(function (li) {
      li.classList.remove("active");
      var link = li.querySelector(":scope > a.dropdown");
      if (link) {
        link.setAttribute("aria-expanded", "false");
      }
    });
  }

  function alignMainMenuPanelsToViewport(mainMenu) {
    var isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    var navContainer = mainMenu.querySelector(".ntgc-navigation--main");
    if (!navContainer) {
      return;
    }

    var panels = mainMenu.querySelectorAll(".menu-wrapper");
    var navRect = navContainer.getBoundingClientRect();
    var viewportCenter = window.innerWidth / 2;
    var leftOffset = viewportCenter - navRect.left;

    panels.forEach(function (panel) {
      if (!isDesktop) {
        panel.style.left = "";
        panel.style.right = "";
        return;
      }

      panel.style.left = leftOffset + "px";
      panel.style.right = "auto";
    });
  }

  function initMainMenuClickToggle() {
    var mainMenu = document.getElementById("mainmenu");
    if (!mainMenu) {
      return;
    }

    var isDesktop = function () {
      return window.matchMedia("(min-width: 1024px)").matches;
    };

    var dropdownLinks = mainMenu.querySelectorAll(
      "ul.level-one > li > a.dropdown",
    );

    alignMainMenuPanelsToViewport(mainMenu);

    dropdownLinks.forEach(function (link) {
      link.setAttribute("aria-expanded", "false");

      link.addEventListener("click", function (event) {
        if (!isDesktop()) {
          return;
        }

        var item = link.parentElement;
        if (!item) {
          return;
        }

        event.preventDefault();
        var isOpen = item.classList.contains("active");
        closeAllMainMenuPanels(mainMenu);

        if (!isOpen) {
          item.classList.add("active");
          link.setAttribute("aria-expanded", "true");
        }

        alignMainMenuPanelsToViewport(mainMenu);
      });
    });

    document.addEventListener("click", function (event) {
      if (!isDesktop()) {
        return;
      }

      if (mainMenu.contains(event.target)) {
        return;
      }

      closeAllMainMenuPanels(mainMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeAllMainMenuPanels(mainMenu);
      }
    });

    window.addEventListener("resize", function () {
      if (!isDesktop()) {
        closeAllMainMenuPanels(mainMenu);
      }

      alignMainMenuPanelsToViewport(mainMenu);
    });

    window.addEventListener("load", function () {
      alignMainMenuPanelsToViewport(mainMenu);
    });
  }

  function initHeaderMainMenuPlacement() {
    moveMainMenuInline();
    removeDuplicateUtilityLinksFromMainMenu();
    initMainMenuClickToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeaderMainMenuPlacement);
  } else {
    initHeaderMainMenuPlacement();
  }
})();
