import service from 'feathers-nedb';

const serviceName = 'topics';

function initTopicService(app) {
  const createNeDBInstance = app.get('createNeDBInstance');
  const paginate = app.get('paginate');
  const topicService = service({
    Model: createNeDBInstance(serviceName),
    paginate,
    name: serviceName,
  });
  // Init service
  app.use(serviceName, topicService);
  // Init hooks
}

export default initTopicService;
