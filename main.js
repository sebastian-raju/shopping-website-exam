fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => displayProducts(data));



function displayProducts(productArray){
  for(let i of productArray){

    document.querySelector('.main-Container').innerHTML += `
    <div class="card shadow pt-1 px-2 pb-1" style="width: 21.5rem; height: 600px">
      <div class="p-3 d-flex align-self-center" style="min-height: 320px; min-width: 280px;"><img style="height: 100%; width: 100%; " src=${i.image} class="card-img-top"  alt="..."></div>
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title cardTitle mb-3" style="height: 48px">${i.title}</h5>
        <p class="card-text cardContent mb-3">${i.description}</p>
        <button class="btn rating mb-4 align-self-start" style="border: 2px solid #6940E8; color: #6940E8; ">${i.rating.rate}<i class="fa-solid fa-star" style="color: #6940E8;"></i></button>
        <div class="d-flex justify-content-between align-items-center" style="column-gap: 40px;">
          <div class="price fs-2" style="font-weight: 500;">${i.price}$</div>
          <a href="#" class="btn" style="background-color: #6940E8; color: white;">Add to cart</a>
        </div>
      </div>
    </div>
    `
  }
}