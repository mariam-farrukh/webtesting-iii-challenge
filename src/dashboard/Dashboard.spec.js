import React from 'react';
import { render, queryByText } from 'react-testing-library';
import Dashboard from './Dashboard';


describe ('<Dashboard/>', () => {
    it('Dashboard renders without crashing', () => {
        const {getByText} = render (<Dashboard/>)
    });
    it('it cannot be closed or opened if it is locked', () => {
        const {queryByText} = render (<Dashboard/>)
        queryByText(/locked/i);
        expect(queryByText(/opened/i)).toBeFalsy();
    });
});