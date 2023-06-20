import { IonContent, IonPage } from '@ionic/react';
import GenerateRandom from '../components/GenerateRandom';
import './RandomGenerator.css';

const RandomGenerator: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <GenerateRandom name="Random generator"/>
      </IonContent>
    </IonPage>
  );
};

export default RandomGenerator;
