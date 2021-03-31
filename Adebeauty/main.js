"use strict";

const user = document.querySelector(".fa-user");
const form = document.querySelector(".formbox");
const arrow = document.querySelector(".mainarrow");

const flex1 = document.querySelector(".flex1");
const flex2 = document.querySelector(".flex2");
const flex3 = document.querySelector(".flex3");

const buynow1 = document.querySelector(".hoverbuynow1");
const instagram1 = document.querySelector("#ig1");
const overlay1 = document.querySelector(".overlay1");

const buynow2 = document.querySelector(".hoverbuynow2");
const instagram2 = document.querySelector("#ig2");
const overlay2 = document.querySelector(".overlay2");

const buynow3 = document.querySelector(".hoverbuynow3");
const instagram3 = document.querySelector("#ig3");
const overlay3 = document.querySelector(".overlay3");

const wrapper = document.querySelector(".wrapper");

flex1.addEventListener("mouseenter", function () {
  buynow1.style.visibility = "visible";
  instagram1.style.visibility = "visible";
  overlay1.style.visibility = "visible";
});

flex1.addEventListener("mouseleave", function () {
  buynow1.style.visibility = "hidden";
  instagram1.style.visibility = "hidden";
  overlay1.style.visibility = "hidden";
});

flex2.addEventListener("mouseenter", function () {
  buynow2.style.visibility = "visible";
  instagram2.style.visibility = "visible";
  overlay2.style.visibility = "visible";
});

flex2.addEventListener("mouseleave", function () {
  buynow2.style.visibility = "hidden";
  instagram2.style.visibility = "hidden";
  overlay2.style.visibility = "hidden";
});

flex3.addEventListener("mouseenter", function () {
  buynow3.style.visibility = "visible";
  instagram3.style.visibility = "visible";
  overlay3.style.visibility = "visible";
});

flex3.addEventListener("mouseleave", function () {
  buynow3.style.visibility = "hidden";
  instagram3.style.visibility = "hidden";
  overlay3.style.visibility = "hidden";
});

user.addEventListener("mouseenter", function () {
  form.classList.remove("formbox");
  arrow.classList.remove("mainarrow");
});

user.addEventListener("mouseleave", function () {
  form.classList.add("formbox");
  arrow.classList.add("mainarrow");
});
