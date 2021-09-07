import { type } from '../index'
const isNumber = type('Number')
const isElement = type('Element')

export const scroll = (target: Element | number) => {
  if (!(isNumber(target) || isElement(target))) {
    throw new Error('Params required is HTMLElement or number')
  }
  const position = isElement(target) ? (target as HTMLElement).getBoundingClientRect().top : target
  let scrollTop = document.documentElement.scrollTop
  const slep = 20
  const isUp = scrollTop > position
  const toUp = () => {
    scrollTop -= slep
    window.scrollTo(0, scrollTop)
    if (scrollTop > position) requestAnimationFrame(toUp)
  }
  const toDown = () => {
    scrollTop += slep
    window.scrollTo(0, scrollTop)
    if (scrollTop < position) requestAnimationFrame(toDown)
  }
  isUp ? toUp() : toDown()
}