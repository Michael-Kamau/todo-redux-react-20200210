import React, {Component} from "react";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createPost} from '../../actions/postActions'

class AddPost extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:''
        }

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const post={
            title:this.state.title,
            body: this.state.body
        }

        this.props.createPost(post)
    }
    render() {
        return (
            <form className="ui form" onSubmit={this.onSubmit}>
                <div className="field">
                    <label>Post Title</label>
                    <input placeholder="Post Title"  type='text' name='title' onChange={this.onChange} value={this.state.title} required/>
                </div>
                <div className="field">
                    <label>Post Body</label>
                    <input placeholder="Content" type='text' name='body' onChange={this.onChange} value={this.state.body} required/>
                </div>
                <button type="submit" className="ui button" >Submit</button>
                {/*<button type="button" className="ui button" onClick={() => dispatch({type: "NEW_POST"})}>Submit</button>*/}
            </form>
        )
    }

}

AddPost.propTypes={
    createPost:PropTypes.func.isRequired
};
export default connect(null, {createPost})(AddPost)
