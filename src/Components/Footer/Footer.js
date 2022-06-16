import React from 'react'
import './Footer.css'



function Footer() {
  return (
   
    <div>
        <footer className='ftr'>
      <div class="container ">
        <div class="row width:100%">
          <div class="col md-12 text-center text-white width:100%">
          <a href="https://www.facebook.com/mgmits.official">
       <img className="fb" src="https://mgmits.ac.in/wp-content/themes/muthoot/images/fb.gif"></img></a>
       <a href="https://twitter.com/mitskochi">
       <img className="twi" src="https://mgmits.ac.in/wp-content/themes/muthoot/images/tw.gif"></img></a>
       <a href="https://www.youtube.com/channel/UCdJCHkkG1NaCeFmVZ1S7lKQ">
       <img className="yt" src="https://mgmits.ac.in/wp-content/themes/muthoot/images/yt.gif"></img></a>
            <p className='cprt'><i class="far fa-copyright"></i>Copyrights</p>
          </div>
        </div>
      </div>
    </footer>
    </div>

    

  )
}

export default Footer