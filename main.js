// Collections Page
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

// Location page
const storeInfo = [
  {
    name: "台北中山旗艦店",
    phone: "(02)000-1234",
    schedule: "10:00-21:00",
    address: "台北市中山區南京東路25巷2-1號",
  },
  {
    name: "台北綠園店",
    phone: "(02)000-2345",
    schedule: "10:00-21:00",
    address: "台北市中正區復興南路 132-1 號",
  },
  {
    name: "台中清水旗艦店",
    phone: "(02)000-1234",
    schedule: "10:00-21:00",
    address: "台中市清水區經南一路 23 號 8 樓",
  },
  {
    name: "高雄中正形象店",
    phone: "(07)000-2345",
    schedule: "10:00-21:00",
    address: "高雄市苓雅區中正路 38 號 12 樓",
  },
  {
    name: "高雄夢時代店",
    phone: "(07)000-1234",
    schedule: "10:00-21:00",
    address: "高雄市前鎮區中華一路 63 號 6 樓",
  },
];

const locationContainer = document.querySelector(".location-list .row");

if (locationContainer) {
  for (let i = 0; i < storeInfo.length; i++) {
    locationContainer.innerHTML += `<div class="column col-4 col-md-6 col-sm-12 d-flex">
            <div class="card">
              <img src="../assets/images/store-${i + 1}.png" alt="${
      storeInfo[i].name
    }" />
              <div class="store-details">
                <p class="location-name">${storeInfo[i].name}</p>
                <ul class="location-contact d-flex flex-column">
                  <li class="d-flex">
                    <i class="material-icons-outlined"
                      ><a href="tel:02000-1234">call</a></i
                    >
                    <p><a href="tel:${storeInfo[i].phone}">電話：${
      storeInfo[i].phone
    }</a></p>
                  </li>
                  <li class="d-flex">
                    <i class="material-icons-outlined">schedule</i>
                    <p>營業時間：${storeInfo[i].schedule}</p>
                  </li>
                  <li class="d-flex">
                    <i class="material-icons-outlined"
                      ><a
                        href="https://www.google.com.hk/maps/search/${
                          storeInfo[i].address
                        }"
                        >location_on</a
                      ></i
                    >
                    <p>
                      <a
                        href="https://www.google.com.hk/maps/search/${
                          storeInfo[i].address
                        }"
                        >地址：${storeInfo[i].address}</a
                      >
                    </p>
                  </li>
                </ul>
              </div>
              <a href="#" class="button">詳細資訊</a>
            </div>
          </div>`;
  }
}

import "./assets/scss/all.scss";
