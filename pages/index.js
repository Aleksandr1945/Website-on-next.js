import Header from './components/header'
import Style from '../styles/Home.module.css'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
    <Header title='Фотограф Мария Гаврилова' />
      <div className={Style.content}>
        <div className={Style.wrap}>
          
          <h1>Фотограф Мария Гаврилова</h1>

          
        </div>
      </div>
      <div>
        <Footer />
      </div>
      
    </>
    
  )
}
