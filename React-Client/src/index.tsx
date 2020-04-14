import * as React from 'react'
import * as ReactDom from 'react-dom'

import { Hello } from './hello'

ReactDom.render(
    <Hello compiler="Typescript" framework="React" />,
    document.getElementById('App')
)