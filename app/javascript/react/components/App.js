import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import PostIndexContainer from './PostIndexContainer'
import PostShowContainer from './PostShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={PostIndexContainer} />
        <Route exact path='/post' component={PostIndexContainer} />
        <Route exact path='/post/:id' component={PostShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
