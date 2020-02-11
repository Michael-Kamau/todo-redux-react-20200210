import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import PropTypes from 'prop-types'
import {fetchPosts} from "./actions/postActions";

import Navbar from "./components/layout/Navbar";
import AddPost from "./components/posts/AddPost";
import AllPosts from "./components/posts/AllPosts";


class  App extends Component{
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     dispatch({type: 'FETCH_POSTS'})
    // });
    componentWillMount() {
        this.props.fetchPosts()
    }


    render(){
        return (
            <div className="App">
                <Navbar/>
                <AddPost/>
                <AllPosts/>
            </div>
        );
    }
}

App.propTypes={
    fetchPosts:PropTypes.func.isRequired
}


export default connect(null,{fetchPosts})(App);
