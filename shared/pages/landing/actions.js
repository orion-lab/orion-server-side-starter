export const saveSigninInfo = data => ({
  type: 'HOME/SAVE_SIGNIN_INFO',
  data,
});

export function getTopicData() {
  return async (dispatch, getState, { app }) => {
    try {
      const db = app.service('topics');
      const topics = await db.find();
      dispatch({
        type: 'HOME/SAVE_TOPIC_DATA',
        data: topics,
      });
      return true;
    } catch (e) {
      console.log(e, 'error');
    }
  };
}

export function createNewTopic() {
  return async (dispatch, getState, { app }) => {
    try {
      const topics = app.service('topics');

      const newTopics = [{
        name: 'ES6',
        description: 'Significant update to Javascript, and the first major update to the language since ES5 was standardized in 2009',
        imageURL: 'http://localhost:3002/images/es6-logo.png',
      }, {
        name: 'React',
        description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
        imageURL: 'http://localhost:3002/images/react.png',
      }, {
        name: 'React Router 4',
        description: 'Collection of navigational components that compose declaratively with your application',
        imageURL: 'http://localhost:3002/images/reactrouter.png',
      }, {
        name: 'Redux',
        description: 'Predictable state container for JavaScript apps.',
        imageURL: 'http://localhost:3002/images/redux.png',
      }, {
        name: 'React Native',
        description: 'Build native iOs and Android apps using only JavaScript',
        imageURL: 'http://localhost:3002/images/react-native.png',
      }];

      const newTopicPromise = newTopics.map(({ name, description, imageURL }) => topics.create({
        name,
        description,
        imageURL,
      }));

      const newTopic = await Promise.all(newTopicPromise);
      console.log(newTopic, 'Success');
    } catch (err) {
      console.log(err, 'err');
    }
  };
}
