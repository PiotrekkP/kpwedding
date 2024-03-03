import SiteHeader from './SiteHeader';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function AppearanceConfirmation() {
    const contentContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      };

      const [buttonAPText, setbuttonAPText] = useState('nie');
      const [buttonAPColor, setbuttonAPColor] = useState('rgb(207, 206, 206)'); // Domyślny kolor
      const [isAPDisabled, setisAPDisabled] = useState(true);
      const toggleAPButton = () => {
        if (buttonAPText === 'tak') {
          setbuttonAPText('nie');
          setbuttonAPColor('rgb(207, 206, 206)'); // Zmiana koloru na czerwony
          setisAPDisabled(true);
        } else {
          setbuttonAPText('tak');
          setbuttonAPColor('rgb(178,186,119)'); // Zmiana koloru na zielony
          setisAPDisabled(false);
        }
      };

      const [buttonCText, setbuttonCText] = useState('nie');
      const [buttonTText, setbuttonTText] = useState('nie');
      const [buttonTColor, setbuttonTColor] = useState('rgb(207, 206, 206)'); // Domyślny kolor
      const [buttonCColor, setbuttonCColor] = useState('rgb(207, 206, 206)'); // Domyślny kolor
      const [isCDisabled, setisCDisabled] = useState(true);
      const [isTwoDisabled, setisTwoDisabled] = useState(true);
      const [isTransportDisabled, setisTransportDisabled] = useState(true);
      const [buttonOneColor, setbuttonOneColor] = useState('rgb(207, 206, 206)');
      const [buttonTwoColor, setbuttonTwoColor] = useState('rgb(207, 206, 206)');
      const toggleCButton = () => {
        if (buttonCText === 'tak') {
          setbuttonCText('nie');
          setbuttonCColor('rgb(207, 206, 206)'); // Zmiana koloru na czerwony
          setisCDisabled(true);
          setbuttonOneColor('rgb(207, 206, 206)');
          setbuttonTwoColor('rgb(207, 206, 206)');
          setisTwoDisabled(true);
        } else {
          setbuttonCText('tak');
          setbuttonCColor('rgb(178,186,119)'); // Zmiana koloru na zielony
          setisCDisabled(false);
          setbuttonOneColor('rgb(178,186,119)');
          setbuttonTwoColor('rgb(207, 206, 206)');
        }
      };
      
      const navigate = useNavigate();
      const handleConfirmButtonClick = (targetPage) => {
        navigate(targetPage);
      };

      const toggleOneButton = () => {
        if (buttonCColor === 'rgb(207, 206, 206)'){
          setbuttonTwoColor('rgb(207, 206, 206)');
          setbuttonOneColor('rgb(207, 206, 206)');
        }else{
          setbuttonTwoColor('rgb(207, 206, 206)');
          setbuttonOneColor('rgb(178,186,119)');
        }
        setisTwoDisabled(true);
      };
      const toggleTwoButton = () => {
        if (buttonCColor === 'rgb(207, 206, 206)'){
          setbuttonTwoColor('rgb(207, 206, 206)');
          setbuttonOneColor('rgb(207, 206, 206)');
        }else{
          setbuttonOneColor('rgb(207, 206, 206)');
          setbuttonTwoColor('rgb(178,186,119)');
        }
        setisTwoDisabled(false);
      };

      const toggleTButton = () => {
        if (buttonTText === 'tak') {
          setbuttonTText('nie');
          setbuttonTColor('rgb(207, 206, 206)');
          setisTransportDisabled(true);
        }else{
          setbuttonTText('tak');
          setbuttonTColor('rgb(178,186,119)');
          setisTransportDisabled(false);
        }
      };

  return (
    <div className="content-container-ac" style={contentContainerStyle}>
        <SiteHeader></SiteHeader>
        <p className="p-site-title">Potwierdzenie przybycia</p>
        <p className="p-appearance-confirmation-left-info">
            Imie i nazwisko
        </p>
        <textarea className="p-appearance-confirmation-right-details-ta"></textarea>
        <p className="p-appearance-confirmation-left-info">
            Dieta
        </p>
        
        <select className="select-diet" id="diet" name="diet">
            <option className="option-diet" value="zwykla">zwykla</option>
            <option className="option-diet" value="wegetarianska">wegetarianska</option>
            <option className="option-diet" value="weganska">weganska</option>
        </select>
        <p className="p-appearance-confirmation-left-info-half" style={{ backgroundColor: isAPDisabled ? 'rgb(66,66,66)' : 'rgb(112,146,88)'}}>
            Osoba towarzyszaca
        </p>
        <p className='p-btn-yn'  style={{ backgroundColor: buttonAPColor, cursor: 'pointer' }} onClick={toggleAPButton}>{buttonAPText}</p>
        <p className="p-appearance-confirmation-left-info" style={{ backgroundColor: isAPDisabled ? 'rgb(66,66,66)' : 'rgb(112,146,88)'}}>
            Imie i nazwisko
        </p>
        <textarea className="p-appearance-confirmation-right-details-ta" style={{backgroundColor: isAPDisabled ? 'rgb(207, 206, 206)' : 'rgb(178,186,119)'}}></textarea>
        <p className="p-appearance-confirmation-left-info" style={{backgroundColor: isAPDisabled ? 'rgb(66,66,66)' : 'rgb(112,146,88)'}}>
            Dieta
        </p>
        <select className="select-diet" id="diet" name="diet" style={{backgroundColor: isAPDisabled ? 'rgb(207, 206, 206)' : 'rgb(178,186,119)'}} disabled={isAPDisabled}>
            <option className="option-diet" value="zwykla">zwykla</option>
            <option className="option-diet" value="wegetarianska">wegetarianska</option>
            <option className="option-diet" value="weganska">weganska</option>
        </select>
        <p className="p-appearance-confirmation-left-info-half" style={{ backgroundColor: isCDisabled ? 'rgb(66,66,66)' : 'rgb(112,146,88)'}}>
            Dzieci
        </p>
        <p className='p-btn-yn'  style={{ backgroundColor: buttonCColor, cursor: 'pointer' }} onClick={toggleCButton}>{buttonCText}</p>
        <p className='p-btn-number1'  style={{  backgroundColor: buttonOneColor, cursor: 'pointer' }} onClick={toggleOneButton}>1</p>
        <p className='p-btn-number2'  style={{  backgroundColor: buttonTwoColor, cursor: 'pointer' }} onClick={toggleTwoButton}>2</p>
        <p className="p-appearance-confirmation-left-info" style={{ backgroundColor: isCDisabled ? 'rgb(66,66,66)' : 'rgb(112,146,88)'}}>
            Imie
        </p>
        <textarea className="p-appearance-confirmation-right-details-ta" style={{backgroundColor: isCDisabled ? 'rgb(207, 206, 206)' : 'rgb(178,186,119)'}}></textarea>
        <p className="p-appearance-confirmation-left-info" style={{ backgroundColor: isCDisabled ? 'rgb(66,66,66)' : 'rgb(112,146,88)'}}>
            Wiek
        </p>
        <textarea className="p-appearance-confirmation-right-details-ta" style={{ backgroundColor: isCDisabled ? 'rgb(207, 206, 206)' : 'rgb(178,186,119)'}}></textarea>
        <p className="p-appearance-confirmation-left-info" style={{ backgroundColor: isCDisabled || isTwoDisabled ? 'rgb(66,66,66)' : 'rgb(112,146,88)'}}>
            Imie
        </p>
        <textarea className="p-appearance-confirmation-right-details-ta" style={{backgroundColor: isCDisabled || isTwoDisabled ? 'rgb(207, 206, 206)' : 'rgb(178,186,119)'}}></textarea>
        <p className="p-appearance-confirmation-left-info" style={{ backgroundColor: isCDisabled || isTwoDisabled ? 'rgb(66,66,66)' : 'rgb(112,146,88)'}}>
            Wiek
        </p>
        <textarea className="p-appearance-confirmation-right-details-ta" style={{ backgroundColor: isCDisabled || isTwoDisabled ? 'rgb(207, 206, 206)' : 'rgb(178,186,119)'}}></textarea>
        <p className="p-appearance-confirmation-left-info-half-t" style={{ backgroundColor: isTransportDisabled ? 'rgb(66,66,66)' : 'rgb(112,146,88)'}}>
            Potrzebuje transportu z kosciola na sale
        </p>
        <p className='p-btn-yn-t'  style={{backgroundColor: buttonTColor, cursor: 'pointer' }} onClick={toggleTButton}>{buttonTText}</p>
        <p className='p-btn-wyslij'  style={{ cursor: 'pointer' }} onClick={()=> handleConfirmButtonClick('/podziekowanie')}>Wyślij</p>
        <p className="p-contact-details-kinga-ae">Kinga +48 504 386 599</p>
        <p className="p-contact-details-patryk-ae">Patryk +48 666 174 152</p>
    </div>
  );
}