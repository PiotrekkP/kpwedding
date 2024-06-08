import React, { useEffect } from 'react';
import SiteHeader from './SiteHeader';


const Disk = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })

  return (
    <div className="content-container-d">
      <SiteHeader></SiteHeader>
      <p className='p-site-title'>Dysk Google</p>
      <p className="p-map-left-info">
        Zdjęcia
      </p>
      <a href="https://drive.google.com/drive/folders/1nFrfW9W9joB5tQHAC32krngFaMuSsSPz?usp=drive_link" className="p-map-right-links">
        Dodaj i przeglądaj zdjęcia
      </a>
      <p className="p-map-left-info">
        Filmy
      </p>
      <a href="https://drive.google.com/drive/folders/1PjNXJG4zO188NbHYklyOM-UeOhBI8lrF?usp=sharing" className="p-map-right-links">
        Dodaj i przeglądaj filmy 
      </a>
      
      <p className="p-contact-details-kinga-d"><a className='a-tel' href='tel:+48504386599'>Kinga +48 504 386 599</a></p>
      <p className="p-contact-details-patryk-d"><a className='a-tel' href='tel:+48666174152'>Patryk +48 666 174 152</a></p>
    </div>
  );
}

export default Disk;