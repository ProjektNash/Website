// Mobile nav toggle
const burger = document.querySelector('.nav-burger')
const navLinks = document.querySelector('.nav-links')

if (burger) {
  burger.addEventListener('click', () => navLinks.classList.toggle('open'))
}

// Close on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks?.classList.remove('open'))
})

// Active nav highlight
const currentPage = window.location.pathname.split('/').pop() || 'index.html'
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href')
  if (href === currentPage || (currentPage === '' && href === '/')) {
    a.classList.add('active')
  }
})
