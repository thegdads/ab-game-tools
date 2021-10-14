import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Page.css';

const Header: React.FC<{ name: string }> = ({ name }) => {
  return (
    <IonHeader collapse="condense">
      <IonToolbar>
        <IonTitle size="large">{name}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}

const Toolbar: React.FC<{ name: string }> = ({ name }) => {
  return (
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>{name}</IonTitle>
    </IonToolbar>
  )
}

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <Toolbar name={name} />
      </IonHeader>

      <IonContent fullscreen>
        <Header name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
