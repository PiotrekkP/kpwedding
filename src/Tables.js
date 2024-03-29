import { useEffect } from "react";
import SiteHeader from "./SiteHeader";
import './Tables.css';

const WeddingPlan = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })

      return (
    <div className="content-container-t" >
      <SiteHeader></SiteHeader>
        <p className="p-site-title-t">Plan stołów</p>
        <p className="p-site-info ">Informacje  o ustawieniu stolików będą dostępne, gdy otrzymamy potwierdzenia przybycia gości.</p>
        <p className="p-contact-details-kinga-t"><a className='a-tel' href='tel:+48504386599'>Kinga +48 504 386 599</a></p>
      <p className="p-contact-details-patryk-t"><a className='a-tel' href='tel:+48666174152'>Patryk +48 666 174 152</a></p>
    </div>
);}

export default WeddingPlan;