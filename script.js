function getpositon() {
  var myobj = document.getElementById("upscroll");
  var a = window.scrollY;
  console.log(a);
  myobj.style.width = `${a}px`;
}
