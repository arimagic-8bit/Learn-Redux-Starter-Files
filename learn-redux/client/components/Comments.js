import React from 'react';

const Comments = React.createClass({
    
    renderComment(comment, i){
        return (
            <div className='comment' key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className='remove-comment' onClick={this.props.
                    removeComment.bind(null, this.props.params.postId,i)}>&times;</button>
                </p>
            </div>
        )
    },

    handleSubmit(e){
        e.preventDefault();
        // with this we can see what is giving the refs to us
        //console.log(this.refs)
        // we passed the postId as props in {...this.props}
        const {postId} = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment)
        // method that lives in forms 
        this.refs.commentForm.reset()
    },

    render(){
        return(
        <div className='comments'>
            {this.props.postComments.map(this.renderComment)}
            <form onSubmit={this.handleSubmit} ref="commentForm" className='comment-form'>
                <input type='text' ref='author' placeholder='author' />
                <input type='text' ref='comment' placeholder='comment' />
                <input type='submit' hidden />
            </form>
        </div>
        )
    }
})

export default Comments;