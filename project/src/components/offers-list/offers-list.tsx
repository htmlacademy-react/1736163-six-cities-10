import Card from '../card/card';
import {OfferType} from '../../types/offer';

type OffersListProps = {
  offers: OfferType[];
}

function OffersList({offers}: OffersListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id}
          value={offer}
        />
      )
      )}
    </div>

  );
}

export default OffersList;
