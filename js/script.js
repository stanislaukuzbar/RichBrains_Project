let menuArrows = document.querySelectorAll('.menu-item__icon')
let menuItem = document.querySelector('.menu-item')
if (menuArrows.length > 0) {
  for(let i = 0; i<menuArrows.length; i++) {
    const menuArrow = menuArrows[i]
    menuArrow.addEventListener('click', function (e){
      menuArrow.parentElement.parentElement.classList.toggle('menu-item_active')
    })
  }
}

const card = document.querySelector('.catalog-item_inner')
card.addEventListener('click', function(){
  card.classList.toggle('is-flipped')
})