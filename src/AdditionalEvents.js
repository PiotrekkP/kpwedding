import React from 'react';
import SiteHeader from './SiteHeader';

export default function AdditionalEvents() {

  return (
    <div className="content-container-ae">
        <SiteHeader></SiteHeader>
        <p className='p-site-title-ae'>Dodatkowe atrakcje</p>
        <p className="p-additional-events-left-info">
            Stół...
        </p>
        <p className="p-additional-events-right-details">słodki</p>
        <p className="p-additional-events-right-details2">wiejski</p>
        <p className="p-additional-events-right-details2">wegański</p>
        <p className="p-additional-events-right-details2">z alkoholami</p>
        <p className="p-additional-events-left-info">Drink Bar</p>
        <p className="p-additional-events-right-details">na tarasie</p>
        <p className="p-additional-events-left-info">Księga Gości</p>
        <p className="p-additional-events-right-details">........</p>
        <p className="p-additional-events-left-info">Foto Ścianka</p>
        <p className="p-additional-events-right-details">........</p>
        <p className="p-additional-events-left-info">Strefa Relaksu</p>
        <p className="p-additional-events-right-details">na tarasie</p>
        <p className="p-additional-events-right-details2">przed salą</p>
        <p className="p-contact-details-kinga-ae"><a className='a-tel' href='tel:+48504386599'>Kinga +48 504 386 599</a></p>
        <p className="p-contact-details-patryk-ae"><a className='a-tel' href='tel:+48666174152'>Patryk +48 666 174 152</a></p>
    </div>
  );
}