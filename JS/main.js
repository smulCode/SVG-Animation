// import {example} from "./modules/example.js"

// const svg = document.getElementsById("triangles");
const svg = document.getElementById("triangles")

svg.onclick = (e) => {
  const colors = ["red","blue","green","orange", "pink","purple"]
  const random = () => colors[Math.floor(Math.random() * colors.length)]
  document.documentElement.style.cssText = ` 
  --dark-color: ${random()};
  --light-color: ${random()};
  
  `
}