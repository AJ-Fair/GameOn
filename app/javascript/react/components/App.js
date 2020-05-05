import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import PostIndexContainer from './PostIndexContainer'
import PostShowContainer from './PostShowContainer'
import NewPostContainer from './NewPostContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={PostIndexContainer} />
        <Route exact path='/posts' component={PostIndexContainer} />
        <Route exact path='/posts/:id' component={PostShowContainer} />
        <Route exact path='posts/new' component={NewPostContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
