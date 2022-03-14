import HeaderNoNav from '../../components/headerNoNav'
import ServisNav from '../../components/servisnav'
import Style from '../../../styles/media.module.css'
import Slader from '../../components/slader'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export default function () {
    return (
        <>
        <HeaderNoNav title='Детский фотограф'/>
        <Navbar />
        <div className={Style.block1}>
            <div>
                <ServisNav />
            </div>
            <div className={Style.img}>
                <Slader
                    image1='https://avatars.mds.yandex.net/i?id=611b060f24458281251eec895814b5a8-5544086-images-thumbs&n=13'
                    image2='https://avatars.mds.yandex.net/i?id=0f95c86477f1547ec1195ab05275e8c8-5858959-images-thumbs&n=13'
                    image3='https://avatars.mds.yandex.net/i?id=24ac879d5d364b9ed60748dae4d2d50b-5573072-images-thumbs&n=13'
                    image4='https://avatars.mds.yandex.net/i?id=1f865467889fea6e3b2f4c5cb2d58848-5669136-images-thumbs&n=13'
                />
            </div>
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}