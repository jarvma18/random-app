import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreRandoms from '../components/RandomList';
import './Randomlist.css';

const Randoms: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Randoms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Randoms</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreRandoms name="Randoms"/>
      </IonContent>
    </IonPage>
  );
};

export default Randoms;
