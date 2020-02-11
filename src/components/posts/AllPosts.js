import React, {Component} from "react";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Post from './Post'

class AllPosts extends Component {

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps)
        if (nextProps.newPost) {
            console.log(nextProps.newPost)
            this.props.posts.unshift(nextProps.newPost)
        }
    }

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
// AllPosts.protoTypes={
//     posts: PropTypes.array.isRequired,
//     newPost: PropTypes.object
// }
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item,

})

export default connect(mapStateToProps)(AllPosts)
