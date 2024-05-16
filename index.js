search = document.querySelector('#search-button');
result = document.querySelector('.right-box');


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

search.addEventListener('click', () => {
    result.innerHTML += `
    <div id="result">
    <span id="trip">Paris > Lyon</span>
    <span id="time">16:23</span>
    <span id="price">126€</span>
    <button id="book-button">Book</button>
    </div>

    <div id="result">
    <span id="trip">Paris > Lyon</span>
    <span id="time">16:23</span>
    <span id="price">126€</span>
    <button id="book-button">Book</button>
    </div>

    <div id="result">
    <span id="trip">Paris > Lyon</span>
    <span id="time">16:23</span>
    <span id="price">126€</span>
    <button id="book-button">Book</button>
    </div>

    <div id="result">
    <span id="trip">Paris > Lyon</span>
    <span id="time">16:23</span>
    <span id="price">126€</span>
    <button id="book-button">Book</button>
    </div>

    <div id="result">
    <span id="trip">Paris > Lyon</span>
    <span id="time">16:23</span>
    <span id="price">126€</span>
    <button id="book-button">Book</button>
    </div>

    
    `
    })


