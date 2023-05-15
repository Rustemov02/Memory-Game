import giza from '../images/giza.png'
import pharaoh from '../images/pharaoh.png'
import pyramids from '../images/pyramids.png'
import hagia from '../images/hagia.png'
import bus from '../images/bus.png'
import tower from '../images/tower.png'
import man from '../images/man.png'
import groceries from '../images/groceries.png'


const level_2_images = [
    { id: 1, img: giza, stat: '' },
    { id: 1, img: giza, stat: '' },
    { id: 2, img: pharaoh, stat: '' },
    { id: 2, img: pharaoh, stat: '' },
    { id: 3, img: pyramids, stat: '' },
    { id: 3, img: pyramids, stat: '' },
    { id: 4, img: hagia, stat: '' },
    { id: 4, img: hagia, stat: '' },
    { id: 5, img: bus, stat: '' },
    { id: 5, img: bus, stat: '' },
    { id: 6, img: tower, stat: '' },
    { id: 6, img: tower, stat: '' },
    { id: 7, img: man, stat: '' },
    { id: 7, img: man, stat: '' },
    { id: 8, img: groceries, stat: '' },
    { id: 8, img: groceries, stat: '' },
].sort(()=>Math.random() - 0.5)


export default level_2_images