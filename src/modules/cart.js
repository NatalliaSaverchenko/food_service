const cart = () => {
  const buttonCart = document.getElementById('cart-button')
  //   console.log(buttonCart)
  const modalCart = document.querySelector('.modal-cart')
  const buttonClose = modalCart.querySelector('.close')

  const body = modalCart.querySelector('.modal-body')
  const buttonSend = modalCart.querySelector('.button-primary')

  const incrementCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'))
    cartArray.map((item) => {
      if (item.id === id) {
        item.count++
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(cartArray))
    renderItems(cartArray)
  }
  const decrementCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'))
    cartArray.map((item) => {
      if (item.id === id) {
        item.count = item.count > 0 ? item.count - 1 : 0
        // if (item.id===id){
        //     if (item.count>0){
        //         item.count--
        //     }else{
        //         item.count=0
        //     }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(cartArray))
    renderItems(cartArray)
  }



const resetCart = () => {
    body.innerHTML=''
    localStorage.removeItem('cart')
    modalCart.classList.remove('is-open')
}

  const renderItems = (data) => {
    body.innerHTML = ''
    data.forEach((cartItem) => {
      const cartElem = document.createElement('div')
      cartElem.classList.add('food-row')
      cartElem.innerHTML = `
                    <span class="food-name">${cartItem.name}</span>
					<strong class="food-price">${cartItem.price} ₽</strong>
					<div class="food-counter">
						<button class="counter-button btn-dec" data-index=${cartItem.id}>-</button>
						<span class="counter">${cartItem.count}</span>
						<button class="counter-button btn-inc" data-index=${cartItem.id}>+</button>
					</div>
    `
    //   cartElem
    //     .querySelector('.btn-dec')
    //     .addEventListener('click', () => {
    //         decrementCount(cartItem.id)
    //     })
    //   cartElem
    //     .querySelector('.btn-inc')
    //     .addEventListener('click', () => {
    //         incrementCount(cartItem.id)
    //     })
      body.append(cartElem)
    })
  }


//делегирование событий
// https://jsonplaceholder.typicode.com/posts

body.addEventListener('click', (e) => {
e.preventDefault()
if (e.target.classList.contains('btn-inc')) {
    incrementCount(e.target.dataset.index)
} else if (e.target.classList.contains('btn-dec')){
    decrementCount(e.target.dataset.index)

}
})

buttonSend.addEventListener('click', () =>{
    const cartArray = localStorage.getItem('cart')
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: cartArray
    }).then(response => {
        if (response.ok){
            // console.log('ok')
            resetCart()
        }
    }).catch(e => {
        console.error(e)
    })
})

  buttonCart.addEventListener('click', () => {
    if (localStorage.getItem('cart')) {
      renderItems(JSON.parse(localStorage.getItem('cart')))
    }

    modalCart.classList.add('is-open')
  })
  buttonClose.addEventListener('click', () => {
    modalCart.classList.remove('is-open')
  })
}
export default cart
