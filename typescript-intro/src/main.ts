import './style.css'

// import {name, age} from './bases/01-types'
import {bulbasaur} from "./bases/02-objects";

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello ${bulbasaur.name}</h1>
  <span>Revisar la consola de Typescript</span>
`

