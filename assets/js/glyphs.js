/* Page loading animation */
var animation = bodymovin.loadAnimation({
  container: document.getElementById('loader'),
  path: 'assets/js/vectors/loader.json',
  renderer: 'svg',
  loop: true,
  autoplay: true
})