const headerMenu = document.querySelector('[data-js-header-menu]')
const burgerButton = document.querySelector('[data-js-header-burger-button]')

function activeBurgerButton() {
  burgerButton.addEventListener('click', (e) => {
    burgerButton.classList.toggle('is-active')
    headerMenu.classList.toggle('is-visible')
    document.documentElement.classList.toggle('is-lock')
  })
}

export default activeBurgerButton
