var animation = bodymovin.loadAnimation({
  container: document.getElementById('loader'),
  path: 'data.json',
  renderer: 'svg',
  loop: true,
  autoplay: true
})