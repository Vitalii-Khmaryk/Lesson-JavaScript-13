function showBlock() {
  document.querySelector(".box").classList.add("box1");
  document.getElementById("b1").classList.add("block1", "bg-gray");
  document.getElementById("b2").classList.add("block1", "bg-brown");
  document.getElementById("b3").classList.add("block1", "bg-green");
  document.getElementById("b4").classList.add("block1", "bg-yellow");
  document.getElementById("b5").classList.add("block1", "bg-aqua");
  document.getElementById("b6").classList.add("block1", "bg-orange");
  document.getElementById("b7").classList.add("block1", "bg-blue");
  document.getElementById("b8").classList.add("block1", "bg-pink");
  document.getElementById("b9").classList.add("block1", "bg-lawngreen");

  document.querySelector(".BoxImg").classList.remove("box1");
  document.getElementById("b11").classList.remove("block1", "bg-img-zav");
  document.getElementById("b12").classList.remove("block1", "bg-img-ph2");
  document.getElementById("b13").classList.remove("block1", "bg-img-ph3");
  document.getElementById("b14").classList.remove("block1", "bg-img-ph4");
  document.getElementById("b15").classList.remove("block1", "bg-img-ph5");
  document.getElementById("b16").classList.remove("block1", "bg-img-ph6");
  document.getElementById("b17").classList.remove("block1", "bg-img-ph7");
  document.getElementById("b18").classList.remove("block1", "bg-img-ph8");
  document.getElementById("b19").classList.remove("block1", "bg-img-ph9");
}

document.querySelector(".divs").addEventListener("click", showBlock);

let b = document.getElementById("bodyId");
document.getElementById("b1").addEventListener("click", function () {
  b.style.backgroundImage = "url()";
  b.style.backgroundColor = "gray";
});
document.getElementById("b2").addEventListener("click", function () {
  b.style.backgroundImage = "url()";
  b.style.backgroundColor = "brown";
});
document.getElementById("b3").addEventListener("click", function () {
  b.style.backgroundImage = "url()";
  b.style.backgroundColor = "green";
});
document.getElementById("b4").addEventListener("click", function () {
  b.style.backgroundImage = "url()";
  b.style.backgroundColor = "yellow";
});
document.getElementById("b5").addEventListener("click", function () {
  b.style.backgroundImage = "url()";
  b.style.backgroundColor = "aqua";
});
document.getElementById("b6").addEventListener("click", function () {
  b.style.backgroundImage = "url()";
  b.style.backgroundColor = "orange";
});
document.getElementById("b7").addEventListener("click", function () {
  b.style.backgroundImage = "url()";
  b.style.backgroundColor = "blue";
});
document.getElementById("b8").addEventListener("click", function () {
  b.style.backgroundImage = "url()";
  b.style.backgroundColor = "pink";
});
document.getElementById("b9").addEventListener("click", function () {
  b.style.backgroundImage = "url()";
  b.style.backgroundColor = "lawngreen";
});

function showBlockImage() {
  document.querySelector(".BoxImg").classList.add("box1");
  document.getElementById("b11").classList.add("block1", "bg-img-zav");
  document.getElementById("b12").classList.add("block1", "bg-img-ph2");
  document.getElementById("b13").classList.add("block1", "bg-img-ph3");
  document.getElementById("b14").classList.add("block1", "bg-img-ph4");
  document.getElementById("b15").classList.add("block1", "bg-img-ph5");
  document.getElementById("b16").classList.add("block1", "bg-img-ph6");
  document.getElementById("b17").classList.add("block1", "bg-img-ph7");
  document.getElementById("b18").classList.add("block1", "bg-img-ph8");
  document.getElementById("b19").classList.add("block1", "bg-img-ph9");

  document.querySelector(".box").classList.remove("box1");
  document.getElementById("b1").classList.remove("block1", "bg-gray");
  document.getElementById("b2").classList.remove("block1", "bg-brown");
  document.getElementById("b3").classList.remove("block1", "bg-green");
  document.getElementById("b4").classList.remove("block1", "bg-yellow");
  document.getElementById("b5").classList.remove("block1", "bg-aqua");
  document.getElementById("b6").classList.remove("block1", "bg-orange");
  document.getElementById("b7").classList.remove("block1", "bg-blue");
  document.getElementById("b8").classList.remove("block1", "bg-pink");
  document.getElementById("b9").classList.remove("block1", "bg-lawngreen");
}

document.querySelector(".divImage").addEventListener("click", showBlockImage);

document.getElementById("b11").addEventListener("click", function () {
  b.style.cssText =
    "background-image:url(завантаження.jpg);background-repeat:no-repeat;background-size:cover";
});
document.getElementById("b12").addEventListener("click", function () {
  b.style.cssText =
    "background-image:url(photo2.jpg);background-repeat:no-repeat;background-size:cover";
});
document.getElementById("b13").addEventListener("click", function () {
  b.style.cssText =
    "background-image:url(photo3.jpg);background-repeat:no-repeat;background-size:cover";
});
document.getElementById("b14").addEventListener("click", function () {
  b.style.cssText =
    "background-image:url(photo4.jpg);background-repeat:no-repeat;background-size:cover";
});
document.getElementById("b15").addEventListener("click", function () {
  b.style.cssText =
    "background-image:url(photo5.jpg);background-repeat:no-repeat;background-size:cover";
});
document.getElementById("b16").addEventListener("click", function () {
  b.style.cssText =
    "background-image:url(photo6.jpg);background-repeat:no-repeat;background-size:cover";
});
document.getElementById("b17").addEventListener("click", function () {
  b.style.cssText =
    "background-image:url(photo7.jpg);background-repeat:no-repeat;background-size:cover";
});
document.getElementById("b18").addEventListener("click", function () {
  b.style.cssText =
    "background-image:url(photo8.jpg);background-repeat:no-repeat;background-size:cover";
});
document.getElementById("b19").addEventListener("click", function () {
  b.style.cssText =
    "background-image:url(photo9.jpg);background-repeat:no-repeat;background-size:cover";
});
