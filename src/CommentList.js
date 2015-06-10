'use strict';

import React from 'react';
import Comment from './Comment';

export default React.createClass({
    displayName: 'CommentList',

    render() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author}>{comment.text}</Comment>
            );
        });

        return (
            <div className="media-list commentList">{commentNodes}</div>
        );
    }
});
