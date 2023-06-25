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
import { getRandomsPerPage, createStore } from '../services/database.service'

interface RandomsProps {
  name: string;
}

const numberOfItems = 20;
const contentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
  Pellentesque pellentesque ipsum sit amet elit bibendum, a pretium risus placerat."

const RandomList: React.FC<RandomsProps> = ({ name }) => {
  const [items, setItems] = useState<string[]>([]);
  const [page, setPage] = useState(0);

  async function getRandoms(currentPage: number) {
    let newItems = await getRandomsPerPage(currentPage, numberOfItems);
    setItems([...items, ...newItems]);
    setPage(page + 1)
  }

  useEffect(() => {
    const setupStore = async () => {
      await createStore();
    }
    setupStore();
    setPage(0);
    getRandoms(0);
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding">
        <h1>{name}</h1>
        <p>{ contentText }</p>
        <IonList>
          {items.map((item) => (
            <IonItem key={item}>
              <IonLabel>{item}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonInfiniteScroll onIonInfinite={(ev) => {
          getRandoms(page); setTimeout(() => ev.target.complete(), 500);
        }}>
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default RandomList;
