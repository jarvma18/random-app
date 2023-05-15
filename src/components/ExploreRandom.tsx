import './ExploreRandom.css';
import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { useState } from 'react';

interface RandomProps {
  name: string;
}

const ExploreRandom: React.FC<RandomProps> = ({ name }) => {
  const [currentRandom, setCurrentRandom] = useState(0);

  function generateRandom() {
    setCurrentRandom(1000000000000000000 * Math.random());
  }
  
  return (
    <div className="container">
      <h1>{name}</h1>
      <IonButton size="large" onClick={generateRandom}>Click me</IonButton>
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

export default ExploreRandom;
