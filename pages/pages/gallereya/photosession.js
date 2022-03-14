import HeaderNoNav from '../../components/headerNoNav'
import ServisNav from '../../components/servisnav'
import Style from '../../../styles/media.module.css'
import Slader from '../../components/slader'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export default function () {
    return (
        <>
        <HeaderNoNav title='Фотосессия в студии'/>
        <Navbar />
        <div className={Style.block1}>
            <div>
                <ServisNav />
            </div>
            <div className={Style.img}>
                <Slader
                    image1='https://w-dog.ru/wallpapers/4/0/372616495025561/kira-najtli-fotosessiya-redaktirovat.jpg'
                    image2='https://avatars.mds.yandex.net/i?id=8ad91a7aae5725109ea72bf3a23c6ab6-5873252-images-thumbs&n=13'
                    image3='https://avatars.mds.yandex.net/i?id=31274e680ec9553d2717505cc17e3ed7-5686671-images-thumbs&n=13'
                    image4='https://avatars.mds.yandex.net/i?id=304339de2ee680eaefe95d51b1acadf0-5349850-images-thumbs&n=13'
                />
            </div>
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}