import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from 'routes';
import TopBar from 'components/TopBar';
import { CurrentUserProvider } from 'contexts/currentUser';
import CurrentUserCheker from 'components/currentUserCheker';

const App = () => {
  return (
    <CurrentUserProvider className="App">
      <CurrentUserCheker>
      	<Router>
		  		<TopBar />
		    	<Routes />
      	</Router>
      </CurrentUserCheker>
    </CurrentUserProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
