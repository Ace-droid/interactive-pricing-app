
const slider = document.querySelector("#slider");
const selector = document.querySelector("#selector")
const totalPrice = document.querySelector(".price");
const toggleBtn = document.getElementById("toggle-btn");
const toggleLabel = document.getElementById("toggle-label");
const pageView = document.querySelector(".views");
const percentage = document.querySelector(".percent");
const seasons = document.querySelector(".seasons")
   
   
 //slider background & calculate pricing

function calculatePrice() {
 
   
   if(slider.value == 1) {
      if(toggleBtn.checked == true){
         totalPrice.innerHTML = `$${72}`
         seasons.innerHTML = "/year";
      }else{totalPrice.innerHTML = `$${8.00}`
         seasons.innerHTML = "/month";}

      pageView.innerHTML = "10K";
      slider.style.background = "linear-gradient(to right,  hsl(174, 86%, 45%) 0%,  hsl(174, 86%, 45%) 0%, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)"}
   
      if(slider.value == 2) {
         if(toggleBtn.checked == true){
            totalPrice.innerHTML = `$${108}`
            seasons.innerHTML = "/year";
         }else{totalPrice.innerHTML = `$${12.00}`
         seasons.innerHTML = "/month";}

         pageView.innerHTML = "50K";
         slider.style.background = "linear-gradient(to right,  hsl(174, 86%, 45%) 0%,  hsl(174, 86%, 45%) 25%, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)"}

         if(slider.value == 3) {
            if(toggleBtn.checked == true){
               totalPrice.innerHTML = `$${144}`
               seasons.innerHTML = "/year";
            }else{totalPrice.innerHTML = `$${16.00}`
            seasons.innerHTML = "/month";}

            pageView.innerHTML = "100K";
            slider.style.background = "linear-gradient(to right,  hsl(174, 86%, 45%) 0%,  hsl(174, 86%, 45%) 50%, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)"}


            if(slider.value == 4) {
               if(toggleBtn.checked == true){
                  totalPrice.innerHTML = `$${216}`
                  seasons.innerHTML = "/year";
               }else{totalPrice.innerHTML = `$${24.00}`
               seasons.innerHTML = "/month";}

               pageView.innerHTML = "500K";
               slider.style.background = "linear-gradient(to right,  hsl(174, 86%, 45%) 0%,  hsl(174, 86%, 45%) 75%, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)"}


               if(slider.value == 5) {
                  if(toggleBtn.checked == true){
                     totalPrice.innerHTML = `$${324}`
                     seasons.innerHTML = "/year";
                  }else{totalPrice.innerHTML = `$${36.00}`
                  seasons.innerHTML = "/month";};

                  pageView.innerHTML = "1M";
                  slider.style.background = "linear-gradient(to right,  hsl(174, 86%, 45%) 0%,  hsl(174, 86%, 45%) 100%, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)"}

   
}

//eventlisteners for the toggle button & slider

slider.addEventListener("input", () => {
   calculatePrice()
})


toggleBtn.addEventListener("click", calculatePrice )




