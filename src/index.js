import p5 from 'p5'
import './index.css'

new p5(s => {
  let number = 0
  let scale = 0
  let tick = 0

  s.setup = () => {
    const canvas = s.createCanvas(s.windowWidth, s.windowHeight)
    canvas.style('position', 'absolute')
    canvas.style('top', 0), canvas.style('left', 0)
    s.background(0)
  }
  s.draw = () => {
    tick % 2 === 0 ? s.fill('black') : s.fill('cyan')
    s.stroke('white')
    let angle = 2 * number
    let x = scale * Math.sin(angle) + s.width / 2
    let y = scale * Math.cos(angle) + s.height / 2
    s.circle(x, y, tick)
    if (number < 1000) {
      number += 1
      tick += 1
      scale += 5
    }
  }
})
