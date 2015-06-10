'use strict';

import React from 'react/addons';
import Comment from '../src/Comment';

var TestUtils = React.addons.TestUtils;

describe('Comment', () => {
    var component;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<Comment author="Test Author">Some text</Comment>);
    });

    it('should display the correct author name', () => {
        expect(component.getDOMNode().textContent).toMatch(/Test Author/);
    });

    it('should display the correct content', () => {
        expect(component.getDOMNode().textContent).toMatch(/Some text/);
    });
});
