import food from './asset/food.png'

function homeComponent() {
    const main = document.querySelector('main')
    main.textContent = ''
    const home = document.createElement('div')
    home.classList.add('home-content')
    const homeContent = 
    `
    <div class="home-text">
        <div>
            <span>Italian </span>
            <span class="text-orange">Delightfulness,</span>
        </div>
        <div>
            <span class="text-orange">Authentic </span>
            <span>Flavour</span>
        </div>
        <div class="order-btn">
            <button>Order Now</button>
        </div>
    </div>
    <div class="home-img">
        <img src="${food}">
    </div>
    `
    home.insertAdjacentHTML('afterbegin', homeContent)
    main.appendChild(home)
}

export { homeComponent }
