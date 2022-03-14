import Link from 'next/link'
import Style from '../../styles/footer.module.css'

export default function Footer () {
    return (
        <>
            <footer>
                <div className={Style.footer}>
                    <Link href='/'>
                        <a className={Style.link}>Главная</a>
                    </Link>
                    <Link href='/pages/services'>
                        <a className={Style.link}>Услуги</a>
                    </Link>
                    <Link href='/pages/price'>
                        <a className={Style.link}>Цены</a>
                    </Link>
                </div>
            </footer>
        </>
    )
}