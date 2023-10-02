import location from './asset/location.svg'
import email from './asset/email.svg'
import phone from './asset/phone.svg'

function reachusComponent() {
    const main = document.querySelector('main')
    main.textContent = ''
    const reachus = document.createElement('div')
    reachus.classList.add('reachus-content')
    const reachusContent = 
    `
    <div class="location">
        <img src="${location}">
        <p>600 N Atlantic Blvd, Alhambra, California 91801</p>
    </div>
    <div class="email">
        <img src="${email}">
        <p>contactus@italianartistry.com</p>
    </div>
    <div class="phone">
        <img src="${phone}">
        <p>(626) 293-8155</p>
    </div>
    `
    reachus.insertAdjacentHTML('afterbegin', reachusContent)
    main.appendChild(reachus)
}

export { reachusComponent }
