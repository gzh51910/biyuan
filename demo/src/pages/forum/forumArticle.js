import React, { Component } from 'react';
import { log } from 'util';
class forumArticle extends Component {
    state={
        fname:"",
        id:0
    };
    componentDidMount(){
        let {fname,id} = this.props.match.params;
        this.getArticle(fname,id);
    }
    getArticle=(fname,id)=>{
        this.setState({
            fname,
            id
        })
    }
    componentDidUpdate(prevProps){
        if((prevProps.match.params.id != this.props.match.params.id)||(prevProps.match.params.fname != this.props.match.params.fname)){
            this.getData(this.props.match.params.fname,this.props.match.params.id)
        }
    }
    render(){
        let {fname,id}=this.state;
        return (
            <div>
                {fname}-{id}
            </div>
        )
    }
}
export default forumArticle;