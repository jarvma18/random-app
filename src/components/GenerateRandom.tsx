import './GenerateRandom.css';
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';
import { useState } from 'react';
import { setRandom } from '../services/database.service'

interface RandomProps {
  name: string;
}

const randomBase = 1000000000000000000;

const GenerateRandom: React.FC<RandomProps> = ({ name }) => {
  const [currentRandom, setCurrentRandom] = useState(0);

  function generateRandom() {
    const random = randomBase * Math.random();
    setCurrentRandom(random);
    setRandom(random);
  }
  
  return (
    <div className="container">
      <h1>{name}</h1>
      <IonButton size="large" onClick={generateRandom}>
        Click me
      </IonButton>
      { currentRandom ? (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Value</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          {currentRandom}
        </IonCardContent>
      </IonCard>
      ) : (
        null
      )}
    </div>
  );
};

export default GenerateRandom;
