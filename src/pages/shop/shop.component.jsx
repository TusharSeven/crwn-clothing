import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPage from '../collection/collection.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

//making collectionOverview component WithSpinner 
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: true
        };
    }

    // unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');
        //to get the data, we use onSnapshot method, it gives us the array of collection
        collectionRef.onSnapshot(async (snapshot) => {
            // console.log(snapshot);

            //converting the returned ccollection from firebase to map with additional fileds
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            // console.log(collectionsMap);
            updateCollections(collectionsMap);

            //after the data is stored in global state, then we set the isLoading to false
            this.setState({ loading: false })
        })
    }

    render() {
        //match prop comes from the App.js , access is given by route component because inside app.js we are rendering shopPage with Route
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className='shop-page' >
                {/* instead of rendering CollectionOverview and XCollectionPage component directly we are wrapping it in WithSpinner (HOC) component above to show the loading spinner */}
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                {/* :categoryId is the parameter which takes the value from url, example if url is /shop/hats then categoryId==hats , we can use this param in the CategoryPage component as match.params.categoryId*/}
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}

const mapDipatchToProps = dispatch => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDipatchToProps)(ShopPage);