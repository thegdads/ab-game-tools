import React from 'react';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { pricetagSharp, planetSharp, businessSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  id: string;
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    id: 'home',
    title: 'Home',
    url: '/page/Home',
    iosIcon: planetSharp,
    mdIcon: planetSharp
  },
  {
    id: 'cities',
    title: 'Cities',
    url: '/page/Cities',
    iosIcon: businessSharp,
    mdIcon: businessSharp
  },
  {
    id: 'items',
    title: 'Items',
    url: '/page/Items',
    iosIcon: pricetagSharp,
    mdIcon: pricetagSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Albion p2p market</IonListHeader>
          {appPages.map((appPage) => {
            return (
              <IonMenuToggle key={appPage.id} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
