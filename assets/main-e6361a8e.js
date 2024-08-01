(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const i=document.querySelectorAll(".collection-category-header .category"),d=document.querySelector(".optical .row"),n=document.querySelector(".sunglasses .row");let p=6,f=6;i.forEach(e=>{e.addEventListener("click",()=>{i.forEach(t=>{t.classList.remove("selected")}),e.classList.add("selected")});const c=e.dataset.category;window.location.toString().includes(c)&&(e.dataset.category===c?e.classList.add("selected"):e.classList.remove("selected"))});if(d)for(let e=0;e<2;e++)for(let c=0;c<p;c++)d.innerHTML+=`<div class="column col-3 col-md-6 col-sm-12">
                <div class="card">
                  <a href="#">
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-${c+1}.png?raw=true"
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
              </div>`;if(n)for(let e=0;e<f;e++)n.innerHTML+=`<div class="column col-4 col-md-6 col-sm-12">
                <div class="card">
                  <a href="#">
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-${e+7}.png?raw=true"
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
              </div>`;const l=[{name:"台北中山旗艦店",phone:"(02)000-1234",schedule:"10:00-21:00",address:"台北市中山區南京東路25巷2-1號"},{name:"台北綠園店",phone:"(02)000-2345",schedule:"10:00-21:00",address:"台北市中正區復興南路 132-1 號"},{name:"台中清水旗艦店",phone:"(02)000-1234",schedule:"10:00-21:00",address:"台中市清水區經南一路 23 號 8 樓"},{name:"高雄中正形象店",phone:"(07)000-2345",schedule:"10:00-21:00",address:"高雄市苓雅區中正路 38 號 12 樓"},{name:"高雄夢時代店",phone:"(07)000-1234",schedule:"10:00-21:00",address:"高雄市前鎮區中華一路 63 號 6 樓"}],u=document.querySelector(".location-list .row");if(u)for(let e=0;e<l.length;e++)u.innerHTML+=`<div class="column col-4 col-md-6 col-sm-12 d-flex">
            <div class="card">
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-${e+1}.png?raw=true" alt="${l[e].name}" />
              <div class="store-details">
                <p class="location-name">${l[e].name}</p>
                <ul class="location-contact d-flex flex-column">
                  <li class="d-flex">
                    <i class="material-icons-outlined"
                      ><a href="tel:02000-1234">call</a></i
                    >
                    <p><a href="tel:${l[e].phone}">電話：${l[e].phone}</a></p>
                  </li>
                  <li class="d-flex">
                    <i class="material-icons-outlined">schedule</i>
                    <p>營業時間：${l[e].schedule}</p>
                  </li>
                  <li class="d-flex">
                    <i class="material-icons-outlined"
                      ><a
                        href="https://www.google.com.hk/maps/search/${l[e].address}"
                        >location_on</a
                      ></i
                    >
                    <p>
                      <a
                        href="https://www.google.com.hk/maps/search/${l[e].address}"
                        >地址：${l[e].address}</a
                      >
                    </p>
                  </li>
                </ul>
              </div>
              <a href="#" class="button">詳細資訊</a>
            </div>
          </div>`;
