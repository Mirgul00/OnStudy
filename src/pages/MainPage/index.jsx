import React from 'react';
import Header from "../../widgets/Header/Header";
import Form from "../../widgets/Form/Form"
import "./mainPage.css";
import Slider from '../../widgets/Slider/Slider'; 
import glavpick from "../../shared/assets/glavpic.png"
import developpic from "../../shared/assets/Developer.png"
import arrowCard from "../../shared/assets/arrow.png"
import galochblock2 from "../../shared/assets/galochkiglav.png"
import calendarblock2 from "../../shared/assets/calendar.png"
import bluecalendarblock2 from "../../shared/assets/bluecalendar.png"
import imgblock5 from "../../shared/assets/picblock5.png"
import img1block5 from "../../shared/assets/pic2block5.png"
import img2block5 from "../../shared/assets/pic3block5.png"
import img3block5 from "../../shared/assets/pic2block5.png"
import lampimg from "../../shared/assets/lampocka.png"
import ballimg from "../../shared/assets/greyBall.png"
import ball2img from "../../shared/assets/greyBall.png"
import znachimg from "../../shared/assets/znachokf.png"
import Footer from '../../widgets/Footer/Footer';
function MainPage() {
    return (
        <div>
            <div className="m_background">
                <Header />
                <div className="m_textfirst">
                    <h1>Становись лучше <br />с OnStudy</h1>
                    <p>OnStudy these are courses that will help you <br />improve your English and achieve the results <br />you want.</p>
                </div>
                <div className="m_pictureCombo">
                    <img src={glavpick} alt="" />
                </div>
            </div>

            <div className='m_text2block'>
                <h2>Курсы по подготовке к SAT & IELTS</h2>
                <h4>Это курс длится около <br />одного месяца предоставит <br />вам лучшие услуги вот короче<br /> не знаю что написать типа<br /> ошондой болот про курсы не<br /> учи ученного учись у мастера</h4>
                 
                <div className="m_card1">
                    <div className="m_card-content">
                        <h2 className='m_h2'>IELTS </h2>
                        <h3>International <br />English Language <br />Testing System  </h3>
                        <a href=""class='m_card-button'> <img src={arrowCard} alt="" /> </a>

                        <div className='m_pictBlock1'>
                            <img src={galochblock2} alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className="m_card2">
                    <div className="m_card-content1">
                        <h2 className='m_h2'>ESSAY </h2>
                        <h3>International <br />English Language <br />Testing System  </h3>
                        <a href=""class='m_card-button1'> <img src={arrowCard} alt="" /> </a>
                        
                        <div className='m_pictBlock2'>
                            <img src={bluecalendarblock2} alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className="m_card3">
                    <div className="m_card-content2">
                        <h2 className='m_h3'>SAT </h2>
                        <h3>Scholastic <br />Aptitude  <br />Test  </h3>
                        <a href=""class='m_card-button2'> <img src={arrowCard} alt="" /> </a>
                        
                        <div className='m_pictBlock3'>
                            <img src={calendarblock2} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
            

            <div className='m_block3'>
                <img src={developpic} alt="" />
            </div>
            
            <div className='m_block4'>
                <h5>Отзывы</h5>
            <Slider />
                <h4>Это курс длится около одного месяца <br />предоставит вам лучшие услуги вот <br />короче не знаю что написать типа <br />ошондой болот про курсы </h4>
                <div className="m_cardblock4">
                    <div className="m_card-contentblock4">
                       
                        <h3>Let’s Schedule <br />a Meeting</h3>
                        <a href=""class='m_card-buttonblock4'> Schedule Meeting</a>

                       
                        
                    </div>
                </div>
            </div>
            <div className='m_block5'>
                <div className='m_textblock5'>
                    <h5>Менторство от студентов Stanford, Cornell и др.</h5>
                    <p>Наши ментора</p>
                </div>
                <div className='m_imgmen'>
                    <div className='m_img1block5'>
                        <img src={imgblock5}  alt="" />
                        {/* <p>Ментор Анна</p> */}
                    </div>
                    <div className='m_img2block5'>
                        <img src={img1block5} alt="" />
                        {/* <p>Ментор Джон</p> */}
                    </div>
                    <div className='m_img3block5'>
                        <img src={img2block5} alt="" />
                        {/* <p>Ментор Алла</p> */}
                    </div>
                    <div className='m_img4block5'>
                        <img src={img3block5} alt="" />
                        {/* <p>Ментор Джек</p> */}
                    </div>
                </div>
                    <div className='m_textmen'>
                        <p>Ментор Анна</p>
                        <p>Ментор Джон</p>
                        <p>Ментор Алла</p>
                        <p>Ментор Джек</p>
                    </div>
            </div>
            <div className='m_block6'>
                <h5>Получить консультацию</h5>
            </div>
            {/* hhhhhhhhhhhhhh */}
            <div className='m_form'>
                <Form />
                <div className='m_ball2img'> 
                    <img src={ball2img} alt="" />
                </div>
                <div className='m_lampimg'>
                    <img  src={lampimg} alt="" />
                </div>
               
                <div className='m_znachimg'>
                    <img src={znachimg} alt="" />
                </div>
                <div className='m_ballimg'>
                    <img src={ballimg} alt="" />
                </div>
                <div className='m_footer'>
                    <Footer />
                </div>
               
            </div>
        </div>
    );
}

export default MainPage;

