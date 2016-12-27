import React from 'react'
import ReactDOM from 'react-dom'

import {Router, Route, IndexRoute, browserHistory} from 'react-router'

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <Router history={browserHistory}>
        </Router>
        )
    }
    
}

ReactDOM.render(<App />, document.getElementById('app'))
