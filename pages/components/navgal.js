import Link from 'next/link'
import Style from '../../styles/navgal.module.css'
//import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'


export default function Navgal () {

    const { pathname } = useRouter()

    const navigation = [
        {id: 1, title: 'Семейные фотографии', path: '/pages/gallereya/family'},
        {id: 2, title: 'Детские фотографии', path: '/pages/gallereya/kids'},
        {id: 3, title: 'Фотосессии', path: '/pages/gallereya/photosession'},
        {id: 4, title: 'Услуги Сторисмейкера', path: '/pages/gallereya/storismaker'},
        {id: 5, title: 'Свадебные фотографии', path: '/pages/gallereya/wedding'},
        {id: 5, title: 'Монтаж видео', path: '/pages/gallereya/videomontag'},
    ]

    return(
        <>
        <div className={Style.navgal}>
            {navigation.map(({id, title, path}) => (
                <Link key={id} href={path}>
                <a className = {pathname === path ? Style.active : Style.link}>{title}</a>
                </Link>
            ))}
        </div>
        </>
    )
}