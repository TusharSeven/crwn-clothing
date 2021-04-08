import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
//match prop comes from the App.js , access is given by route component because inside app.js we are rendering shopPage with Route
const ShopPage = ({ match }) => (
    <div className='shop-page' >
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        {/* :categoryId is the parameter which takes the value from url, example if url is /shop/hats then categoryId==hats , we can use this param in the CategoryPage component as match.params.categoryId*/}
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)

export default ShopPage;