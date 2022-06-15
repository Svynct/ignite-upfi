import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const disclosure = useDisclosure();
  const [selectedImage, setSelectedImage] = useState('');

  disclosure.onClose = () => {
    setSelectedImage('');
  };

  if (selectedImage) {
    disclosure.isOpen = true;
  }

  const handleViewImage = (url: string): void => {
    setSelectedImage(url);
  };

  return (
    <>
      {!disclosure.isOpen && (
        <SimpleGrid columns={3} spacing="40px">
          {cards.map(card => (
            <Card key={card.id} data={card} viewImage={handleViewImage} />
          ))}
        </SimpleGrid>
      )}

      {disclosure.isOpen && (
        <ModalViewImage
          imgUrl={selectedImage}
          isOpen={disclosure.isOpen}
          onClose={disclosure.onClose}
        />
      )}
    </>
  );
}
