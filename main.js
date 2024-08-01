import "./assets/scss/all.scss";

const category = document.querySelectorAll(
  ".collection-category-header .category"
);

const opticalProductContainer = document.querySelector(".optical .row");

let opticalProductImages = 6;

category.forEach((item) => {
  item.addEventListener("click", () => {
    category.forEach((x) => {
      x.classList.remove("selected");
    });

    item.classList.add("selected");
  });
});

//Render optical product images
for (let i = 0; i < 2; i++) {
  for (let i = 0; i < opticalProductImages; i++) {
    opticalProductContainer.innerHTML += `<div class="column">
              <div class="card">
                <a href="#">
                <img
                  src="../assets/images/product-${i + 1}.png"
                  alt="product BJ41600S"
                />
  
                <div class="product-details d-flex flex-column">
                  <div class="d-flex justify-content-space-between">
                    <p class="product-id">BJ41600S</p>
                    <p class="price">NTD3,490</p>
                 </div>
              <div class="colors">
                <a href="#" class="color color-dark-brown"></a>
                <a href="#" class="color color-light-brown"></a>
              </div>
            </div>  
            </a> 
              </div>
            </div>`;
  }
}
