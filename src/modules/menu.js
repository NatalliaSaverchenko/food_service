const menu = () => {
  const cardsMenu = document.querySelector('.cards-menu')
  // console.log(cardsMenu)
  // const changeTitle = (restaurant) => {
  //   const restaurantTitle = document.querySelector('.restaurant-title')
  //   restaurantTitle.textContent=restaurant.name
  // }
  
  const changeHeading = (restaurant) => {
    const reustaurantHeading = document.querySelector('.section-heading')
    reustaurantHeading.innerHTML = `	
    <h2 class="section-title restaurant-title">${restaurant.name} </h2>
    <div class="card-info">
      <div class="rating">
        ${restaurant.stars}
      </div>
      <div class="price">От ${restaurant.price} ₽</div>
      <div class="category">${restaurant.kitchen}</div>
    </div>`
  
  
  }
  
  const renderItems = (data) => {
    data.forEach(({description, id, image, name, price}) => {
      const card = document.createElement('div')
      card.classList.add('card')
  
      card.innerHTML=
      `
      <img src=${image} alt=${name} class="card-image" />
              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title card-title-reg">${name}</h3>
                </div>
                <div class="card-info">
                  <div class="ingredients">${description}</div>
                </div>
                <div class="card-buttons">
                  <button class="button button-primary button-add-cart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                  </button>
                  <strong class="card-price-bold">${price} ₽</strong>
                </div>
              </div>
      `
      cardsMenu.append(card)  })
      // console.log(card)})
      
  }
  if (localStorage.getItem('restaurant')){
    const reustaurant = JSON.parse(localStorage.getItem('restaurant'))
  
    changeHeading(reustaurant)
  
    fetch(`https://food-service-78c40-default-rtdb.firebaseio.com/db/${reustaurant.products}`)
    .then((response) => response.json())
    .then((data) => renderItems(data))
    .catch((e) => console.log(e))
  } else {
    window.location.href='/'
  }
  
  
}
export default menu