import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CarRideInfos from '../pages/CarRideInfos';
import Find from '../pages/Find';
import Finish from '../pages/Finish';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Map from '../pages/Map';
import MyRides from '../pages/MyRides';
import NewCarRide from '../pages/NewCarRide';
import Rating from '../pages/Rating';
import Thanks from '../pages/Thanks';
import UseTerms from '../pages/UseTerms';
import Waiting from '../pages/Waiting';
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/terms" component={UseTerms} />
                <Route path="/find" component={Find} />
                <Route path="/map" component={Map} />
                <Route path="/waiting" component={Waiting} />
                <Route path="/carrideinfos" component={CarRideInfos} />
                <Route path="/finish" component={Finish} />
                <Route path="/rate" component={Rating} />
                <Route path="/thanks" component={Thanks} />
                <Route path="/myrides" component={MyRides} />
                <Route path="/newcarride" component={NewCarRide} />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
