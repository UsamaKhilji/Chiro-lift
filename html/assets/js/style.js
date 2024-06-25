//  Aside Menu

function open_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "0";
  } else {
    console.error("Error: Side panel element not found!");
  }
}
function close_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "-355px";
  } else {
    console.error("Error: Side panel element not found!");
  }
}

let slid = document.getElementById("slid-btn");
slid.onclick = () => {
  let dropdwon = document.getElementById("slid-drop");
  dropdwon.classList.toggle("aside-dropdwon");
};

// ASIDE MENUE END

//  Conver text To Date
const inputField = document.getElementById("inputField");

inputField.addEventListener("mouseenter", function () {
  inputField.type = "date";
});

inputField.addEventListener("mouseleave", function () {
  inputField.type = "text";
});
//  Conver text To Date
