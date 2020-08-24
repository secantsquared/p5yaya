import p5 from 'p5'
import './index.css'

new p5(s => {
  // Define initial incrementers
  let number = 0
  let scale = 0
  let tick = 0

  // This function runs one time per page reload
  s.setup = () => {
    const canvas = s.createCanvas(s.windowWidth, s.windowHeight)
    canvas.style('position', 'absolute')
    canvas.style('top', 0), canvas.style('left', 0)
    s.background(0)
  }

  // This function runs over and over, but can be paused/stopped
  s.draw = () => {
    // Various stroke and fill styles can be modified for different looks
    s.stroke('white')
    tick % 2 === 0 ? s.fill('black') : s.fill('cyan')

    // Define parameters for circle sketch based on initial incrementers
    let angle = 2 * number
    let x = scale * Math.sin(angle) + s.width / 2
    let y = scale * Math.cos(angle) + s.height / 2

    s.circle(x, y, tick)

    // Uses number to cease this function from being invoked indefinitely
    if (number < 1000) {
      // You can change these numbers for different outcomes
      number += 1
      tick += 1
      scale += 5
    }
  }
})
