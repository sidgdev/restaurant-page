import foodlist from './food.json'

function menuComponent() {
    const main = document.querySelector('main')
    main.textContent = ''
    const menu = document.createElement('div')
    menu.classList.add('menu-content')
    const title = document.createElement('h2')
    title.classList.add('menu-title')
    title.textContent = 'Our Offerings'
    menu.appendChild(title)
    for (const item of foodlist) {
        const fooditem = foodComponent(item.name, item.path)
        menu.appendChild(fooditem)
    }
    main.appendChild(menu)
}

function foodComponent (name, path) {
    const food = document.createElement('div')
    food.classList.add('food-item')
    const img = new Image();
    img.src = require(`${path}`);
    food.appendChild(img)
    const itemname = document.createElement('p')
    itemname.textContent = name
    food.appendChild(itemname)
    return food
}

export { menuComponent }
