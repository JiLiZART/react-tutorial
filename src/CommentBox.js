'use strict';

import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

export default React.createClass({
    displayName: 'CommentBox',

    getInitialState: function () {
        return {data: []};
    },
    componentDidMount: function () {
        this.loadCommentsFromServer();
        //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    loadCommentsFromServer: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false
        }).then(
            function (data) {
                this.setState({data: data});
            }.bind(this),
            function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        );
    },
    handleCommentSubmit: function(comment) {
        data.push(comment);
        this.setState({data: data});
    },
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});
