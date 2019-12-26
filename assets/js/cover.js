/* Cover Animation */
var animation = bodymovin.loadAnimation({
  container: document.getElementById('coveranim'),
    /* Note: Paths are handled at the page level. This is why the path references the parent assets folder */
  path: 'assets/js/vectors/homepage-cover.json',
  renderer: 'svg',
  loop: true,
  autoplay: true
})