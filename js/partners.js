const renderItems = (data) => {
  data.forEach(item => console.log(item))
}

fetch('https://food-service-78c40-default-rtdb.firebaseio.com/db/partners.json')
  .then((response) => response.json())
  .then((data) => renderItems(data))
  .catch((e) => console.log(e))
