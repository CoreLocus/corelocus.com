/* Cover Animation */
var animation = bodymovin.loadAnimation({
  container: document.getElementById('coveranim'),
  path: 'assets/js/vectors/homepage-cover.json',
  renderer: 'svg',
  loop: true,
  autoplay: true
})