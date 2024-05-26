import  '../SatPage/SatPage.css'
import icon from '../../shared/assets/3.png'
import ball from '../../shared/assets/.3.png'
import lamp1 from '../../shared/assets/lamp.png'








function SatPage (){
    return(
        <div>
        <div className='icon1'>
            <img src={icon} alt="" />
        </div>
        <div className='ball1'>
            <img src={ball} alt="" />
        </div>
        
            <h1 className='sat'>SAT</h1>
            
            
            <p className='mainword'>Наша команда - это преподаватели SAT с опытом работы <br />
            минимум 1.5 года и средним баллов 1550, преподаватели <br />
            IELTS с опытом работы более 2х лет и личным<br /> баллом выше 8.5</p>

        /* <div className='ball2'>
            <img src={ball} alt="" />
        </div> 
        
 {/* /////////////////////////////////попытка 2................... */}

   <div className="card0">
        <div className="card-content">
            <h1 className='h1'>ИНДИВИДУАЛЬНЫЙ </h1>
            <p>1.Каждое занятие длится два часа   </p>
    
            <hr className='a-lineword' />
            <p>2.Три месяца обучения </p>
            <hr  className='a-lineword2'/>
            <p>3.Три месяца обучения </p>
            <hr  className='a-lineword3'/>
            
            <h1 className='a-word3'>10.000 cом</h1>
             <a href=""class='card-button'>купить</a>
        </div>
    </div>

{/* ...........................2ряд............................... */}

  <div className="card1">
         <div className="card-content1">
            <h1 className='h2'>ИНДИВИДУАЛЬНЫЙ </h1>
            <p>1.Каждое занятие длится два часа   </p>
    
            <hr className='a-lineword' />
            <p>2.Три месяца обучения </p>
            <hr  className='a-lineword2'/>
            <p>3.Три месяца обучения </p>
            <hr  className='a-lineword3'/>
            <h1 className='a-word2'>10.000 cом</h1>
             <a href=""class='card-button1'>купить </a>
        </div>
   </div>

   


<h1 className='a-mainword2'>ПРОГРАММА ИНТЕНСИВА</h1>

<div className='a-square '>
    <p className='a-writing1'>Writing:</p>
    <p className='a-allword2'>1. Verbs: Agreement & Tense</p>
    <p className='a-allword3'>2. Sentences & Fragments</p>
    <p className='a-allword4'>3. Combining & Separating Sentence</p>
    <p className='a-allword5'>4. Transitions</p>
    <p className='a-allword6'>5. Non-Essential & Essential Clauses</p>
    <p className='a-allword7'>6. Question Marks</p>
    <p className='a-allword8'>7. Additional Comma Uses & Misuses</p>
    <p className='a-allword9'>8. Colons & Dashes</p>
    <p className='a-allword10'>9. Apostrophes: Plural vs. Possessive</p>
    <p className='a-allword11'>10. Apostrophes: Plural vs. Possessive</p>
      <hr className='line'/>
{/* 2часть */}
<div className='a-2words'>
<p className='a-2writing1'>Reading:</p>
    <p className='a-2allword2'>1. Verbs: Agreement & Tense</p>
    <p className='a-2allword3'>2. Sentences & Fragments</p>
    <p className='a-2allword4'>3. Combining & Separating Sentence</p>
    <p className='a-2allword5'>4. Transitions</p>
    <p className='a-2allword6'>5. Non-Essential & Essential Clauses</p>
    <p className='a-2allword7'>6. Question Marks</p>
    <p className='a-2allword8'>7. Additional Comma Uses & Misuses</p>
    <p className='a-2allword9'>8. Colons & Dashes</p>
    <p className='a-2allword10'>9. Apostrophes: Plural vs. Possessive</p>
    <p className='a-2allword11'>10. Apostrophes: Plural vs. Possessive</p>
</div>



{/* .....................carusel............................... */}


































{/* .............аккардион............................. */}

<p className='questions'>Часто задаваемые вопросы</p>
<hr  className='a-line-questions'/>
<div></div>
<ul class="accordion">
    <li>
        <input type="radio"  name='accordion' id='first' checked/>
        <label for="first">Сколько секций в SAT?</label>
        <div className='content'>
            <p>SAT состоит из двух основных частей - Verbal (Reading+Writing) и Математика (с калькулятором и без). Общее количество секций - 4. </p>
        </div>
    </li>

    <li>
        <input type="radio"  name='accordion' id='second' />
        <label for="second">C какого уровня я могу начать подготовку?</label>
        <div className='content'>
            <p>Подготовку к SAT желательно начинать с уровня Upper-Intermediate. </p>
        </div>
    </li>

    <li>
        <input type="radio"  name='accordion' id='third' />
        <label for="third">Можно ли готоаитсяк секциям отдельно?</label>
        <div className='content'>
            <p>Да, конечно. Важно, чтобы у вас было достаточно времени для подготовки ко всем всем секциям.</p>
        </div>
    </li>

    <li>
        <input type="radio"  name='accordion' id='four' />
        <label for="four">Я 9-классемне рано начинать подготовку?</label>
        <div className='content'>
            <p>Нет, самое время. Если у вас уже хороший уровень английского языка, то начинайте подготовку уже сейчас. К слову, сертификат SAT действует 5 лет. </p>
        </div>
    </li>
</ul>

<div className='ball3'>
            <img src={ball} alt="" />
        </div> 



<div className='lamp'>
            <img src={lamp1} alt="" />
</div>


<div className='ball4'>
            <img src={ball} alt="" />
        </div> 

<div className='icon2'>
            <img src={icon} alt="" />
</div>



    
    
    
    
    

</div>




    

          

            </div>
    )
}
export default SatPage