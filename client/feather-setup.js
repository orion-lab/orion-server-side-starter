import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import featherSocketIOClient from '@feathersjs/socketio-client';
import featherAuthClient from '@feathersjs/authentication-client';
import { CookieStorage } from 'cookie-storage';

const serverUrl = 'http://localhost:1337';
const cookieStorage = new CookieStorage();

// Configure feather
const socket = io(serverUrl);
const app = feathers()
  .configure(featherSocketIOClient(socket))
  .configure(featherAuthClient({ storage: cookieStorage }))
  .hooks({
    error: {
      all: [
        (hook) => {
          console.log(hook, 'Error!');
          return hook;
        },
      ],
    },
  });

export default app;
