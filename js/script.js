// menu ----
const menuWrappers = document.querySelectorAll('.menu-item__wrapper')
const menuItem = document.querySelector('.menu-item')

if (menuWrappers.length > 0) {
  for(let i = 0; i<menuWrappers.length; i++) {
    const menuWrapper = menuWrappers[i]
    menuWrapper.addEventListener('click', function (e){
      menuWrapper.parentElement.classList.toggle('menu-item_active')
    })
  }
}

// flip_card ----

const cards = document.querySelectorAll('.card')

for (let i = 0; i<cards.length; i++) {
  const card=cards[i]
  const buttons = document.querySelectorAll('.card__link_front')
  const button = buttons[i]
  const close_buttons = document.querySelectorAll('.card__link_back')
  const close_button = close_buttons[i]
  const close_icons = document.querySelectorAll('.back_icon')
  const close_icon = close_icons[i]
  
  button.addEventListener('click', () => card.classList.add('flip'))
  close_icon.addEventListener('click', () => card.classList.remove('flip'))
  close_button.addEventListener('click', () => card.classList.remove('flip'))
}

// loadmore ----

const loadmore = document.querySelector('.load_more')
let currentItems = 3

loadmore.addEventListener('click', (e) => {
  const elementList = [...document.querySelectorAll('.card')]
  e.target.classList.add('.show_loader')
  for(let i=currentItems; i<currentItems + 3; i++) {
    setTimeout(
      function() {
        e.target.classList.remove('.show_loader')
        if(elementList[i]) {
          elementList[i].style.display = 'flex'
        }
      }, 1000
    )
  }
  currentItems +=3

  if (currentItems >= elementList.length) {
    e.target.classList.add('loaded')
  }
})

// mobile-menu ----

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu')
  const mobile_menu = document.querySelector('.mobile-menu')
  const menu_close = document.querySelector('.menu__close')

  mobile_menu.addEventListener('click', () => {
    menu.classList.add('menu_active');
  })

  menu_close.addEventListener('click', () => {
    menu.classList.remove('menu_active');
  })
})
