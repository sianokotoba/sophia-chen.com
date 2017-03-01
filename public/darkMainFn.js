var video = $('video')[0];
console.log(video)

video.pause();

window.onscroll = function(){
    video.pause();
};

var vidCurTime;
function scrollVid() {
  window.addEventListener('DOMMouseScroll', scrolling());
  window.addEventListener('mousewheel', scrolling());

  function scrolling() {
    return function(e) {
      e.preventDefault();
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      if (delta < 0) {
        vidCurTime = 0.1;
      } else {
        vidCurTime = -0.1;
      }
      video.currentTime += vidCurTime;
    }
  }
}

$(window).scroll(scrollVid);
$('video').on('loadedmetadata', scrollVid);
