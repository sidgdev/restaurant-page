import burger from './asset/burger.svg'
import drink from './asset/drink.svg'

function navbarComponent() {
    const navbar = document.createElement('nav')
    const navContent = 
        `
        <div>
            <img src="${burger}">
            <img src="${drink}">
        </div>
        <div>
            <a href="" id="home">HOME</a>
        </div>
        <div>
            <a href="" id="menu">MENU</a>
        </div>
        <div>
            <a href="" id="reachus">REACH US</a>
        </div>
        `
    navbar.insertAdjacentHTML('afterbegin', navContent)
    return navbar
}

export { navbarComponent }
