import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import PostsIndexContainer from './PostsIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={PostsIndexContainer} />
        <Route exact path='/index' component={PostsIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
