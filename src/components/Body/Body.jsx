import React from 'react'

import './Body.css'

/*import pic1 from '../../images/Body/Body-Pic/1.svg'
import pic2 from '../../images/Body/Body-Pic/2.svg'
import pic3 from '../../images/Body/Body-Pic/3.svg'
import pic4 from '../../images/Body/Body-Pic/4.svg'
import pic5 from '../../images/Body/Body-Pic/5.svg'
import pic6 from '../../images/Body/Body-Pic/6.svg'
import pic7 from '../../images/Body/Body-Pic/7.svg'

const list = [
    {'img_main':pic1, 'text':'КОРПОРАТИВНОЕ УПРАВЛЕНИЕ'},
    {'img_main':pic2, 'text':'ЛОГИСТИКА'},
    {'img_main':pic3, 'text':'КОРПОРАТИВНАЯ ПЛАТФОРМА'},
    {'img_main':pic4, 'text':'ПРОИЗВОДСТВО'},
    {'img_main':pic5, 'text':'УПРАВЛЕНИЕ КАЧЕСТВОМ'},
    {'img_main':pic6, 'text':'УПРАВЛЕНИЕ ЧЕЛОВЕЧЕСКИМИ РЕСУРСАМИ'},
    {'img_main':pic7, 'text':'СЕРВИСЫ И ОБСЛУЖИВАНИЕ'},
]*/

import icon1 from '../../images/Body/Body-Icon/1.svg'
import icon2 from '../../images/Body/Body-Icon/2.svg'
import icon3 from '../../images/Body/Body-Icon/3.svg'
import icon4 from '../../images/Body/Body-Icon/4.svg'
import icon5 from '../../images/Body/Body-Icon/5.svg'

const list_info = [
    {'icon':icon1, 'text':'Управление доставкой заказов'},
    {'icon':icon2, 'text':'Управление закупками'},
    {'icon':icon3, 'text':'Контроль экспорта'},
    {'icon':icon4, 'text':'Управление грузовыми перевозками'},
    {'icon':icon5, 'text':'Управление складами'},
]

const Body = () => {
    const [showResults1, setShowResults1] = React.useState(false)
    const [showResults2, setShowResults2] = React.useState(false)
    const onClick1 = () => setShowResults1(!showResults1)
    const onClick2 = () => setShowResults2(!showResults2)
  return (
    <div className='body'>
        <ul className='body__list'>
                    <li className='body__list_item'>
                        <h3 className='body__list_item-text'>КОРПОРАТИВНОЕ УПРАВЛЕНИЕ</h3>
                        <div className='body__list_item-img-1'/>
                    </li> 
                    {showResults1 ?
                    <li onClick={onClick1} className='body__list_item'> 
                    <h3 className='body__list_item-text'>ЛОГИСТИКА</h3>
                        <div className='body__list_item-img-2'/>
                        </li>
                        :
                        <li className='body__list_item-after'>
                        <h3 onClick={onClick1} className='body__list_item-text-after'>ЛОГИСТИКА</h3>
                        <div>
                            <div className='body__list_container'>
                        <img className='body__list_container-icon' src = {icon1} alt='Иконка'/>
                            <p className='body__list_container-text'>Управление доставкой заказов</p>
                            </div>
                            <div className='body__list_container'>
                            <img className='body__list_container-icon' src = {icon2} alt='Иконка'/>
                            <p className='body__list_container-text'>Управление закупками</p>
                            </div>
                            <div className='body__list_container'>
                            <img className='body__list_container-icon' src = {icon3} alt='Иконка'/>
                            <p className='body__list_container-text'>Контроль экспорта</p>
                            </div>
                            <div className='body__list_container'>
                            <img className='body__list_container-icon' src = {icon4} alt='Иконка'/>
                            <p className='body__list_container-text'>Управление грузовыми перевозками</p>
                            </div>
                            <div className='body__list_container'>
                            <img className='body__list_container-icon' src = {icon5} alt='Иконка'/>
                            <p className='body__list_container-text'>Управление складами</p>
                            </div>
                        </div>
                        </li>
                     
                      }
                    <li className='body__list_item'>
                        <h3 className='body__list_item-text'>КОРПОРАТИВНАЯ ПЛАТФОРМА</h3>
                        <div className='body__list_item-img-3'/>
                    </li> 
                    <li className='body__list_item'>
                        <h3 className='body__list_item-text'>ПРОИЗВОДСТВО</h3>
                        <div className='body__list_item-img-4'/>
                    </li> 
                    <li className='body__list_item'>
                        <h3 className='body__list_item-text'>УПРАВЛЕНИЕ КАЧЕСТВОМ</h3>
                        <div className='body__list_item-img-5'/>
                    </li> 
                    {showResults2?
                    <li onClick={onClick2} className='body__list_item'>
                        <h3 className='body__list_item-text'>УПРАВЛЕНИЕ ЧЕЛОВЕЧЕСКИМИ РЕСУРСАМИ</h3>
                        <div className='body__list_item-img-6'/>
                    </li> 
                     :<li className='body__list_item-after'>
                    <h3 onClick={onClick2} className='body__list_item-text-after'>ЛОГИСТИКА</h3>
                      <div>
                      <div className='body__list_container'>
                    <img className='body__list_container-icon' src = {icon1} alt='Иконка'/>
                    <p className='body__list_container-text'>Организационная структура</p>
                    </div>
                    <div className='body__list_container'>
                    <img className='body__list_container-icon' src = {icon2} alt='Иконка'/>
                    <p className='body__list_container-text'>Учет рабочего времени</p>
                    </div>
                    <div className='body__list_container'>
                    <img className='body__list_container-icon' src = {icon3} alt='Иконка'/>
                    <p className='body__list_container-text'>Подбор персонала</p>
                    </div>
                    <div className='body__list_container'>
                    <img className='body__list_container-icon' src = {icon4} alt='Иконка'/>
                    <p className='body__list_container-text'>Обучение</p>
                    </div>
                    <div className='body__list_container'>
                    <img className='body__list_container-icon' src = {icon5} alt='Иконка'/>
                    <p className='body__list_container-text'>Налоги и фонды</p>
                    </div>
                </div>
                </li>}
                    <li className='body__list_item'>
                        <h3 className='body__list_item-text'>СЕРВИСЫ И ОБСЛУЖИВАНИЕ</h3>
                        <div className='body__list_item-img-7'/>
                    </li> 
        </ul>
    </div>
  )
}

export default Body