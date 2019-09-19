// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//import images
import ImgAvatar from './images/avatar'
import IconFb from './images/fbIcon'
import IconGithub from './images/githubIcon'
import IconTwitter from './images/twitterIcon'
import IconLinkedin from './images/linkedinIcon'
import IconYoutube from './images/youtubeIcon'

const Sidebar = ({ pName, pTitle }) => (
    <div id="crtSideBoxWrap">
    <div id="crtSideBox" className="clear-mrg">
       <div className="crt-side-box-1 clear-mrg">
          <div id="wdg-sticky-start"></div>
          <aside className="widget clearfix certy_widget_card">
             <div className="crt-card bg-primary text-center">
                <div className="crt-card-avatar"> <span className="crt-avatar-state"> 
                     <span className="crt-avatar-state1"> 
                        <ImgAvatar />
                     </span> 
                     <span className="crt-avatar-state2"> 
                        <img className="avatar avatar-195" alt="" src="#"/> 
                     </span> 
                  </span>
                </div>
                <div className="crt-card-info clear-mrg">
                   <h2 className="text-upper">{pName}</h2>
                   <p className="text-muted">{pTitle}</p>
                   <ul className="crt-social clear-list">
                        <li>
                         <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pxlaboratory/">
                              <IconGithub />
                         </a>
                      </li>
                      <li>
                         <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pxlaboratory/">
                              <IconFb />
                         </a>
                      </li>
                      <li>
                         <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pxlaboratory/">
                              <IconTwitter />
                         </a>
                      </li>
                      <li>
                         <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pxlaboratory/">
                              <IconLinkedin />
                         </a>
                      </li>
                      <li>
                         <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pxlaboratory/">
                              <IconYoutube />
                         </a>
                      </li>
                   </ul>
                </div>
             </div>
          </aside>
          <aside className="widget clearfix widget_text">
             <div className="textwidget">
                <center><a className="btn btn-lg btn-default" target="_blank" rel="noopener noreferrer"  href="">DOWNLOAD CV</a></center>
             </div>
          </aside>
       </div>
    </div>
 </div>
)

Sidebar.propTypes = {
  pName: PropTypes.string,
  pTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  pName: ``,
  pTitle: ``,
}

export default Sidebar
