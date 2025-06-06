import './scss/main.scss'
import CircleType from 'circletype'
import 'iconify-icon'

const title = document.querySelector('.title')
const logo = document.querySelector('.logo')

let circleType = new CircleType(title)

window.addEventListener('resize', () => {
  adjustTitle({
    title,
    circleType
  })
})

const adjustTitle = ({ title, circleType }) => {
  title.style.transform = '';

  circleType.destroy()

  circleType = new CircleType(title)

  circleType.radius(title.clientWidth / 2)

  title.style.transform = 'rotate(-45deg)';
}

window.dispatchEvent(new Event('resize'));
