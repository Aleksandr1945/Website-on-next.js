
import Link from 'next/link'
import styles from '../../styles/navbar.module.css'
import { useRouter } from 'next/router'


export default function Navbar () {

    const { pathname } = useRouter();

    const navigation = [
        {id: 1, title: 'Цены', path: '/pages/price'},
        {id: 2, title: 'Услуги', path: '/pages/services'},
        {id: 3, title: 'Главная', path: '/'},

    
    ]

    return(
        <nav className={styles.nav}>
            <div className={styles.logo}>
                Фотограф Мария
            </div>
            <div className = {styles.main}>
                {navigation.map(({id, title, path}) => (
                    <Link key={id} href={path}>
                        <a className = {pathname === path ? styles.active : styles.link}>{title}</a>
                    </Link>
                ))}
            </div>
        </nav>

    )
}
