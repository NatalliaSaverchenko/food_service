/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0osMERBQUk7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Rfc2VydmljZS8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGggZnJvbSBcIi4vbW9kdWxlcy9hdXRoXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21vZHVsZXMvbWVudVwiO1xyXG5cclxuYXV0aCgpXHJcbm1lbnUoKVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n  const buttonAuth = document.querySelector('.button-auth')\r\nconst modalAuth = document.querySelector('.modal-auth')\r\nconst buttonOut = document.querySelector('.button-out')\r\n\r\nconst userName = document.querySelector('.user-name')\r\n\r\nconst closeAuth = document.querySelector('.close-auth')\r\nconst logInForm = document.getElementById('logInForm')\r\nconst inputLogin = document.getElementById('login')\r\nconst inputPassword = document.getElementById('password')\r\n\r\n\r\nconst login = (user) => {\r\n  buttonAuth.style.display = 'none'\r\n  userName.style.display = 'flex'\r\n  buttonOut.style.display = 'flex'\r\n\r\n  if (!user.login) {\r\n    alert('Введите логин!')\r\n    logout()\r\n    buttonOut.style.display = 'none'\r\n\r\n  } else {\r\n    userName.textContent = user.login\r\n    modalAuth.style.display = 'none'\r\n  }\r\n}\r\nconst logout = () => {\r\n  buttonOut.style.display = 'none'\r\n  buttonAuth.style.display = 'flex'\r\n  userName.style.display = 'none'\r\n  userName.textContent = ''\r\n  localStorage.removeItem('user')\r\n}\r\n\r\nbuttonAuth.addEventListener('click', () => {\r\n  modalAuth.style.display = 'flex'\r\n})\r\ncloseAuth.addEventListener('click', () => {\r\n  modalAuth.style.display = 'none'\r\n})\r\nlogInForm.addEventListener('submit', (event) => {\r\n  event.preventDefault()\r\n  const user = {\r\n    login: inputLogin.value,\r\n    password: inputPassword.value,\r\n  }\r\n  localStorage.setItem('user', JSON.stringify(user))\r\n  login(user)\r\n})\r\nbuttonOut.addEventListener('click', () => {\r\n  logout()\r\n})\r\nif (localStorage.getItem('user')) {\r\n  login(JSON.parse(localStorage.getItem('user')))\r\n}\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZF9zZXJ2aWNlLy4vc3JjL21vZHVsZXMvYXV0aC5qcz9lN2IxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tYXV0aCcpXHJcbmNvbnN0IG1vZGFsQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hdXRoJylcclxuY29uc3QgYnV0dG9uT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1vdXQnKVxyXG5cclxuY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1uYW1lJylcclxuXHJcbmNvbnN0IGNsb3NlQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1hdXRoJylcclxuY29uc3QgbG9nSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ0luRm9ybScpXHJcbmNvbnN0IGlucHV0TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKVxyXG5jb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJylcclxuXHJcblxyXG5jb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcbiAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gIGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcblxyXG4gIGlmICghdXNlci5sb2dpbikge1xyXG4gICAgYWxlcnQoJ9CS0LLQtdC00LjRgtC1INC70L7Qs9C40L0hJylcclxuICAgIGxvZ291dCgpXHJcbiAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSB1c2VyLmxvZ2luXHJcbiAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gIH1cclxufVxyXG5jb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICBidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgdXNlck5hbWUudGV4dENvbnRlbnQgPSAnJ1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJylcclxufVxyXG5cclxuYnV0dG9uQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG59KVxyXG5jbG9zZUF1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxufSlcclxubG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBjb25zdCB1c2VyID0ge1xyXG4gICAgbG9naW46IGlucHV0TG9naW4udmFsdWUsXHJcbiAgICBwYXNzd29yZDogaW5wdXRQYXNzd29yZC52YWx1ZSxcclxuICB9XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcclxuICBsb2dpbih1c2VyKVxyXG59KVxyXG5idXR0b25PdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbG9nb3V0KClcclxufSlcclxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcclxuICBsb2dpbihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpKVxyXG59XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGF1dGgiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const cardsMenu = document.querySelector('.cards-menu')\r\n  // console.log(cardsMenu)\r\n  // const changeTitle = (restaurant) => {\r\n  //   const restaurantTitle = document.querySelector('.restaurant-title')\r\n  //   restaurantTitle.textContent=restaurant.name\r\n  // }\r\n  \r\n  const changeHeading = (restaurant) => {\r\n    const reustaurantHeading = document.querySelector('.section-heading')\r\n    reustaurantHeading.innerHTML = `\t\r\n    <h2 class=\"section-title restaurant-title\">${restaurant.name} </h2>\r\n    <div class=\"card-info\">\r\n      <div class=\"rating\">\r\n        ${restaurant.stars}\r\n      </div>\r\n      <div class=\"price\">От ${restaurant.price} ₽</div>\r\n      <div class=\"category\">${restaurant.kitchen}</div>\r\n    </div>`\r\n  \r\n  \r\n  }\r\n  \r\n  const renderItems = (data) => {\r\n    data.forEach(({description, id, image, name, price}) => {\r\n      const card = document.createElement('div')\r\n      card.classList.add('card')\r\n  \r\n      card.innerHTML=\r\n      `\r\n      <img src=${image} alt=${name} class=\"card-image\" />\r\n              <div class=\"card-text\">\r\n                <div class=\"card-heading\">\r\n                  <h3 class=\"card-title card-title-reg\">${name}</h3>\r\n                </div>\r\n                <div class=\"card-info\">\r\n                  <div class=\"ingredients\">${description}</div>\r\n                </div>\r\n                <div class=\"card-buttons\">\r\n                  <button class=\"button button-primary button-add-cart\">\r\n                    <span class=\"button-card-text\">В корзину</span>\r\n                    <span class=\"button-cart-svg\"></span>\r\n                  </button>\r\n                  <strong class=\"card-price-bold\">${price} ₽</strong>\r\n                </div>\r\n              </div>\r\n      `\r\n      cardsMenu.append(card)  })\r\n      // console.log(card)})\r\n      \r\n  }\r\n  if (localStorage.getItem('restaurant')){\r\n    const reustaurant = JSON.parse(localStorage.getItem('restaurant'))\r\n  \r\n    changeHeading(reustaurant)\r\n  \r\n    fetch(`https://food-service-78c40-default-rtdb.firebaseio.com/db/${reustaurant.products}`)\r\n    .then((response) => response.json())\r\n    .then((data) => renderItems(data))\r\n    .catch((e) => console.log(e))\r\n  } else {\r\n    window.location.href='/'\r\n  }\r\n  \r\n  \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRCw4QkFBOEIsbUJBQW1CO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQ0FBb0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPLE1BQU0sTUFBTTtBQUNwQztBQUNBO0FBQ0EsMERBQTBELEtBQUs7QUFDL0Q7QUFDQTtBQUNBLDZDQUE2QyxZQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxPQUFPO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQiwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUscUJBQXFCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kX3NlcnZpY2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzPzJmYWQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVudSA9ICgpID0+IHtcclxuICBjb25zdCBjYXJkc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtbWVudScpXHJcbiAgLy8gY29uc29sZS5sb2coY2FyZHNNZW51KVxyXG4gIC8vIGNvbnN0IGNoYW5nZVRpdGxlID0gKHJlc3RhdXJhbnQpID0+IHtcclxuICAvLyAgIGNvbnN0IHJlc3RhdXJhbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXVyYW50LXRpdGxlJylcclxuICAvLyAgIHJlc3RhdXJhbnRUaXRsZS50ZXh0Q29udGVudD1yZXN0YXVyYW50Lm5hbWVcclxuICAvLyB9XHJcbiAgXHJcbiAgY29uc3QgY2hhbmdlSGVhZGluZyA9IChyZXN0YXVyYW50KSA9PiB7XHJcbiAgICBjb25zdCByZXVzdGF1cmFudEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1oZWFkaW5nJylcclxuICAgIHJldXN0YXVyYW50SGVhZGluZy5pbm5lckhUTUwgPSBgXHRcclxuICAgIDxoMiBjbGFzcz1cInNlY3Rpb24tdGl0bGUgcmVzdGF1cmFudC10aXRsZVwiPiR7cmVzdGF1cmFudC5uYW1lfSA8L2gyPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nXCI+XHJcbiAgICAgICAgJHtyZXN0YXVyYW50LnN0YXJzfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByaWNlXCI+0J7RgiAke3Jlc3RhdXJhbnQucHJpY2V9IOKCvTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIj4ke3Jlc3RhdXJhbnQua2l0Y2hlbn08L2Rpdj5cclxuICAgIDwvZGl2PmBcclxuICBcclxuICBcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgcmVuZGVySXRlbXMgPSAoZGF0YSkgPT4ge1xyXG4gICAgZGF0YS5mb3JFYWNoKCh7ZGVzY3JpcHRpb24sIGlkLCBpbWFnZSwgbmFtZSwgcHJpY2V9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxyXG4gIFxyXG4gICAgICBjYXJkLmlubmVySFRNTD1cclxuICAgICAgYFxyXG4gICAgICA8aW1nIHNyYz0ke2ltYWdlfSBhbHQ9JHtuYW1lfSBjbGFzcz1cImNhcmQtaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLXJlZ1wiPiR7bmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmdyZWRpZW50c1wiPiR7ZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeSBidXR0b24tYWRkLWNhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvbi1jYXJkLXRleHRcIj7QkiDQutC+0YDQt9C40L3Rgzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvbi1jYXJ0LXN2Z1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJjYXJkLXByaWNlLWJvbGRcIj4ke3ByaWNlfSDigr08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBgXHJcbiAgICAgIGNhcmRzTWVudS5hcHBlbmQoY2FyZCkgIH0pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNhcmQpfSlcclxuICAgICAgXHJcbiAgfVxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVzdGF1cmFudCcpKXtcclxuICAgIGNvbnN0IHJldXN0YXVyYW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVzdGF1cmFudCcpKVxyXG4gIFxyXG4gICAgY2hhbmdlSGVhZGluZyhyZXVzdGF1cmFudClcclxuICBcclxuICAgIGZldGNoKGBodHRwczovL2Zvb2Qtc2VydmljZS03OGM0MC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vZGIvJHtyZXVzdGF1cmFudC5wcm9kdWN0c31gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4gcmVuZGVySXRlbXMoZGF0YSkpXHJcbiAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKVxyXG4gIH0gZWxzZSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZj0nLydcclxuICB9XHJcbiAgXHJcbiAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbWVudSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;