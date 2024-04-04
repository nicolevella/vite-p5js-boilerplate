export const sketch = (p) => {

  p.preload = () => {
    // console.log('loaded')
  }

  p.setup = () => {
    // console.log('setup')
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {
    // console.log('draw')
    p.background(127)
    p.rectMode(p.CENTER)
    p.rect(p.width/2,p.height/2,100,100)
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

}