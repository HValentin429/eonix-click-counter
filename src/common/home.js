import React from 'react';

import ClickCounter from '../features/clickCounter/clickCounter';
import { useInjectReducer } from '../utils/injectReducer';

import reducer from '../features/clickCounter/reducer';

const key = 'clickContainer';

function Home(props) {
  useInjectReducer({ key, reducer });

  return (<ClickCounter {...props} />);
}

export default Home
