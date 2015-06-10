'use strict';

import React from 'react';

export default React.createClass({
    displayName: 'Comment',

    render() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});

        return (
            <div className="media comment">
                <div className="media-left commentAuthor">
                    {this.props.author}
                </div>
                <div className="media-body">
                    <span dangerouslySetInnerHTML={{__html: rawMarkup}}></span>
                </div>
            </div>
        );
    }
});
