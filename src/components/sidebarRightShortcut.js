import { Link } from "gatsby"
import React from "react"

//import images
import ImgShorcutIcon from './images/rightMenuShortCurtIcon'

const ShortcurtIcon = () => (
   <div id="crtNavWrap" className="hidden-sm hidden-xs">
   <div id="crtNavInner" className="crt-sticky">
      <div className="crt-nav-cont">
         <div id="crtNavScroll">
            <nav id="crtNav" className="crt-nav">
               <div className="crt-nav-img"> 
                  <Link to=""data-tooltip="About me" >
                        <ImgShorcutIcon />
                  </Link>
               </div>
               <ul className="clear-list">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-40"><a href="designer/index.html#portfolio" data-tooltip="Portfolio"><span className="crt-icon crt-icon-portfolio"></span></a></li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-41"><a href="designer/index.html#exp" data-tooltip="Experience"><span className="crt-icon crt-icon-experience"></span></a></li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-42"><a href="designer/index.html#ref" data-tooltip="References"><span className="crt-icon crt-icon-references"></span></a></li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-79"><a href="designer/index.html#blog" data-tooltip="Blog"><span className="crt-icon crt-icon-blog"></span></a></li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-97"><a href="designer/index.html#calendar" data-tooltip="Calendar"><span className="crt-icon crt-icon-calendar"></span></a></li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-43"><a href="designer/index.html#contacts" data-tooltip="Contacts"><span className="crt-icon crt-icon-contact"></span></a></li>
               </ul>
            </nav>
         </div>
         <div id="crtNavTools" className="hidden"> <span className="crt-icon crt-icon-dots-three-horizontal"></span><button id="crtNavArrow" className="clear-btn"> <span className="crt-icon crt-icon-chevron-thin-down"></span> </button></div>
      </div>
      <div className="crt-nav-btm"></div>
   </div>
</div>
)


export default ShortcurtIcon
