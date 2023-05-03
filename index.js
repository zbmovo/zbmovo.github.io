const tl = anime.timeline({
  autoplay: false
})

tl
  .add({
    targets: '.wrap .item',
    translateZ: [-500, 1000],
    opacity: 0,
    duration: 1000,
    easing: 'easeOutSine',
  })
  .add({
    targets: '.box div',
    translateX: anime.stagger(100, { grid: [7, 2], start: 0, from: 'center', axis: 'x' }),
    translateY: anime.stagger(100, { grid: [7, 2], start: 0, from: 'center', axis: 'y' }),
    opacity: 1,
    duration: 2000,
    delay: anime.stagger(300, { grid: [7, 2], from: 'center', direction: 'reverse' }),
    easing: 'easeOutSine',
    autoplay: false,
  }, 300)


let index = 0
document.addEventListener('wheel', evt => {
  const step = 4;
  const direction = evt.deltaY > 0 ? 1 : -1
  index += step * direction

  if (index <= 100 && index > 0) {
    tl.seek(tl.duration * (index / 100))
  } else {
    index = direction > 0 ? 100 : 0
  }
})