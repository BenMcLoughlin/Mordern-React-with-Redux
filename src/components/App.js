import React from 'react'
import { BrowserRouter, Route} from "react-router-dom"
import StreamCreate from "./streams/StreamCreate"
import StreamEdit from "./streams/StreamEdit"
import StreamDelete from "./streams/StreamDelete"
import StreamList from "./streams/StreamList"
import StreamShow from "./streams/StreamShow"
import Header from "./Header"

const App = () => {
    return (
        <BrowserRouter>
        <div className="ui container">
        <Header/>
                <div>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" exact component={StreamCreate}/>
                    <Route path="/streams/edit" exact component={StreamEdit}/>
                    <Route path="/streams/delete" exact component={StreamDelete}/>
                    <Route path="/steams/show" exact component={StreamShow}/>
                </div>
            
        </div>
        </BrowserRouter>

    )
}

export default App
