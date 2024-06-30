/* new Product */
/* let dzRemove = document.querySelectorAll(".dz-remove");
dzRemove.forEach((productUploadBox) => {
  productUploadBox.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
}); */
/* End Product */



let loader = document.querySelector(".loader");

document.addEventListener("DOMContentLoaded", loadHandler);

function loadHandler() {
  loader.classList.add("hidden");
}

let sec = document.querySelector("#timer-sendcode");
let SendNewCode = document.querySelector("#send-new-code");
SendNewCode.style.visibility = "hidden";

//setInterval()
var timer = setInterval(function () {
  sec.innerHTML -= 1;
  if (sec.innerHTML <= 0) {
    SendNewCode.style.visibility = "visible";
    return clearInterval(timer);
  }
}, 1000);
