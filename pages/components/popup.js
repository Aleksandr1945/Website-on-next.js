import Popup from 'reactjs-popup';
import Style from '../../styles/blokPrice.module.css'

// документация popup https://react-popup.elazizi.com/react-modal 

export default () => (
  <Popup
    trigger={<button className={Style.button}> Заказать </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">

        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Заказать услугу </div>
        <div className="content">
          <h3>Имя</h3>
          <input type="text" />
          <h3>Номер телефона</h3>
          <input type="text" />
          <br />
          <button className={Style.button}>Заказать</button>

        </div>
      </div>
    )}
  </Popup>
);

