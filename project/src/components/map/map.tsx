import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {Offer} from '../../types/offer';
import {URL_MARKER_DEFAULT} from '../../const';
import 'leaflet/dist/leaflet.css';


const SELECTED_CITY = 'Amsterdam';

type MapProps = {
  offers: Offer[]
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

// const currentCustomIcon = new Icon({
//   iconUrl: URL_MARKER_CURRENT,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40]
// }); ----- Потребуется позже при добавлении функционала

function Map({offers}: MapProps): JSX.Element {

  const offer = offers;
  const selectedCityOffers = offer.filter((offerObj) =>offerObj.city.name === SELECTED_CITY);
  const selectedCity = offer.find((offerObj) =>offerObj.city.name === SELECTED_CITY) as Offer;
  const city = selectedCity;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      selectedCityOffers.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, selectedCityOffers]);

  return <div style={{height: '1000px'}} ref={mapRef} className='cities__map'></div>;
}

export default Map;
