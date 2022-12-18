import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CarRideInfos from '../pages/CarRideInfos';
import Find from '../pages/Find';
import Finish from '../pages/Finish';
import Home from '../pages/Home';
import Map from '../pages/Map';
import MobileScreen from '../pages/Teste';
import UseTerms from '../pages/UseTerms';
import Waiting from '../pages/Waiting';
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/terms" component={UseTerms} />
                <Route path="/find" component={Find} />
                <Route path="/map" component={Map} />
                <Route path="/waiting" component={Waiting} />
                <Route path="/carrideinfos" component={CarRideInfos} />
                <Route path="/finish" component={Finish} />
                <Route path="/teste" component={MobileScreen} />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
