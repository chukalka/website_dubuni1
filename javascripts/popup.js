// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.querySelector("forma");
//     if (!form) return;
  
//     const emailInput = form.querySelector(".data");
//     const submitBtn = form.querySelector(".b4");
//     const popup = document.querySelector(".popup");
//     const closePopupBtn = popup.querySelector(".next");
  
//     submitBtn.addEventListener("click", (e) => {
//       e.preventDefault();
  
//       if (!emailInput.value) return;
  
//       document.body.classList.add("no-scroll");
//       popup.style.display = "flex";
//     });
  
//     closePopupBtn.addEventListener("click", () => {
//       document.body.classList.remove("no-scroll");
//       emailInput.value = "";
//       popup.style.display = "none";
//     });
//   });
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (!form) return;
  
    const emailInput = form.querySelector(".field");
    const submitBtn = form.querySelector(".form-button");
    const popup = document.querySelector(".popup");
    const closePopupBtn = popup.querySelector(".next");
  
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
  
      if (!emailInput.value) return;
  
      document.body.classList.add("no-scroll");
      popup.style.display = "flex";
    });
  
    closePopupBtn.addEventListener("click", () => {
      document.body.classList.remove("no-scroll");
      emailInput.value = "";
      popup.style.display = "none";
    });
});
  
  