import { Switch, Route } from 'react-router-dom';
import Homepage_14 from './pages/Homepage_14';
import ShopTwo_14 from './pages/ShopTwoPage_14';
import ContactPage_14 from './pages/ContactPage_14';
import SigninPage_14 from './pages/SigninPage_14';
import Header_14 from './components/Header_14';

import './App_14.scss';

function App_14() {
  return (
    <div>
      <Header_14 />
      <Switch>
        <Route exact path="/" component={Homepage_14} />
        <Route exact path="/shop_14" component={ShopTwo_14} />
        <Route exact path="/contact_14" component={ContactPage_14} />
        <Route exact path="/signin_14" component={SigninPage_14} />
      </Switch>
    </div>
  );
}

export default App_14;
