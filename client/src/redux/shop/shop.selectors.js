import { createSelector } from 'reselect';

//we write map beacuse the value we get from url is string and our collection id is in the form of integer

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching,
);

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    // !! returns the boolean value
    shop => !!shop.collections,
)