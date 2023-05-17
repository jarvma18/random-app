import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import RandomList from '../components/RandomList';
import './Randoms.css';

const Randoms: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Randoms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <RandomList name="Randoms"/>
      </IonContent>
    </IonPage>
  );
};

export default Randoms;
