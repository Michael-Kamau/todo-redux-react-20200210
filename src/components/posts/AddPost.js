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
            userId:1,
            title:this.state.title,
            completed:false
        }

        this.props.createPost(post)
    }

    formStyle(){
        return{
            margin:'20px 40px',
            width:'580px',
            padding:'20px',
        }

    }
    render() {
        return (
            <form className="ui form card" onSubmit={this.onSubmit} style={this.formStyle()}>
                <h4>Add Todo</h4>
                <div className="field">
                    <label>Todo Title</label>
                    <input placeholder="Post Title"  type='text' name='title' onChange={this.onChange} value={this.state.title} required/>
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
