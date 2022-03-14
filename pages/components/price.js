import Styles from '../../styles/blokPrice.module.css'
import Popup from './popup'
import 'reactjs-popup/dist/index.css';


export default function Price ({text, time, coin}) {
    return (
        <>
            <div className={Styles.blokPrice}>
                <h2>{text}</h2>
                <h3>{time}</h3>
                <h3>{coin}</h3>
                <Popup />
                
            </div>
        </>
    )
}