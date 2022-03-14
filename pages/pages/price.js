import Header from '../components/header'
import Heiding from '../components/heiding'
import Description from '../components/description'
import Footer from '../components/footer'
import Style from '../../styles/price.module.css'
import Price from '../components/price'
import { imageConfigDefault } from 'next/dist/server/image-config'
//!Tect

//!

export default function galeryWork () {
    return(
        <>
        <div className={Style.content}>
            <Header  title='Цены на услуги'/>
            <div className={Style.price}>
                <Heiding heiding='Цены на услуги' />
                <div className={Style.blok}>
                    <Price 
                        text='Свадебные фото'
                        time='Минимальное время 5 часов'
                        coin='7000 р'
                    />
                    <Price 
                        text='Семейные фото'
                        time='Минимальное время 1 час'
                        coin='5000 р'
                    />
                    <Price 
                        text='Детское фото'
                        time='Минимальное время 1 час'
                        coin='6000 р'
                    />
                    <Price 
                        text='Фотосессии'
                        time='Минимальное время 2 часа'
                        coin='5000 р'
                    />
                    <Price 
                        text='Услуги сторисмейкера'
                        time='Минимальное время 1 час'
                        coin='6000 р'
                    />
                </div>
            </div>
        </div>
        <div className={Style.footer}>
            <Footer />
        </div>
        </>
    )
}