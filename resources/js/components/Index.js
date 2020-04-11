import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from './layouts/Header';

function Index() {
    localStorage.setItem("url","http://127.0.0.1:8000");
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
    // Update the document title using the browser API
    //  document.title = `${count} times`;
   });

    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    {/* <Sidebar/> */}
                </div>
            </nav>
            {/* Page Content  */}
            <div id="content">
                <Header/>
            </div>
            {/* <div>
                <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                        Click me
                    </button>
                </div> */}
        </div>
    );
}


export default Index;

if (document.getElementById('covid')) {
    ReactDOM.render(<Index />, document.getElementById('covid'));
}
