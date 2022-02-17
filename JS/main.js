// import {example} from "./modules/example.js"

// const svg = document.getElementsById("triangles");
const triangles = document.getElementById("triangles");

triangles.onclick = (e) => {
  const colors = ["red", "blue", "green", "orange", "pink", "purple"];
  const random = () => colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.cssText = ` 
  --dark-color: ${random()};
  --light-color: ${random()};
  
  `;
};

const hamburger = document.querySelector(".hamburger");

hamburger.onclick = (e) => {
  hamburger.classList.toggle("active");
};

document.querySelectorAll(".menu").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.classList.toggle("active");
  });
});

const redBurger = document.querySelector(".redBurger");

// gsap.set(".top-bar", { y: -40, opacity: 0 });
// gsap.set(".middle-bar", { y: 0, rotation: "40deg", transformOrigin: "center" });
// gsap.set(".bottom-bar", {
//   y: -20,
//   rotation: "-40deg",
//   transformOrigin: "center",
// });

// const tl = gsap.timeline({
//   defaults: { duration: 1, ease: "elastic.in(1, 1)" },
// });
// redBurger.onclick = (e) => {
//   tl.fromTo(
//     ".top-bar",
//     { y: -60, opacity: 0 },
//     { y: 40, opacity: 1, ease: "elastic.out(1, 1)",duration:2.5 }
//   )
//   .fromTo(
//     ".middle-bar",
//     { y: 0, rotation: "40deg" },
//     { y: 20, rotation: "0deg", duration: 0.5 },
//     "<"
//   )
//  .fromTo(
//     ".bottom-bar",
//     { y: -20, rotation: "-40deg" },
//     { y: 0, rotation: "0deg", duration: 0.5 },
//     "<"
//   )

//   .fromTo(selector, {fromVars}, {duration: 1, toVars})
//   // tl.fromTo(".top-bar", {y:-40, opacity:0}, {y:40,opacity:1})
// };


gsap.set(".top-bar", { y: 40 });
gsap.set(".middle-bar", { y: 20, transformOrigin: "center" });
gsap.set(".bottom-bar", {
  y: 0,
  transformOrigin: "center",
});


const tl = gsap.timeline({
  defaults: { duration: 1, ease: "elastic.in(1, 1)" },
});
redBurger.onclick = (e) => {
  tl.fromTo(
    ".top-bar",
    { y: 50,  },
    { y: 40,  ease: "elastic.out(1, 1)" }
  )
  tl.fromTo(
    ".middle-bar",
    { y: 30,  },
    { y: 20,  ease: "elastic.out(1, 1)" },"<"
  )
  tl.fromTo(
    ".bottom-bar",
    { y: 10,  },
    { y: 0,  ease: "elastic.out(1, 1)" },"<"
  )


}