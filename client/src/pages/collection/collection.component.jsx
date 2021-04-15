import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component'

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    // console.log(collection);
    const { title, items } = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className="items">
                {
                    items.map(item =>
                        <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

//mapStateToProps take 2nd argument ownProps which is the props(match) that gets passed to the component before using mapStateToProps
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);