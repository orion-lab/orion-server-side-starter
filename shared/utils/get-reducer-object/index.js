import check from 'check-types';

function getReducerObject(reducers, persistTransformer) {
  if (!reducers) {
    throw new Error('No reducers found on the function parameter.');
  }
  if (!check.array(reducers)) {
    throw new Error('Reducers in not an array');
  }
  if (check.emptyArray(reducers)) {
    throw new Error('Reducers cannot be an empty array');
  }
  function defaultPersistTransformer(name, reducer) {
    return { [name]: reducer };
  }
  const reducerObject = Object.assign(...reducers.map(({
    name,
    reducer,
    persist,
    persistBlacklist,
  }) => {
    const transformer = persistTransformer || defaultPersistTransformer;
    if (persist) {
      return transformer(name, reducer, persistBlacklist);
    }
    return { [name]: reducer };
  }));
  return reducerObject;
}

export default getReducerObject;
