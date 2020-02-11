import React, {Component} from "react";
import {connect} from 'react-redux'

import Post from './Post'

class AllPosts extends Component {

    render() {

        return (
            <div>
                <h1>All Posts</h1>
                <div className="ui cards">
                    {
                        this.props.posts.map((post, index) => (
                            <Post key={index} index={index} post={post}/>
                        ))
                    }
                </div>



            </div>
        )


    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPosts: state.posts.item

})

export default connect(mapStateToProps)(AllPosts)
