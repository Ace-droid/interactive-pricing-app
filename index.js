
const slider = document.querySelector("input[type='range']");
const selector = document.querySelector("#selector")
const progressBar = document.getElementById("progress-bar")
const totalPrice = document.getElementById("total-price");
const toggleBtn = document.getElementById("toggle-btn");
const toggleLabel = document.getElementById("toggle-label");


slider.oninput = function() {
   selector.style.left = this.value + "%";
   progressBar.style.width = this.value + "%";

}


slider.addEventListener("input", () => {
   discountPrice()
})



function discountCal() {
   const discount = Math.trunc((25 / 100) * slider.value);
   totalPrice.textContent =`$${discount}`;
}



function discountPrice() {
   if(toggleBtn.checked == true) {
      return discountCal()
   }else {
      totalPrice.textContent =`$${slider.value}`
   }
}


toggleBtn.addEventListener('click', () =>{
   discountPrice()
})

