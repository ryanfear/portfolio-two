import React, { Component } from 'react';
import Typed from 'react-typed';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Hi. I'm {resumeData.name}.</h1>
               <h3 style={{position: 'static', color:'#fff', fontFamily:'ralewaythin '}}> I enjoy doing lots of things.
               <br/> 
               {<Typed 
                    strings={[
                      ' Climbing',
                      ' Gaming',
                      ' Camping',
                      ' Travel',
                      ' Reading']} 
                      typeSpeed={100}
                      backSpeed={70}
                      backDelay={800}
                      showCursor={false}
                      loop
                      >
               </Typed>}

                <br/>
                
               {resumeData.roleDescription}
               
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         {/* <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p> */}

      </header>
      </React.Fragment>
    );
  }
}