import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CollectionPage from '../collection/collection.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

//making collectionOverview component WithSpinner 
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

//match prop comes from the App.js , access is given by route component because inside app.js we are rendering shopPage with Route
const ShopPage = ({ fetchCollectionsStart, match, isCollectionFetching, isCollectionLoaded }) => {

    useEffect(() => {
        fetchCollectionsStart();

        // const { updateCollections } = this.props;

        // const collectionRef = firestore.collection('collections');

        // // by using peromises

        // //1 fetch method
        // // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-e83e4/databases/(default)/documents/collections')
        // //     .then(response => response.json())
        // //     .then(collections => console.log(collections));

        // //2 method
        // collectionRef.get().then((snapshot) => {
        //     // console.log(snapshot);

        //     //converting the returned ccollection from firebase to map with additional fileds
        //     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        //     // console.log(collectionsMap);
        //     updateCollections(collectionsMap);

        //     //after the data is stored in global state, then we set the isLoading to false
        //     this.setState({ loading: false })
        // })

        //by using observables

        //to get the data, we use onSnapshot method, it gives us the array of collection
        // collectionRef.onSnapshot(async (snapshot) => {
        //     // console.log(snapshot);

        //     //converting the returned ccollection from firebase to map with additional fileds
        //     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        //     // console.log(collectionsMap);
        //     updateCollections(collectionsMap);

        //     //after the data is stored in global state, then we set the isLoading to false
        //     this.setState({ loading: false })
        // })
    }, [fetchCollectionsStart]);




    return (
        <div className='shop-page' >
            {/* instead of rendering CollectionOverview and XCollectionPage component directly we are wrapping it in WithSpinner (HOC) component above to show the loading spinner */}
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
            {/* :categoryId is the parameter which takes the value from url, example if url is /shop/hats then categoryId==hats , we can use this param in the CategoryPage component as match.params.categoryId*/}
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded,
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);