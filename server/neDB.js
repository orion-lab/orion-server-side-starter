import NeDB from 'nedb';

export default function rethinkDBService(app) {
  function createNeDBInstance(serviceName) {
    const newInstance = new NeDB({
      filename: `./data/${serviceName}.db`,
      autoload: true,
    });
    return newInstance;
  }

  app.set('createNeDBInstance', createNeDBInstance);
}
