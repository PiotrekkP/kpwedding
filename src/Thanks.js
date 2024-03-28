import SiteHeader from './SiteHeader';
import React, {useEffect} from 'react';

const Thanks = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })
  
  return (
    
    <div className="content-container-thanks">
      <SiteHeader></SiteHeader>
      <p className="p-thanks">Dziękujemy! <br></br>Do zobaczenia 08.06.2024 r.</p>
      <p className="p-contact-details-kinga-thanks"><a className='a-tel' href='tel:+48504386599'>Kinga +48 504 386 599</a></p>
      <p className="p-contact-details-patryk-thanks"><a className='a-tel' href='tel:+48666174152'>Patryk +48 666 174 152</a></p>
    </div>
  );
}

export default Thanks;
