import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ReactDOM from 'react-dom'

import PostIndexContainer from './PostIndexContainer'
import PostShowContainer from './PostShowContainer'
import NewPostContainer from './NewPostContainer'
import Calendar from './Calendar'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Calendar} />
        <Route exact path='/posts' component={PostIndexContainer} />
        <Route exact path='/posts/:id' component={PostShowContainer} />
        <Route exact path='posts/new' component={NewPostContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
