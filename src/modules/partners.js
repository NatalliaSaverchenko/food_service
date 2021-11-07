const partners = () => {
  const cardRestaurants = document.querySelector('.cards-restaurants')
// console.dir(cardRestaurants)

const renderItems = (data) => {
  data.forEach((item) => {
    const a = document.createElement('a')

    a.setAttribute('href', '/restaurant.html')
    a.classList.add('card')
    a.classList.add('card-restaurant')
    a.dataset.products=item.products// новый атрибут data-products

    a.innerHTML = `
    <img src=${item.image} alt="${item.name}" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title">${item.name}</h3>
								<span class="card-tag tag">${item.time_of_delivery} мин</span>
							</div>
							<div class="card-info">
								<div class="rating">
									${item.stars}
								</div>
								<div class="price">От ${item.price} ₽</div>
								<div class="category">${item.kitchen}</div>
							</div>
						</div>
    `
    a.addEventListener('click', (e) => {
       e.preventDefault()
       const link = a.dataset.products
       localStorage.setItem('restaurant', JSON.stringify(item))
       window.location.href='/restaurant.html'
    })
    cardRestaurants.append(a)
    // console.log(a)
  })
}

fetch('https://food-service-78c40-default-rtdb.firebaseio.com/db/partners.json')
  .then((response) => response.json())
  .then((data) => renderItems(data))
  .catch((e) => console.log(e))

}
export default partners