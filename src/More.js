import { useEffect } from "react";
import SiteHeader from "./SiteHeader";

const More = () => {
useEffect(() => {
    window.scrollTo(0,0);
})
    return (
    <div className="content-container-m">
        <SiteHeader></SiteHeader>
        <p className="p-site-title">Więcej</p>
        <p className="p-more-left-info">Zespół</p>
        <p className="p-more-right-details">For You</p>
        <p className="p-more-left-info">Fotograf</p>
        <p className="p-more-right-details">BestDay Fotografia</p>
        <p className="p-more-left-info">Kamerzysta</p>
        <p className="p-more-right-details">VSTwedding</p>
        <p className="p-more-left-info">Dekoracje</p>
        <p className="p-more-right-details">Becolor Pracownia</p>
        <p className="p-more-left-info">Słodki stół i tort</p>
        <p className="p-more-right-details">Cafe Słodziak</p>
        <p className="p-more-left-info">Drink Bar</p>
        <p className="p-more-right-details">Drink Up!</p>
        <p className="p-more-left-info">Sala</p>
        <p className="p-more-right-details">Oranżeria Przyjęcia</p>
        <p className="p-more-left-info">Strona</p>
        <p className="p-more-right-details">Dominika Zdaniewicz</p>
        <p className="p-more-right-details">Piotr Paluszek</p>
        <p className="p-contact-details-kinga-m"><a className='a-tel' href='tel:+48504386599'>Kinga +48 504 386 599</a></p>
        <p className="p-contact-details-patryk-m"><a className='a-tel' href='tel:+48666174152'>Patryk +48 666 174 152</a></p>
    </div>
);
}
export default More;