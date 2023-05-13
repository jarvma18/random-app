import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreRandom from '../components/ExploreRandom';
import './Random.css';

const Random: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Random</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Random</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreRandom name="Random"/>
      </IonContent>
    </IonPage>
  );
};

export default Random;
