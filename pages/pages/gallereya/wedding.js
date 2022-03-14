import HeaderNoNav from '../../components/headerNoNav'
import ServisNav from '../../components/servisnav'
import Style from '../../../styles/media.module.css'
import Slader from '../../components/slader'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'


export default function () {
    return (
        <>
        <HeaderNoNav title='Cвадебный фотограф'/>
        <Navbar />
        <div className={Style.block1}>
            <div>
                <ServisNav />
            </div>
            <div className={Style.img}>
                <Slader
                    image1='https://avatars.mds.yandex.net/i?id=51711c2850bbeeac553413cdd5d5c7f3-5471545-images-thumbs&n=13'
                    image2='https://avatars.mds.yandex.net/i?id=c56d63598532bc25d9e34b38d8569976-5220648-images-thumbs&n=13'
                    image3='https://avatars.mds.yandex.net/i?id=d52006cbd86ced45ad0a1bd3c6dc72de-5858998-images-thumbs&n=13'
                    image4='https://avatars.mds.yandex.net/i?id=1b6e384671df3b3d40858b7c8938f8bc-5878563-images-thumbs&n=13'
                />
            </div>
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}