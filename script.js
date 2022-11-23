const menu = document.querySelector('.menu')
const links = document.querySelector('.links')
const check = document.querySelector('#check')

const handleChange = (e) => {
  if (check.checked === true) {
    links.classList.add('opacity-100')
    links.classList.remove('opacity-0')
  } else {
    links.classList.remove('opacity-100')
    links.classList.add('opacity-0')
  }
}
