const wButton=document.querySelectorAll(".set .w")[0];
const aButton=document.querySelectorAll(".set .a")[0];
const sButton=document.querySelectorAll(".set .s")[0];
const dButton=document.querySelectorAll(".set .d")[0];
const jButton=document.querySelectorAll(".set .j")[0];
const kButton=document.querySelectorAll(".set .k")[0];
const lButton=document.querySelectorAll(".set .l")[0];


const wSound=document.querySelectorAll(".sound")[0];
const aSound=document.querySelectorAll(".sound")[1];
const sSound=document.querySelectorAll(".sound")[2];
const dSound=document.querySelectorAll(".sound")[3];
const jSound=document.querySelectorAll(".sound")[4];
const kSound=document.querySelectorAll(".sound")[5];
const lSound=document.querySelectorAll(".sound")[6];

wButton.addEventListener("click",  () => {
  wSound.play();
});
aButton.addEventListener("click",  () => {
  aSound.play();
});
sButton.addEventListener("click",  () => {
  sSound.play();
});
dButton.addEventListener("click",  () => {
  dSound.play();
});
jButton.addEventListener("click",  () => {
  jSound.play();
});
kButton.addEventListener("click",  () => {
  kSound.play();
});
lButton.addEventListener("click",  () => {
  lSound.play();
});
