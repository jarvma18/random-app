import './ExploreRandoms.css';
import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { useState } from 'react';

interface RandomsProps {
  name: string;
}

const ExploreRandoms: React.FC<RandomsProps> = ({ name }) => {

  return (
    <div className="container">
      <h1>{name}</h1>
      {/* <IonButton size="large" onClick={generateRandom}>Click me</IonButton>
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
      )} */}
    </div>
  );
};

export default ExploreRandoms;
