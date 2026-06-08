'use strict';

/**
 * NAVIGATION FIX (MAIN ISSUE)
 */

const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("article");

navLinks.forEach((link, i) => {
  link.addEventListener("click", function () {

    // remove active from all
    navLinks.forEach(el => el.classList.remove("active"));
    pages.forEach(el => el.classList.remove("active"));

    // add active to clicked
    this.classList.add("active");

    const pageName = this.innerText.toLowerCase().trim();

    pages.forEach(page => {
      if (page.dataset.page === pageName) {
        page.classList.add("active");
      }
    });

    window.scrollTo(0, 0);
  });
});


/**
 * SIDEBAR TOGGLE (KEEP SAME)
 */

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});


/**
 * FILTER (PORTFOLIO) — OPTIONAL KEEP SAME
 */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const projectItems = document.querySelectorAll("[data-filter-item]");

filterBtns.forEach(btn => {
  btn.addEventListener("click", function () {

    filterBtns.forEach(el => el.classList.remove("active"));
    this.classList.add("active");

    const filterValue = this.innerText.toLowerCase();

    projectItems.forEach(item => {
      if (
        filterValue === "all" ||
        item.dataset.category.toLowerCase() === filterValue
      ) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

  });
});
const text = "AI/ML-focused Computer Science student building real-world intelligent systems with LLMs and data-driven technologies—focused on solving complex problems, not just studying them.";

let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 20);
  }
}
typeEffect();