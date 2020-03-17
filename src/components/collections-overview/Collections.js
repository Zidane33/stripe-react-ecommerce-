import React from 'react';
import { connect } from 'react-redux';
import { selectShopCollectionsForPreview } from '../../redux/shop/shop-selector';
import Preview from '../preview/Preview';
import './collections-overview.styles.scss';

const Collections = ({ collections }) =>
         (
            <div className='collections-overview'>
                {collections.map(({id, ...otherProps}) => (
                    <Preview key={id} {...otherProps} />
                ))}
            </div>
        );

const mapStateToProps = state => ({
    collections: selectShopCollectionsForPreview(state),
});

export default connect(mapStateToProps)(Collections);
