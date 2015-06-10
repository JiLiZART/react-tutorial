'use strict';

import React from 'react/addons';
import CommentForm from '../src/CommentForm';

var TestUtils = React.addons.TestUtils;

describe('CommentForm', () => {
    var component, submitHandler = () => {};

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<CommentForm onCommentSubmit={submitHandler} />);

        spyOn(component, 'handleSubmit');

        TestUtils.Simulate.submit(component.getDOMNode());
    });

    it('should display form', () => {
        expect(component.getDOMNode().localName).toBe('form');
        expect(component.getDOMNode().getElementsByTagName('input').length).toBeGreaterThan(0);
    });

    it('should handle submit', () => {
        expect(component.handleSubmit).toBeDefined();
        expect(component.handleSubmit).toHaveBeenCalled();
    });
});
