import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function myApp() {
  return (
    <div>
      <h2>Learn React</h2>
    </div>
  )
}

/*
const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
*/

const anotherElement = (
  <a href="https://google.com">click me to visit google</a>
)


const anotherUser = "Sumona"
const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me to visit goolge',
  anotherUser
)


createRoot(document.getElementById('root')).render(

  ReactElement

)
