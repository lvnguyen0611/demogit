import React from 'react'
import ReactDOM from 'react-dom'
import Loading from '../src/component/loading'

function App() {
    return (
        <div>
            <h1>Hello anh em !</h1>
            <h2>xin chao</h2>
            <Loading />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))