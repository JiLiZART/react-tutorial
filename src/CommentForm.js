'use strict';

import React from 'react';

export default React.createClass({
    displayName: 'CommentForm',

    onSubmitHandler(e) {
        e.preventDefault();
        this.handleSubmit();
        return;
    },

    handleSubmit() {
        var author = React.findDOMNode(this.refs.author).value.trim();
        var text = React.findDOMNode(this.refs.text).value.trim();

        if (!text || !author) {
            return;
        }

        this.props.onCommentSubmit({author: author, text: text});

        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.text).value = '';
    },

    render() {
        return (
            <form className="form commentForm" onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                    <input type="text" className="form-control" required placeholder="Your name" ref="author" />
                </div>
                <textarea type="text" className="form-control" placeholder="Say something..." ref="text" ></textarea>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Post" />
                </div>
            </form>
        );
    }
});
