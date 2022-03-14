import HeaderNoNav from '../../components/headerNoNav'
import ServisNav from '../../components/servisnav'
import Style from '../../../styles/media.module.css'
import Navbar from '../../components/navbar'
import Slader from '../../components/slader'
import Footer from '../../components/footer'

export default function () {
    return (
        <>
        <HeaderNoNav title='Cемейный фотограф'/>
        <Navbar />
        <div className={Style.block1}>
            <div>
                <ServisNav />
            </div>
            <div className={Style.img}>
                <Slader
                    image1='https://avatars.mds.yandex.net/i?id=4586e01e10606516086aa00d41dc4a75-5873534-images-thumbs&n=13'
                    image2='https://avatars.mds.yandex.net/i?id=60e7659a56f82aa88607e0308d707cbf-5483658-images-thumbs&n=13'
                    image3='https://avatars.mds.yandex.net/i?id=5ed6a45a4cd2ebeb871b9f67d4554bf8-5663902-images-thumbs&n=13'
                    image4='https://avatars.mds.yandex.net/i?id=1d3da77b9622e1f0c3e7338c3c929d82-5502450-images-thumbs&n=13'
                />
            </div>
        </div>
        <div>
            <Footer />
        </div>
        
        </>
    )
}