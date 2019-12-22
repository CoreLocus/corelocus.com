/* Page loading animation */
var animation = bodymovin.loadAnimation({
  container: document.getElementById('loader'),
    /* Note: Paths are handled at the page level. This is why the path references the parent assets folder */
  path: 'assets/js/vectors/loader.json',
  renderer: 'svg',
  loop: true,
  autoplay: true
})