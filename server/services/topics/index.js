import service from 'feathers-rethinkdb';

const serviceName = 'topics';

function initTopicService(app) {
  const Model = app.get('rethinkdbClient');
  const paginate = app.get('paginate');
  const topicService = service({
    Model,
    paginate,
    name: serviceName,
  });
  // Init service
  app.use(serviceName, topicService);
  // Init hooks
}

export default initTopicService;
