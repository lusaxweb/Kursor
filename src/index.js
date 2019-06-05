import './styles/index.styl';
import { setColor } from './utils'
var key = 1

export default class kursor {

  constructor(props = {}) {
    let _props = {
      type: 1,
      ...props
    }

    this.props = _props
    this.key = key === 1 ? '' : key
    key++

    this.render()

    this.hovers()

    this.mousemove()

    this.down()
  }

  color(colorx) {
    setColor('color', colorx, this.kursor)
    setColor('color', colorx, this.kursorChild)
  }

  hidden(isHidden = true) {
    if (isHidden) {
      this.addClass('kursor--hidden')
      this.addClass('kursorChild--hidden', true)
    } else {
      this.removeClass('kursor--hidden')
      this.removeClass('kursorChild--hidden', true)
    }
  }

  createWrapper() {
    let wrapper = document.createElement('div')

    wrapper.setAttribute('id', 'kursorWrapper')
    document.querySelector(this.props.el).insertBefore(wrapper, document.querySelector(this.props.el).firstChild)
  }

  render() {
    if (this.mobileAndTabletcheck()) {
      return
    }
    this.createCursor('kursorChild')
    this.createCursor('kursor')

    if (this.props.hasOwnProperty('removeDefaultCursor')) {
      if (this.props.removeDefaultCursor) {
        document.body.classList.add('notCursor')
      }
    }

    if (this.props.hasOwnProperty('type')) {
      this.addClass(`kursor--${this.props.type}`)
    }
  }

  down() {
    document.addEventListener('mousedown', (e) => {
      this.addClass('kursor--down')
    })
    document.addEventListener('mouseup', (e) => {
      this.removeClass('kursor--down')
    })
  }

  mobileAndTabletcheck() {
    var check = false;

    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);

    return check;
  }

  mousemove() {
    let hasEl = this.props.hasOwnProperty('el')

    let el = window

    if (hasEl) {
      el = document.querySelector(this.props.el)
    }
    el.addEventListener('mousemove',(e) => {
      let cursor = document.querySelector('.kursor' + this.key)
      let cursorChild = document.querySelector('.kursorChild' + this.key)

      if (hasEl) {
        let notEl = e.target !== document.querySelector(this.props.el)
        let parentEl = e.target.closest(this.props.el)

        if (notEl) {

          cursor = parentEl.querySelector('.kursor' + this.key)
          cursorChild = parentEl.querySelector('.kursorChild' + this.key)

        } else {

          cursor = e.target.querySelector('.kursor' + this.key)
          cursorChild = e.target.querySelector('.kursorChild' + this.key)

        }

        cursor.style.left = `${notEl ? e.offsetX + e.target.offsetLeft : e.offsetX }px`
        cursor.style.top = `${notEl ? e.offsetY + e.target.offsetTop : e.offsetY }px`

        cursorChild.style.left = `${notEl ? e.offsetX + e.target.offsetLeft : e.offsetX }px`
        cursorChild.style.top = `${notEl ? e.offsetY + e.target.offsetTop : e.offsetY }px`

      } else {

        cursor.style.left = `${e.x}px`
        cursor.style.top = `${e.y}px`

        cursorChild.style.left = `${e.x}px`
        cursorChild.style.top = `${e.y}px`

      }

    })

    let doc = document

    if (hasEl) {
      doc = document.querySelector(this.props.el)
    }

    doc.addEventListener('mouseenter',(e) => {
      this.removeClass('kursor--hidden')
      this.removeClass('kursorChild--hidden', true)
    })

    doc.addEventListener('mouseleave',(e) => {
      this.addClass('kursor--hidden')
      this.addClass('kursorChild--hidden', true)
    })
  }

  hovers() {
    let hovers = document.querySelectorAll('.k-hover' + this.key)

    console.log(hovers)

    hovers.forEach((item) => {
      item.addEventListener('mouseenter',() => {
        this.addClass('--hover')
      })
      item.addEventListener('mouseleave', () => {
        this.removeClass('--hover')
      })
    })
  }

  createCursor(name) {
    this[name] = document.createElement('div')
    this[name].setAttribute('class', name)
    this[name].classList.add(name + this.key)
    this[name].setAttribute('style', '--k-color: 0,0,0')

    if (this.props.hasOwnProperty('el')) {
      this[name].classList.add(`${name}--hidden`)
      this[name].classList.add('kursor--absolute')
      document.querySelector(this.props.el).insertBefore(this[name], document.querySelector(this.props.el).firstChild)
    } else {
      document.body.insertBefore(this[name], document.body.firstChild)
    }

    if (this.props.hasOwnProperty('color')) {
      setColor('color', this.props.color, this[name])
    }
  }

  addClass(classx, child = false) {
    document.querySelector(child ? '.kursorChild' + this.key : '.kursor' + this.key).classList.add(classx)
  }
  removeClass(classx, child = false) {
    document.querySelector(child ? '.kursorChild' + this.key : '.kursor' + this.key).classList.remove(classx)
  }

  get name() {
    return this._name;
  }
}
