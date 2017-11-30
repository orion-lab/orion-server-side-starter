// Services
import topics from './topics';
import permissions from './permissions';
import users from './users';
import auths from './authentication';

export default function services(app) {
  app.configure(topics);
  app.configure(permissions);
  app.configure(users);
  app.configure(auths);
}
