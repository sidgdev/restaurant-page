import './style.css'
import { navbarComponent } from './components/navbarComponent/navbar'
import { homeComponent } from './components/homeComponent/home'
import { menuComponent } from './components/menuComponent/menu'
import { reachusComponent } from './components/reachusComponent/reachus'

const page = (function () {
    function renderIndex() {
        const content = document.createElement('div')
        const navbar = navbarComponent()
        const main = document.createElement('main')
        content.appendChild(navbar)
        content.appendChild(main)
        document.body.appendChild(content)
    }

    function renderHome() {
        homeComponent()
    }

    function renderMenu() {
        menuComponent()
    }

    function renderReachus() {
        reachusComponent()
    }

    function listenLinks() {
        const home = document.querySelector('#home')
        const menu = document.querySelector('#menu')
        const reachus = document.querySelector('#reachus')

        home.addEventListener('click', (e) => {
            e.preventDefault()
            renderHome()
        })

        menu.addEventListener('click', (e) => {
            e.preventDefault()
            renderMenu()
        })
        reachus.addEventListener('click', (e) => {
            e.preventDefault()
            renderReachus()
        })
    }

    function render() {
        renderIndex()
        renderHome()
        listenLinks()
    }
    return { render }
})()

page.render()
