import { render, RenderResult } from '@testing-library/react';
import React from 'react';

import Header from '../Header';

const setup = (component: React.ReactElement): RenderResult => {
    const tree = render(component);

    return {
        ...tree,
    };
};

describe('<Header />', () => {
    it('matches snapshot', async () => {
        const { container } = setup(<Header />);
        expect(container).toMatchSnapshot();
    });
});
