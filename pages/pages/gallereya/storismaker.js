import HeaderNoNav from '../../components/headerNoNav'
import ServisNav from '../../components/servisnav'
import Style from '../../../styles/media.module.css'
import Slader from '../../components/slader'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export default function () {
    return (
        <>
        <HeaderNoNav title='Сторисмейкер услуги'/>
        <Navbar />
        <div className={Style.block1}>
            <div>
                <ServisNav />
            </div>
            <div className={Style.img}>
                <Slader
                    image1='/image1.jpg'
                    image2='/image2.jpg'
                    image3='/image3.jpg'
                    image4='/image4.jpg'
                />
            </div>
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}