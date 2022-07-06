import './App.css';
import {useRef, useEffect} from 'react'
import bestDigitalPng from './assets/best.png'
import slider from './assets/slider.svg'

import mobileapp from './assets/mobileapp.png'
import mobile1 from './assets/1.png'
import mobile2 from './assets/2.png'
import mobile3 from './assets/3.png'
import mobile4 from './assets/4.png'
import mobile5 from './assets/5.png'
import mobile6 from './assets/6.png'
import readbox from './assets/redbox.png'
import nut from './assets/nut.png'
import bread from './assets/bread.png'
import bg from './assets/bg.jpg'
import mobile7 from './assets/7.png'
import mobile8 from './assets/8.png'
import mobile9 from './assets/9.png'
import mobile10 from './assets/10.png'
import mobile11 from './assets/11.png'
import mobile12 from './assets/12.png'
import mobile13 from './assets/13.png'
import mobile14 from './assets/14.png'
import mobile15 from './assets/15.png'
import tab from './assets/tab.png'
import nasa from './assets/nasa.png'

import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import {gsap, Power3} from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)


// import { Tween } from 'gsap/gsap-core';



function App() {

  let app1 = useRef(null)
  let app2 = useRef(null)

  let sliderText1 = useRef(null)
  let sliderText2 = useRef(null)
  let sliderText3 = useRef(null)
  let sliderText4 = useRef(null)
  let sliderText5 = useRef(null)
  let sliderText6 = useRef(null)
  let sliderText7 = useRef(null)
  
  let bottom1 = useRef(null)
  let bottom2 = useRef(null)
  let bottom3 = useRef(null)
  let bottom4 = useRef(null)
  let bottom5 = useRef(null)
  let bottom6 = useRef(null)
  let bottom7 = useRef(null)

  let mob3 = useRef(null)
  let mob4 = useRef(null)
  let mob1 = useRef(null)
  let mob2 = useRef(null)
  let mob5 = useRef(null)
  let mob6 = useRef(null)
  let mob7 = useRef(null)
  let mob8 = useRef(null)
  let mob9 = useRef(null)
  let mob10 = useRef(null)
  let mob11 = useRef(null)
  let mob12 = useRef(null)
  let mob13 = useRef(null)
  let redbox = useRef(null)
  let Nut = useRef(null)
  let Bread = useRef(null)
  let Tab = useRef(null)

  let right_1 = useRef(null)


  useEffect(() => {
    gsap.from([sliderText1], {duration: 1.7, y: 200, ease: Power3.easeOut, opacity: 0})
    gsap.from([bottom1], {duration:1.7, opacity:0, y:100, ease: Power3.easeOut})

    gsap.from(mob1, {duration:1, x:-399, ease: Power3.easeOut})
    gsap.from(mob2, {duration:1, x:399, ease: Power3.easeOut})




    gsap.from([sliderText2, bottom2], {
      // duration: 1,
      ease: Power3.easeOut,
      opacity: 0,
      y: 200,
      scrollTrigger: {
        trigger: '.app2',
        start: 'top 30%',
        end: 'top 0',
        scrub: 1,
        toggleActions: 'restart pause reverse pause'
      }
    })
    gsap.from([sliderText3, bottom3], {
      // duration: 1,
      ease: Power3.easeOut,
      opacity: 0,
      y: 200,
      scrollTrigger: {
        trigger: '.app3',
        start: 'top 30%',
        end: 'top 0',
        scrub: 1,
        toggleActions: 'restart pause reverse pause'
      }
    })
    gsap.from([sliderText4, bottom4], {
      // duration: 1,
      ease: Power3.easeOut,
      opacity: 0,
      y: 200,
      scrollTrigger: {
        trigger: '.app4',
        start: 'top 30%',
        end: 'top 0',
        scrub: 1,
        toggleActions: 'restart pause reverse pause'
      }
    })
    gsap.from([sliderText5, bottom5], {
      // duration: 1,
      ease: Power3.easeOut,
      opacity: 0,
      y: 200,
      scrollTrigger: {
        trigger: '.app5',
        start: 'top 30%',
        end: 'top 0',
        scrub: 1,
        toggleActions: 'restart pause reverse pause'
      }
    })
    gsap.from([sliderText6, bottom6], {
      // duration: 1,
      ease: Power3.easeOut,
      opacity: 0,
      y: 200,
      scrollTrigger: {
        trigger: '.app6',
        start: 'top 30%',
        end: 'top 0',
        scrub: 1,
        toggleActions: 'restart pause reverse pause'
      }
    })
    gsap.from([sliderText7, bottom7], {
      // duration: 1,
      ease: Power3.easeOut,
      opacity: 0,
      y: 200,
      scrollTrigger: {
        trigger: '.app7',
        start: 'top 30%',
        end: 'top 0',
        scrub: 1,
        toggleActions: 'restart pause reverse pause'
      }
    })





    gsap.to([right_1], {
      ease: Power3.easeOut,
      opacity: 0,
      scrollTrigger: {
        trigger: '.app1',
        start: 'bottom 75%',
        end: 'bottom 5%',
        scrub: true,
        toggleActions: 'restart pause reverse pause'
      }
    })

  
    gsap.from([mob4], {
      ease: Power3.easeOut,
      y: -1 * document.querySelector(".mob4").clientHeight,
      scrollTrigger : {
        trigger: '.app2',
        start: 'top 25%',
        end: 'top 0',
        scrub: 0.8,
        toggleActions: 'restart pause reverse pause'
      }
    })

    gsap.from([mob3], {
      ease: Power3.easeOut,
      y: document.querySelector(".mob3").clientHeight,
      scrollTrigger : {
        trigger: '.app2',
        start: 'top 25%',
        end: 'top 0',
        scrub: 0.8,
        toggleActions: 'restart pause reverse pause'
      }
    })

    gsap.from([mob6], {
      ease: Power3.easeOut,
      y: -1 * document.querySelector(".mob15").clientHeight,
      opacity: 0,
      scrollTrigger : {
        trigger: '.app3',
        start: 'top 25%',
        end: 'top 0',
        scrub: 0.8,
        toggleActions: 'restart pause reverse pause'
      }
    })

    gsap.from([mob5], {
      ease: Power3.easeOut,
      y: 1* document.querySelector(".mob14").clientHeight + 300,
      scrollTrigger : {
        trigger: '.app3',
        start: 'top 25%',
        end: 'top 0',
        scrub: 1,
        toggleActions: 'restart pause reverse pause'
      }
    })

    gsap.from([mob7], {
      ease: Power3.easeOut,
      y: document.querySelector(".mob5").clientHeight,
      scrollTrigger : {
        trigger: '.app4',
        start: 'top 10%',
        end: 'top 0',
        scrub: 0.8,
        toggleActions: 'restart pause reverse pause'
      }
    })

    gsap.from([mob8], {
      ease: Power3.easeOut,
      y: -1* document.querySelector(".mob6").clientHeight - 200,
      scrollTrigger : {
        trigger: '.app4',
        start: 'top 10%',
        end: 'top 0',
        scrub: 1.2,
        toggleActions: 'restart pause reverse pause'
      }
    })

    gsap.from([redbox], {
      ease: Power3.easeOut,
      y: -1* document.querySelector(".redbox").clientHeight,
      x : -1* document.querySelector(".redbox").clientWidth,
      scrollTrigger : {
        trigger: '.app4',
        start: 'top 10%',
        end: 'top 0',
        scrub: 0.8,
        toggleActions: 'restart pause reverse pause'
      }
    })

    gsap.from([Nut], {
      ease: Power3.easeOut,
      y: -1* document.querySelector(".nut").clientHeight,
      scrollTrigger : {
        trigger: '.app4',
        start: 'top 10%',
        end: 'top 0',
        scrub: 0.8,
        toggleActions: 'restart pause reverse pause'
      }
    })

    gsap.from([Bread], {
      ease: Power3.easeOut,
      y: document.querySelector(".bread").clientHeight,
      scrollTrigger : {
        trigger: '.app4',
        start: 'top 10%',
        end: 'top 0',
        scrub: 1.5,
        toggleActions: 'restart pause reverse pause'
      }
    })

    gsap.from([mob9,mob10,mob11,mob12,mob13], {
      ease: Power3.easeOut,
      opacity: 0,
      scrollTrigger : {
        trigger: '.app5',
        start: 'top 30%',
        end: 'top 0',
        scrub: 1.5,
        toggleActions: 'restart pause reverse pause'
      }
    })

    gsap.from([Tab], {
      ease: Power3.easeOut,
      y: document.querySelector(".tab").clientHeight + 400,
      scrollTrigger : {
        trigger: '.app6',
        start: 'top 25%',
        end: 'top 0',
        scrub: 1,
        toggleActions: 'restart pause reverse pause'
      }
    })

    
  }, [])


  

  return (
    <>
    <div ref={el => app1 = el} className="app app1">
      <div className="left">


        <div className="slider_container">
          <div
            ref={el => sliderText1 = el}
           className="slider_text">
            <h1>25M+ Downloads</h1>
            <p>on appstore & google playstore</p>
          </div>

          <img src={slider} alt="Slider" />

          <div className="img_background"></div>
        </div>


        <div ref={el => bottom1 = el} className="text_container">
          <div className="text_up">
            <img src={bestDigitalPng} alt="png" />
            <h1 >ABC 123</h1>
            <p >We are the best Web Development company in the world.</p>
          </div>
          <div className="text_down">
            <p>
              {`View Case Study -->`}
            </p>
            <p>
              SKIP
            </p>
          </div>
        </div>
      </div>



      <div ref={el => right_1 = el} className="right right1">
        <div className="mobile_holder">
          <img ref={el => mob1 = el} src={mobile1} alt="Mobile Phone" />
          <img ref={el => mob2 = el} src={mobile2} alt="Mobile Phone" />
        </div>

        <div className="message">
        <ChatBubbleIcon
          style={{color: 'white'}}
         />
        </div>
      </div>

    </div>



{/* ......................... second page.......................................  */}

    <div ref={el => app2 = el} className="app app2">
      <div className="left left2">


        <div className="slider_container">
          <div
          ref={el => sliderText2 = el}
           className="slider_text">
          <div className="left_para">
            <p
            >The Next Big</p>
          </div>
            <h1>Blockchain</h1>
            <p>Revolution</p>
          </div>

          <img src={slider} alt="Slider" />

          <div className="img_background img_background2"></div>
        </div>


        <div  ref={el => bottom2 = el} className="text_container">
          <div className="text_up text_up2">
          <img src={bestDigitalPng} alt="png" />
            <h1>ABC 234</h1>
            <p>We are the best Web Development company in the world.</p>
          </div>
          <div className="text_down">
            <p>
              {`Comming Soon`}
            </p>
            <p>
              SKIP
            </p>
          </div>
        </div>
      </div>



      <div className="right right2">

        <img ref={el => mob3 = el} className='mob3' src={mobile3} alt="mobile" />
        <img ref={el => mob4 = el}  className='mob4' src={mobile4} alt="mobile" />

        <div className="message">
        <ChatBubbleIcon
          style={{color: 'white'}}
         />
        </div>
      </div>

    </div>

    {/* ......................... second page.......................................  */}





    {/* ...............................kast.................................................  */}

    <div className="app app3">
      <div className="left leftlast">


        <div className="slider_container">
          <div ref={el => sliderText3 = el} className="slider_text">
          <div className="left_para">
            <p
            >powered by advance</p>
          </div>
            <img style={{position: 'static'}}
             className='nasa' src={nasa} alt="nasa" />
            {/* <h1>hello</h1> */}
            <p>algorithm</p>
          </div>

          <img src={slider} alt="Slider" />

          <div className="img_background"></div>
        </div>


        <div ref={el => bottom3 = el} className="text_container">
          <div className="text_up text_up2">
          <img src={bestDigitalPng} alt="png" />
            <h1>ABC 345</h1>
            <p>We are the best Web Development company in the world.</p>
          </div>
          <div className="text_down">
            <p>
              {`View Case Study -->`}
            </p>
            <p>
              SKIP
            </p>
          </div>
        </div>
      </div>



      <div className="right rightlast">

        <img ref={el => mob5 = el} className='mob14' src={mobile14} alt="mobile" />
        <img ref={el => mob6 = el} className='mob15' src={mobile15} alt="mobile" />
        

        <div className="message">
        <ChatBubbleIcon
          style={{color: 'white'}}
         />
        </div>
      </div>

    </div>



    {/* ...............................end ofkast.................................................  */}



    {/* ...................... third page............................................  */}


    <div className="app app4">
      <div className="left left3">


        <div className="slider_container">
          <div ref={el => sliderText4 = el} className="slider_text">
          <div className="left_para">
            <p
            >Redefining</p>
          </div>
            <h1>UX Strategy</h1>
            <p>and UI design</p>
          </div>

          <img src={slider} alt="Slider" />

          <div className="img_background"></div>
        </div>


        <div ref={el => bottom4 = el} className="text_container">
          <div className="text_up text_up2">
          <img src={bestDigitalPng} alt="png" />
            <h1>ABC 456</h1>
            <p>We are the best Web Development company in the world.</p>
          </div>
          <div className="text_down">
            <p>
              {`View Case Study -->`}
            </p>
            <p>
              SKIP
            </p>
          </div>
        </div>
      </div>



      <div className="right right3">

        <img ref={el=>mob7 = el} className='mob5' src={mobile5} alt="mobile" />
        <img ref={el=>mob8 = el} className='mob6' src={mobile6} alt="mobile" />
        <img style={{zIndex:-1}} ref={el=>redbox = el} className='redbox' src={readbox} alt="readbox" />
        <img ref={el=>Nut = el} className='nut' src={nut} alt="nut" />
        <img ref={el=>Bread = el} className='bread' src={bread} alt="bread" />
        

        <div className="message">
        <ChatBubbleIcon
          style={{color: 'white'}}
         />
        </div>
      </div>

    </div>



    {/* ......................end of third page............................................  */}






    {/* .................fourth page.....................................................  */}

    <div className="app app5">
      <div className="left left4">


        <div className="slider_container">
          <div ref={el => sliderText5 = el} className="slider_text">
          <div className="left_para">
            <p
            >Text Headline</p>
          </div>
            <h1>Text Headline</h1>
            <p>Footer Headline</p>
          </div>

          <img src={slider} alt="Slider" />

          <div className="img_background"></div>
        </div>


        <div ref={el => bottom5 = el} className="text_container">
          <div className="text_up text_up2">
          <img src={bestDigitalPng} alt="png" />
            <h1>ABC 567</h1>
            <p>We are the best Web Development company in the world.</p>
          </div>
          <div className="text_down">
            <p>
              {`View Case Study -->`}
            </p>
            <p>
              SKIP
            </p>
          </div>
        </div>
      </div>



      <div className="right right4">

        <img ref={el => mob9 = el} className='mob7' src={mobile7} alt="mobile" />
        <img ref={el => mob10 = el} className='mob8' src={mobile8} alt="mobile" />
        <img ref={el => mob11 = el} className='mob9' src={mobile9} alt="mobile" />
        <img ref={el => mob12 = el} className='mob10' src={mobile10} alt="mobile" />
        <img ref={el => mob13 = el} className='mob11' src={mobile11} alt="mobile" />
        
        
        <img className='bg' src={bg} alt="" />

        <div className="message">
        <ChatBubbleIcon
          style={{color: 'white'}}
         />
        </div>
      </div>

    </div>

    {/* .................end of fourth page.....................................................  */}






    {/* ...................... fifth..........................................  */}

    <div className="app app6">
      <div className="left left5">


        <div className="slider_container">
          <div ref={el => sliderText6 = el} className="slider_text">
          <div className="left_para">
            <p
            >Developing ERP Solution</p>
          </div>
            <h1>Text Headline</h1>
            <p>In furniture Industry</p>
          </div>

          <img src={slider} alt="Slider" />

          <div className="img_background"></div>
        </div>


        <div ref={el => bottom6 = el} className="text_container">
          <div className="text_up text_up2">
          <img src={bestDigitalPng} alt="png" />
            <h1>ABC 678</h1>
            <p>We are the best Web Development company in the world.</p>
          </div>
          <div className="text_down">
            <p>
              {`View Case Study -->`}
            </p>
            <p>
              SKIP
            </p>
          </div>
        </div>
      </div>



      <div className="right right5">
        
        <img ref={el => Tab = el} src={tab} alt="tab" className="tab" />
        
        <img className='bg' src={bg} alt="" />

        <div className="message">
        <ChatBubbleIcon
          style={{color: 'white'}}
         />
        </div>
      </div>

    </div>


    {/* ...............................end of fifth...................................  */}




    {/* ...............................sixth...................................  */}

    <div className="app app7">
      <div className="left left6">


        <div className="slider_container">
          <div ref={el => sliderText7 = el} className="slider_text">
          <div className="left_para">
            <p
            >Biggest Classfield</p>
          </div>
            <h1>East Asia</h1>
            <p>Country</p>
          </div>

          <img src={slider} alt="Slider" />

          <div className="img_background"></div>
        </div>


        <div ref={el => bottom7 = el} className="text_container">
          <div className="text_up text_up5">
          <img src={mobileapp} alt="png" />
            <h1>ABC 23478</h1>
            <p>We are the best Web Development company in the world.</p>
          </div>
          <div className="text_down">
            <p>
              {`View Case Study -->`}
            </p>
            <p>
              SKIP
            </p>
          </div>
        </div>
      </div>



      <div className="right right6">
        
        <img src={mobile12} alt="mobile" className="mob12 mob" />
        <img src={mobile13} alt="mobile" className="mob13 mob" />

        <div className="message">
        <ChatBubbleIcon
          style={{color: 'white'}}
         />
        </div>
      </div>

    </div>


    {/* ...............................end of sixth...................................  */}
    </>
  );
}

export default App;
