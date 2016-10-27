
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import WhoAmI from 'WhoAmI';
import WhatIDo from 'WhatIDo';
import WhatIveDone from 'WhatIveDone';
import WhereToFindMe from 'WhereToFindMe';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='whatido' component={WhatIDo}/>
      <Route path='whativedone' component={WhatIveDone}/>
      <Route path='wheretofindme' component={WhereToFindMe}/>
      <IndexRoute component={WhoAmI}/>
    </Route>
  </Router>,
  document.querySelector('#app')
);
