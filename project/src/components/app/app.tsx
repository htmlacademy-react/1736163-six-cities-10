import MainPage from '../../pages/main-page/main-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import Favourites from '../../pages/favorites/favourites';
import Login from '../../pages/login/login';
import Room from '../../pages/offer/offer';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import {OfferType} from '../../types/offer';
import {ReviewType} from '../../types/review';

type AppScreenProps = {
  placesCount: number,
  offers: OfferType[],
  reviews: ReviewType[]
}

function App({placesCount, offers, reviews}: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage
              placesCount={placesCount}
              offers={offers}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favourites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favourites offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={
            <Room
              offers={offers}
              reviews={reviews}
            />
          }
        />
        <Route
          path="*"
          element={<PageNotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
