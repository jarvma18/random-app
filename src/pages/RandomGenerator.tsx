import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import GenerateRandom from '../components/GenerateRandom';
import './RandomGenerator.css';

const RandomGenerator: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Random generator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <GenerateRandom name="Random"/>
      </IonContent>
    </IonPage>
  );
};

export default RandomGenerator;
