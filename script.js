search = document.querySelector('#search-button');
result = document.querySelector('.right-box');
resultAll = document.querySelectorAll('.right-box');
cart = document.querySelector('.cart-container');
cartmenu = document.querySelector('#cart-menu');


search.addEventListener('click', () => {
    const departureInput = document.querySelector('#departure-input');
    const arrivalInput = document.querySelector('#arrival-input');
    const calendarInput = document.querySelector('#calendar-input');


    // Récupérer les valeurs des champs de saisie
    const departure = departureInput.value;
    const arrival = arrivalInput.value;
    const date = calendarInput.value;

    // http://localhost:3000/trips?departure=Paris&arrival=Lyon&date=2024-05-15
    // Effectuer une requête  avec fetch

    fetch(`http://localhost:3000/trips?departure=${departure}&arrival=${arrival}&date=${date}`)
        .then(response => response.json())
        .then(data => {
            // Suppression contenu css pour ajout traitement données
            resultAll.forEach(item => {
                while (item.firstChild) {
                    item.removeChild(item.firstChild);
                }
            });

            // Traiter les données de réponse
            if (data) {
                console.log(data);
                data.forEach(trip => {
                    // Créer des éléments HTML pour afficher chaque trajet
                    result.innerHTML += `
                    <div id="result">
                    <span id="trip">${departure} > ${arrival}</span>
                    <span id="time">16:23</span>
                    <span id="price">126€</span>
                    <button id="book-button">Book</button>
                    </div>`;
                });
            } else {
                result.innerHTML = `
                    <div id="trip-notfound">
                    <div>
                    <img id="notfound-image" src="images/notfound.png">
                    </div> 
                    <hr id="green-line">
                    <p>No trip found</p>
                    </div>`;
            }
        })

});






// notrip found result

// search.addEventListener('click', () => {
// result.innerHTML = `
// <div>
// <img id="notfound-image" src="images/notfound.png">
// </div>
// <hr id="green-line">
// <p id="notrip-phrase">No trip found.</p>
// `
// })

// trips found and list

// search.addEventListener('click', () => {
//     result.innerHTML = `
//     <div id="result">
//     <span id="trip">Paris > Lyon</span>
//     <span id="time">16:23</span>
//     <span id="price">126€</span>
//     <button id="book-button">Book</button>
//     </div>

//     <div id="result">
//     <span id="trip">Paris > Lyon</span>
//     <span id="time">16:23</span>
//     <span id="price">126€</span>
//     <button id="book-button">Book</button>
//     </div>

//     <div id="result">
//     <span id="trip">Paris > Lyon</span>
//     <span id="time">16:23</span>
//     <span id="price">126€</span>
//     <button id="book-button">Book</button>
//     </div>

//     <div id="result">
//     <span id="trip">Paris > Lyon</span>
//     <span id="time">16:23</span>
//     <span id="price">126€</span>
//     <button id="book-button">Book</button>
//     </div>

//     <div id="result">
//     <span id="trip">Paris > Lyon</span>
//     <span id="time">16:23</span>
//     <span id="price">126€</span>
//     <button id="book-button">Book</button>
//     </div>

//     <div id="result">
//     <span id="trip">Paris > Lyon</span>
//     <span id="time">16:23</span>
//     <span id="price">126€</span>
//     <button id="book-button">Book</button>
//     </div>

//     <div id="result">
//     <span id="trip">Paris > Lyon</span>
//     <span id="time">16:23</span>
//     <span id="price">126€</span>
//     <button id="book-button">Book</button>
//     </div>

//     <div id="result">
//     <span id="trip">Paris > Lyon</span>
//     <span id="time">16:23</span>
//     <span id="price">126€</span>
//     <button id="book-button">Book</button>
//     </div>

//     <div id="result">
//     <span id="trip">Paris > Lyon</span>
//     <span id="time">16:23</span>
//     <span id="price">126€</span>
//     <button id="book-button">Book</button>
//     </div>

//     `
//     })



// CART

// cart.addEventListener('click', () => {
// cart.innerHTML = `
//    <div id="cart-result">
//     <span id="trip">Paris > Lyon</span>
//     <span id="time">16:23</span>
//     <span id="price">126€</span>
//     <button id="cart-delete">X</button>
//     </div>

// // `
// })

// cart.addEventListener('click', () => {
// cart.innerHTML = `
// <p>My cart</p>
// <div id="cart-result">
// <span id="trip">Paris > Lyon</span>
// <span id="time">16:23</span>
// <span id="price">126€</span>
// <button id="cart-delete">X</button>
// </div>

// <div id="total-container">
// <div id="total-content">
// <span>Total: 544€ </span>
// <button id="purchase-button">Purchase</button>
// </div>
// </div>
// `})