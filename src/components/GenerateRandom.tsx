import './GenerateRandom.css';
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonPage,
  IonContent
} from '@ionic/react';
import { useState } from 'react';
import { setRandom, createStore } from '../services/database.service'

interface RandomProps {
  name: string;
}

const randomBase = 1000000000000000000;
const contentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
  Pellentesque pellentesque ipsum sit amet elit bibendum, a pretium risus placerat.\
  Mauris pharetra eros at lectus elementum sollicitudin.\
  Vivamus tristique malesuada magna, vitae feugiat nisl vestibulum ut.\
  Aenean placerat erat ac ultricies vehicula. Duis ut volutpat neque,\
  in euismod tellus. Integer venenatis pretium nulla. Mauris facilisis scelerisque nisl ac varius.\
  Nunc orci nunc, pharetra vitae tincidunt et, aliquet at velit. Nunc congue diam at \
  neque ullamcorper condimentum. Praesent neque est, molestie vulputate augue a, porta rutrum felis.\
  Nullam et porttitor orci. Maecenas vel condimentum tellus."

const GenerateRandom: React.FC<RandomProps> = ({ name }) => {
  const [currentRandom, setCurrentRandom] = useState(0);

  function generateRandom() {
    const setupStore = async () => {
			await createStore();
		}
		setupStore();
    const random = randomBase * Math.random();
    setCurrentRandom(random);
    setRandom(random);
  }
  
  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding">
        <h1>{ name }</h1>
        <p>{ contentText }</p>
        <IonButton size="large" expand="block" onClick={generateRandom}>
          Click me
        </IonButton>
        { currentRandom ? (
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Value</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            { currentRandom }
          </IonCardContent>
        </IonCard>
        ) : (
          null
        )}
      </IonContent>
    </IonPage>
  );
};

export default GenerateRandom;
