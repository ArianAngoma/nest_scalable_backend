import './style.css'

import {name, age} from './bases/01-types'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Soy ${name}, tengo ${age} años :D</h1>
  <span>Revisar la consola de Typescript</span>
`
