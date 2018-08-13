import React from 'react';
import Dom from 'react-dom';
import Routers from './routers';

import './static/css/index.scss';

Dom.render(
  <Routers />,
  document.getElementById('app')
);
