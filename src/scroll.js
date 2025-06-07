class Scroll{
    constructor(){
        this.nav = document.querySelector('nav')
    }
  scroll(){
    window.addEventListener('scroll', () => 
  window.scrollY > 70 ? this.nav.classList.add('transparent') : this.nav.classList.remove('transparent'));
  }
}

const scroll = new Scroll();
export default scroll;