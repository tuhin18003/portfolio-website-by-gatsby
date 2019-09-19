import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//import images
import ImgCode from './images/code'

const Header = ({ siteTitle }) => (
  <header id="crtHeader" className="crt-logo-in">
            <div className="crt-head-inner crt-container">
               <div className="crt-container-sm">
                  <div className="crt-head-row">
                     <div id="crtHeadCol1" className="crt-head-col text-left"> 
                        <Link id="crtLogo" className="crt-logo" to="/"> 
                          <ImgCode />
                          <span className="title-icon"> <code>{siteTitle}</code></span> 
                        </Link>
                     </div>
                     <div id="crtHeadCol3" className="crt-head-col text-right"> <button id="crtSidebarBtn" className="btn btn-icon btn-shade">
                        <span className="crt-icon crt-icon-side-bar-icon"></span> </button>
                     </div>
                  </div>
               </div>
            </div>
            <nav id="crtNavSm" className="crt-nav hidden-lg hidden-md">
               <div className="crt-avatar"> <a href="##about" data-tooltip="About me"> 
               <img alt="" src="#" className="avatar avatar-42" />                                                               
                </a></div>
               <ul className="clear-list">
                  <li id="menu-item-40" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-40"><a href="##portfolio" data-tooltip="Portfolio"><span className="crt-icon crt-icon-portfolio"></span></a></li>
                  <li id="menu-item-41" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-41"><a href="##exp" data-tooltip="Experience"><span className="crt-icon crt-icon-experience"></span></a></li>
                  <li id="menu-item-42" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-42"><a href="##ref" data-tooltip="References"><span className="crt-icon crt-icon-references"></span></a></li>
                  <li id="menu-item-79" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-79"><a href="##blog" data-tooltip="Blog"><span className="crt-icon crt-icon-blog"></span></a></li>
                  <li id="menu-item-97" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-97"><a href="##calendar" data-tooltip="Calendar"><span className="crt-icon crt-icon-calendar"></span></a></li>
                  <li id="menu-item-43" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-43"><a href="##contacts" data-tooltip="Contacts"><span className="crt-icon crt-icon-contact"></span></a></li>
               </ul>
            </nav>
         </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
