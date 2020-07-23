import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ReactDOM from 'react-dom'

import PostIndexContainer from './PostIndexContainer'
import PostShowContainer from './PostShowContainer'
import NewPostContainer from './NewPostContainer'
import UserShowContainer from './UserShowContainer'
import NewCommentContainer from './NewCommentContainer'
import UserSearchContainer from './UserSearchContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={PostIndexContainer} />
        <Route exact path='/posts' component={PostIndexContainer} />
        <Route exact path='/posts/new' component={NewPostContainer} />
        <Route exact path='/posts/:id' component={PostShowContainer} />
        <Route exact path='/users/:id' component={UserShowContainer} />
        <Route exact path='/posts/:id/comments/new' component={NewCommentContainer} />
        <Route exact path='/users/search' component={UserSearchContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
