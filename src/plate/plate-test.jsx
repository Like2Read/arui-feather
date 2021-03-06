/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { render, cleanUp } from '../test-utils';

import Plate from './plate';

describe('plate', () => {
    afterEach(cleanUp);

    it('should render without problems', () => {
        let plate = render(<Plate>plate-text</Plate>);

        expect(plate.node).to.exist;
        expect(plate.node).to.have.text('plate-text');
        expect(plate.node).to.have.class('plate');
    });

    it('should render with cross without problems', () => {
        let plate = render(<Plate hasCloser={ true }>plate-text</Plate>);
        let crossNode = plate.node.querySelector('.plate__clear');

        expect(crossNode).to.exist;
    });

    it('should call `onCloserClick` callback after plate cross was clicked', () => {
        let onCloserClick = chai.spy();
        let plate = render(
            <Plate hasCloser={ true } onCloserClick={ onCloserClick }>plate-text</Plate>
        );
        let crossIconNode = plate.node.querySelector('.plate__clear > .icon');

        crossIconNode.click();

        expect(onCloserClick).to.have.been.called.once;
    });

    it('should call `onClick` callback after plate was clicked', () => {
        let onClick = chai.spy();
        let plate = render(
            <Plate hasCloser={ true } onClick={ onClick }>plate-text</Plate>
        );

        plate.node.click();

        expect(onClick).to.have.been.called.once;
    });
});
