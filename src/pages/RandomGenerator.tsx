import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreRandom from '../components/GenerateRandom';
import './RandomGenerator.css';

const Random: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Random generator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Random generator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreRandom name="Random"/>
      </IonContent>
    </IonPage>
  );
};

export default Random;
