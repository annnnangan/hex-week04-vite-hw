import "./assets/scss/all.scss";

const category = document.querySelectorAll(
  ".collection-category-header .category"
);

const opticalProductContainer = document.querySelector(".optical .row");
const sunglassesProductContainer = document.querySelector(".sunglasses .row");

let opticalProductImages = 6;
let sunglassesProductImages = 6;

category.forEach((item) => {
  item.addEventListener("click", () => {
    category.forEach((item) => {
      item.classList.remove("selected");
    });
    item.classList.add("selected");
  });

  const productCategory = item.dataset.category;

  if (window.location.toString().includes(productCategory)) {
    if (item.dataset.category === productCategory) {
      item.classList.add("selected");
    } else {
      item.classList.remove("selected");
    }
  }
});

//Render optical product images
if (opticalProductContainer) {
  for (let i = 0; i < 2; i++) {
    for (let i = 0; i < opticalProductImages; i++) {
      opticalProductContainer.innerHTML += `<div class="column col-3 col-md-6 col-sm-12">
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
}

//Render sunglasses product images

if (sunglassesProductContainer) {
  for (let i = 0; i < sunglassesProductImages; i++) {
    sunglassesProductContainer.innerHTML += `<div class="column col-4 col-md-6 col-sm-12">
                <div class="card">
                  <a href="#">
                  <img
                    src="../assets/images/product-${i + 7}.png"
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
