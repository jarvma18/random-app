import { IonContent, IonPage } from '@ionic/react';
import RandomList from '../components/RandomList';
import './Randoms.css';

const Randoms: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <RandomList name="Randoms"/>
      </IonContent>
    </IonPage>
  );
};

export default Randoms;
