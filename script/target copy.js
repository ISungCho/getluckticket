let x = 0
let y = 0
let event

const targetContainer = document.getElementById('myTarget')
const mouseImg = document.getElementById('targetImg')

targetContainer.addEventListener('mouseenter', () => {
  const rect = mouseImg.getBoundingClientRect()
  const rectHalfWidth = rect.width / 2
  const rectHalfHeight = rect.height / 2
  
  const drawImage = (x, y) => {
    mouseImg.style.transform = `translate(${x - rectHalfWidth}px, ${y - rectHalfHeight}px)`
  }

  event = targetContainer.addEventListener('mousemove', (e) => {
    const container = targetContainer.getBoundingClientRect()
    x = e.clientX - container.left
    y = e.clientY - container.top
  
    drawImage(x, y)
  })
})

targetContainer.addEventListener('mouseleave', () => {
  if(event){
    targetContainer.removeEventListener('mousemove')
  }
})
