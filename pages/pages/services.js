import Navbar from '../components/navbar'
import NavGal from '../components/navgal'
import Footer from '../components/footer'
import Style from '../../styles/price.module.css'


export default function Services () {
    return (
        <>
        <div className={Style.content}>
            <Navbar />
            <h1>Услуги</h1>
            <NavGal />
        </div>
        <div className={Style.footer}>
            <Footer />
        </div>
        </>
    )
}