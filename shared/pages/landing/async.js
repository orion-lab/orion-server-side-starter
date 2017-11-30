import React from 'react';
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => import(/* webpackChunkName: "landing" */ './'),
  LoadingComponent: () => <div>Loading</div>,
});
