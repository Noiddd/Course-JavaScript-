"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

const nav = document.querySelector(".nav");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Scrolling

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect(); // getBoundingClientReact() is used to get coordinates, relative to the visable viewport

  // console.log(e.target.getBoundingClientRect()); // e.target refers to btnScrollTO

  // console.log("Current scroll (X/Y)", window.pageXOffset, pageYOffset); // It show the px from the visable edge to the browser edge

  // console.log(
  //   "Height/width viewport:",
  //   document.documentElement.clientHeight, // shows the visable height
  //   document.documentElement.clientWidth // shows the visable width
  // );

  // Scrolling

  // s1coords.top scrolls based on relative viewport, from the top of whats visable to the section.
  // need to add window.pageYOffset, which is from the visable to the top of the browser
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // // Old school way
  // // Implementing Smooth Scrolling
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  // Modern way
  section1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////

// Page Navigation

// Not the best way, since we will be attaching the whole function onto the element. What if we ahve 100000 element?
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();

//     const id = this.getAttribute("href");
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Tabbed component

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Gaurd clause
  // An if statement what will return early if the condition is met
  if (!clicked) return; // if clicked is falsey, code will stop here

  // Active tab
  clicked.classList.add("operations__tab--active");

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active")); // Clearing all active tabs
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate content area

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

// Passing 'argument' into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Sticky Navigation
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener("scroll", function () {
//   if (this.window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

// Sticky Navigation: Intersection Observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => console.log(entry));
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
//   // callBack will trigger each time target is % in view
//   // 0 means completely out of the view and also as soon as it enters the view
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal Sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return; // Guard clause

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
/*
////////////////////////////////////////////////////////////////////////////////////////
// Selecting, Creating and Deleting Elements

// Selecting elements
console.log(document.documentElement); // Selecting the entire page for CSS styling
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSelection = document.querySelectorAll(".section");

console.log(allSelection);

document.getElementById("section--1");

// returns a HTML collection, different from a Node list
// HTML collection is a live collection means it will update live if something is added or removed
const allButtons = document.getElementsByTagName("button");
console.log(allButtons); // return HTML collection

console.log(document.getElementsByClassName("btn")); // return HTML collection

// Creating and inserting elements
// .insertAdjacentHTML

// Creates a DOM element and stores it in message
// Not yet anywhere in the DOM, its simply a DOM object that we can do something about it
const message = document.createElement("div");

message.classList.add("cokkie-message"); // adding CSS style
// message.textContent = 'We use cookies for improved functionality and analytics.' // This inserts text
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';

// DOM elements are unique, so message was inserted with prepend and moved by append. Thats why it ONLY shows at the bottom of header
// header.prepend(message); // preend adds message as the first child of header, this will show up at the top of header
header.append(message); // preend adds message as the last child of header, this will show up at the bottom of header

// copy element to show both top and bottom
// header.prepend(message);
// header.append(message.cloneNode(true));

// header.before(message); // insert before the header elements as a sibling
// header.after(message); // insert after the header elements as a sibling

// Delete Elements
document
  .querySelector(".btn--close--cookie")
  .addEventListener("click", function () {
    message.remove();
  });

*/
///////////////////////////////////////
// Styles, Attributes and Classes
// const header = document.querySelector(".header");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';
header.append(message);
header.after(message);

document
  .querySelector(".btn--close--cookie")
  .addEventListener("click", function () {
    message.remove();
  });

// Styles

// Setting inline styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

/*
// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo"; // Changing properties
console.log(logo.alt);

console.log(logo.designer); // Prints: undefined // Since it is not a standard property that is expected on images
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

console.log(logo.src); // Absolute version
console.log(logo.getAttribute("src")); // relative version

const link = document.querySelector(".twitter-link");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c"); // contains not includes

// Don't use
// It overrides all existing classes and allows only 1
logo.className = "jonas";
*/
/*

///////////////////////////////////////
// Types of Events and Event Handlers

// An event is a signal that is generated by a DOM node
// A signal means something has happen, for example a click somewhere, mouse moving etc..

const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListener: Great! You are reading the heading!");

  // h1.removeEventListener("mouseenter", alertH1);
};

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert("onmouseenter: Great! You are reading the heading!");
// };

///////////////////////////////////////
// Event Propagation in Practice

// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)} )`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor(); // this key word in a eventlistener points to the element that the eventlistener is attached to
  console.log("LINK", e.target, e.currentTarget); // e.target points to where the even happend

  // Stop propagation
  e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
});


///////////////////////////////////////
// DOM Traversing
// Basically walking through the DOM
// Selecting an element based on another element

const h1 = document.querySelector("h1");

// Going downwards: selecting child
// queryselector is used to find children no matter how deep in the DOM tree
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes); // Selecting direct children
console.log(h1.children); // Selecting direct children which are elements

h1.firstElementChild.style.color = "white"; // Selecting and changing color of the first element child
h1.lastElementChild.style.color = "orangered"; // Selecting and changing color of the last element child

// Going upwards: selecting parents
console.log(h1.parentNode); // Selecting direct parent
console.log(h1.parentElement);

// closest is used in selecting the closet parent element that has the header class

h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.background = "var(--gradient-primary)"; // Will select itself

// Going sidewats: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// selecting all siblings
// Move up to the parent and selecting all the children
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5)";
});
*/

//
