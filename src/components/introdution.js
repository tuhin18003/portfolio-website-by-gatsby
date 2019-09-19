// import { Link } from "gatsby"
import React from "react"

//get components
import Aboutme from "./introduction/overview"
import PersonalInfo from "./introduction/personal_info"
import Languages from "./introduction/languages"
import ProfessionalSkills from "./introduction/ProfessionalSkills"

const Introduction = () => (
   <div className="crt-paper-layers crt-animate">
                  <div className="crt-paper clear-mrg clearfix">
                     <div className="crt-paper-cont paper-padd clear-mrg">
                        <section id="about" className="section padd-box brd-btm">
                           <div className="row">
                              <div className="col-sm-12 clear-mrg text-box">
                                    <Aboutme />
                              </div>
                           </div>
                        </section>
                        <section id="prof-skills" className="section padd-box brd-btm">
                           <div className="row">
                              <div className="col-sm-6 clear-mrg">
                                 <PersonalInfo />
                              </div>
                              <div className="col-sm-6 clear-mrg">
                                 <Languages />
                              </div>
                           </div>
                        </section>
                        <section id="skills" className="section padd-box brd-btm">
                           <div className="row">
                              <div className="col-sm-6 clear-mrg">
                                 <ProfessionalSkills />
                                 <h3 className="title-thin text-muted">professional skills</h3>
                                 <div className="progress-line crt-animate" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    <strong className="progress-title">Adobe Creative Suite</strong>
                                    <div className="progress-bar" data-text="95%" data-value="0.95"></div>
                                 </div>
                                 <div className="progress-line crt-animate" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <strong className="progress-title">Corel Draw</strong>
                                    <div className="progress-bar" data-text="75%" data-value="0.75"></div>
                                 </div>
                                 <div className="progress-line crt-animate" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                    <strong className="progress-title">Sketch</strong>
                                    <div className="progress-bar" data-text="85%" data-value="0.85"></div>
                                 </div>
                              </div>
                              <div className="col-sm-6 clear-mrg">
                                 <h3 className="title-thin text-muted">additional skills</h3>
                                 <div className="row">
                                    <div className="col-xs-4 text-center">
                                       <div className="progress-chart crt-animate" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                          <div className="progress-bar" data-text="95%" data-value="0.95"></div>
                                          <strong className="progress-title">UX Design</strong>
                                       </div>
                                    </div>
                                    <div className="col-xs-4 text-center">
                                       <div className="progress-chart crt-animate" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">
                                          <div className="progress-bar" data-text="92%" data-value="0.92"></div>
                                          <strong className="progress-title">UI Design</strong>
                                       </div>
                                    </div>
                                    <div className="col-xs-4 text-center">
                                       <div className="progress-chart crt-animate" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                          <div className="progress-bar" data-text="90%" data-value="0.9"></div>
                                          <strong className="progress-title">Drawing</strong>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </section>
                        <section id="data" className="section padd-box">
                           <div className="row">
                              <div className="col-sm-6 clear-mrg">
                                 <h3 className="title-thin text-muted">styled list</h3>
                                 <ul className="styled-list clear-mrg">
                                    <li>Customer oriented</li>
                                    <li>Handling Multi Tasks</li>
                                    <li>Creative Thinking</li>
                                    <li>Self Motivated</li>
                                    <li>Managerial Skills</li>
                                 </ul>
                              </div>
                              <div className="col-sm-6 clear-mrg">
                                 <h3 className="title-thin text-muted">icon list</h3>
                                 <ul className="crt-icon-list">
                                    <li>Music is my Life</li>
                                    <li>I love music</li>
                                    <li>More Music</li>
                                    <li>Music is everything</li>
                                 </ul>
                              </div>
                           </div>
                        </section>
                     </div>
                  </div>
               </div>
   

)


export default Introduction
