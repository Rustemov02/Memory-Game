import html from '../images/html-5.png'
import js from '../images/js.png'
import node from '../images/node-js.png'
import sass from '../images/sass.png'
import java from '../images/java.png'
import css from '../images/css-3.png'
 

const level_1_images = [
    { id: 1, img: css, stat: '' },
    { id: 1, img: css, stat: '' },
    { id: 2, img: html, stat: '' },
    { id: 2, img: html, stat: '' },
    { id: 3, img: js, stat: '' },
    { id: 3, img: js, stat: '' },
    { id: 4, img: node, stat: '' },
    { id: 4, img: node, stat: '' },
    { id: 5, img: sass, stat: '' },
    { id: 5, img: sass, stat: '' },
    { id: 6, img: java, stat: '' },
    { id: 6, img: java, stat: '' },
].sort(() => Math.random() - 0.5)

export default level_1_images
