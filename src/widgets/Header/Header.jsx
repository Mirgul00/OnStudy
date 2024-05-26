import './Header.css'
import logoimg from '../../shared/assets/logo_onstudy.png'

function Header () {
    return(
      <header>
          <div className='logoImg'>
            <img src={logoimg} alt="" />
            <h2>OnStudy</h2>
          </div>
     
          
         
            <div className='header-1'>
            <ul>
              <li>Контакты</li>
              <li>О нас</li>
              <li>Главная</li>
            </ul>
            </div>
      </header>
    )
}
export default Header;