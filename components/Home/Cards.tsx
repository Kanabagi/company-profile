import { cardsData } from '@/constants/data';
import Card from './Card';

const Cards = () => {
  const [card1, card2, card3] = cardsData.slice(0, 3);

  return (
    <div className="hidden lg:block">
      <div className="flex justify-around -mb-[140px]">
        <Card image={card1.image} title={card1.title} desc={card1.desc} height="h-[150px]" />
        <Card image={card2.image} title={card2.title} desc={card2.desc} height="h-[155px]" />
        <Card image={card3.image} title={card3.title} desc={card3.desc} height="h-[130px]" />
      </div>
    </div>
  );
};

export default Cards;
