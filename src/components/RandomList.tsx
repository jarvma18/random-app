import './RandomList.css';
import {
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonPage
} from '@ionic/react';
import { useState, useEffect } from 'react';
import { getRandomsPerPage } from '../services/database.service'

interface RandomsProps {
  name: string;
}

const numberOfItems = 20;

const RandomList: React.FC<RandomsProps> = ({ name }) => {
  const [items, setItems] = useState<string[]>([]);
  const [page, setPage] = useState(0);

  async function getRandoms(currentPage: number) {
    let newItems = await getRandomsPerPage(currentPage, numberOfItems);
    setItems([...items, ...newItems]);
    setPage(page + 1)
  }

  useEffect(() => {
    setPage(0);
    getRandoms(page);
  }, []);

  return (
    <IonPage>
      <h1>{name}</h1>
      <IonContent fullscreen>
        <IonList>
          {items.map((item) => (
            <IonItem key={item}>
              <IonLabel>{item}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonInfiniteScroll onIonInfinite={(ev) => {
          getRandoms(page); setTimeout(() => ev.target.complete(), 100);
        }}>
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default RandomList;
