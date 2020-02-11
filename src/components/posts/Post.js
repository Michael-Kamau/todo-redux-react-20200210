import React from "react";
import {connect} from 'react-redux'


function Post( {dispatch,post, index}){
    // const {  } = this.props

    const getStyle=()=>{
        return{
            textDecoration:post.completed ? 'line-through':'none'
        }
    }


    return(
            <div className="ui card">
                <div className="content">
                    {/*<img src="/images/avatar/large/steve.jpg" className="ui mini right floated image"/>*/}
                    <div className="header" style={getStyle()}><p>{post.title}</p></div>

                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        {post.completed? (
                            <button className="ui blue basic button" onClick={()=>dispatch({type:"TOGGLE_COMPLETE",payload:index})}>Incomplete</button>

                        ):(
                            <button className="ui green basic button"  onClick={()=>dispatch({type:"TOGGLE_COMPLETE",payload:index})}>Completed</button>

                        )}
                        <button className="ui red basic button" onClick={()=>dispatch({type:"DELETE_POST",payload:post.id})}>Delete</button>
                    </div>
                </div>
            </div>

    )
}



export default connect()(Post)
