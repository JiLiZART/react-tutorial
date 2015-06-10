'use strict';

import React from 'react/addons';
import CommentList from '../src/CommentList';

var TestUtils = React.addons.TestUtils;
var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

describe('CommentList', () => {
    var component;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<CommentList data={data} />);
    });

    it('should display comments', () => {
        expect(component.getDOMNode().getElementsByClassName('comment').length).toBeGreaterThan(0);
    });
});
