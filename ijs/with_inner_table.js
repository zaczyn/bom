const table = {
  'first': 'https://mail.ru',
  'second': 'https://google.com',
}

window.addEventListener('load', function () {
  let key = window.location.search.split('=')[1]
  redic = table[key]
  window.location.replace(redic)
})
