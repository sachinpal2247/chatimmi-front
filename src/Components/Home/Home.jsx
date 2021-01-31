import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from "../../assets/website/images/slider1.png"
import slider2 from "../../assets/website/images/slider2.png"
import slider3 from "../../assets/website/images/slider3.png"
import profileuser from "../../assets/website/images/profile-user.png"
import schoolbuilding from "../../assets/website/images/school-building.png"
import rating from "../../assets/website/images/rating.png"
import shap2 from "../../assets/website/images/shape2.png"
import shap4 from "../../assets/website/images/shape4.png"
import shap5 from "../../assets/website/images/shape5.png"
import shap6 from "../../assets/website/images/shape6.png"
import shap7 from "../../assets/website/images/shape7.png"

import saasmobile2 from "../../assets/website/images/saas-mobile2.png"
import saasmobile1 from "../../assets/website/images/saas-mobile1.png"
import appstore from "../../assets/website/images/app-store.png"
import googleplay from "../../assets/website/images/google-play.png"







class Home extends Component{
    constructor(props){
      super(props)

      this.state = {

      }
    }

    render(){
      return (
        <>
          {/* Banner section */}
          <div className="chat-banner-area" id="homeSec">
            <Carousel className="owl-carousel owl-theme bannerSlider">
              <div className="item" style={{background: 'url('+slider1+')'}}>
                <div className="sliderCnt">
                  <div className="container">
                    <div className="chat-banner-content">
                      <h1>Make Your Business Easier &amp; Simple</h1>
                      <p>This web site is an online free chat rooms. With us you can meet new friends from all over the world. No download, no setup &amp; no registration needed.</p>
                    </div>
                    <div className="userTypeblk">
                      <div className="userTypeItm">
                        <div className="inner-box wow fadeInLeft animated">
                          <div className="content">
                            <div className="icon">
                              <img src={profileuser} alt="" />
                            </div>
                            <h4>Users</h4>
                            <div className="text">Login as user</div>
                            {/* <span class="arrow flaticon-arrow-pointing-to-right">
                          <i class="fas fa-arrow-right"></i>
                        </span> */}
                          </div>
                        </div>
                      </div>
                      <div className="userTypeItm">
                        <div className="inner-box wow fadeInLeft animated">
                          <div className="content">
                            <div className="icon">
                              <img src={schoolbuilding} alt="" />
                            </div>
                            <h4>Study</h4>
                            <div className="text">Login as study</div>
                            {/* <span class="arrow flaticon-arrow-pointing-to-right">
                            <i class="fas fa-arrow-right"></i>
                          </span> */}
                          </div>
                        </div>
                      </div>
                      <div className="userTypeItm">
                        <div className="inner-box wow fadeInLeft animated">
                          <div className="content">
                            <div className="icon">
                              <img src={rating} alt="" />
                            </div>
                            <h4>Immigration</h4>
                            <div className="text">Login as immigration</div>
                            {/* <span class="arrow flaticon-arrow-pointing-to-right">
                            <i class="fas fa-arrow-right"></i>
                          </span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-shape-content">
                    <img src={shap2} className="chat-shape-2" alt="Shape" />
                      <img src={shap5} className="chat-shape-3" alt="Shape" />
                      <img src={shap4} className="chat-shape-4" alt="Shape" />
                      <img src={shap5} className="chat-shape-5" alt="Shape" />
                      <img src={shap6} className="chat-shape-6" alt="Shape" />
                      <img src={shap7} className="chat-shape-7" alt="Shape" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{background: 'url('+slider2+')'}}>
                <div className="sliderCnt">
                  <div className="container">
                    <div className="chat-banner-content">
                      <h1>Make Your Business Easier &amp; Simple</h1>
                      <p>This web site is an online free chat rooms. With us you can meet new friends from all over the world. No download, no setup &amp; no registration needed.</p>
                    </div>
                    <div className="userTypeblk">
                      <div className="userTypeItm">
                        <div className="inner-box wow fadeInLeft animated">
                          <div className="content">
                            <div className="icon">
                              <img src={profileuser} alt="" />
                            </div>
                            <h4>Users</h4>
                            <div className="text">Login as user</div>
                            {/* <span class="arrow flaticon-arrow-pointing-to-right">
                          <i class="fas fa-arrow-right"></i>
                        </span> */}
                          </div>
                        </div>
                      </div>
                      <div className="userTypeItm">
                        <div className="inner-box wow fadeInLeft animated">
                          <div className="content">
                            <div className="icon">
                              <img src={schoolbuilding} alt="" />
                            </div>
                            <h4>Study</h4>
                            <div className="text">Login as study</div>
                            {/* <span class="arrow flaticon-arrow-pointing-to-right">
                            <i class="fas fa-arrow-right"></i>
                          </span> */}
                          </div>
                        </div>
                      </div>
                      <div className="userTypeItm">
                        <div className="inner-box wow fadeInLeft animated">
                          <div className="content">
                            <div className="icon">
                              <img src={rating} alt="" />
                            </div>
                            <h4>Immigration</h4>
                            <div className="text">Login as immigration</div>
                            {/* <span class="arrow flaticon-arrow-pointing-to-right">
                            <i class="fas fa-arrow-right"></i>
                          </span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-shape-content">
                    <img src={shap2} className="chat-shape-2" alt="Shape" />
                      <img src={shap5} className="chat-shape-3" alt="Shape" />
                      <img src={shap4} className="chat-shape-4" alt="Shape" />
                      <img src={shap5} className="chat-shape-5" alt="Shape" />
                      <img src={shap6} className="chat-shape-6" alt="Shape" />
                      <img src={shap7} className="chat-shape-7" alt="Shape" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{background: 'url('+slider3+')'}}>
                <div className="sliderCnt">
                  <div className="container">
                    <div className="chat-banner-content">
                      <h1>Make Your Business Easier &amp; Simple</h1>
                      <p>This web site is an online free chat rooms. With us you can meet new friends from all over the world. No download, no setup &amp; no registration needed.</p>
                    </div>
                    <div className="userTypeblk">
                      <div className="userTypeItm">
                        <div className="inner-box wow fadeInLeft animated">
                          <div className="content">
                            <div className="icon">
                              <img src={profileuser} alt="" />
                            </div>
                            <h4>Users</h4>
                            <div className="text">Login as user</div>
                            {/* <span class="arrow flaticon-arrow-pointing-to-right">
                          <i class="fas fa-arrow-right"></i>
                        </span> */}
                          </div>
                        </div>
                      </div>
                      <div className="userTypeItm">
                        <div className="inner-box wow fadeInLeft animated">
                          <div className="content">
                            <div className="icon">
                              <img src={schoolbuilding} alt="" />
                            </div>
                            <h4>Study</h4>
                            <div className="text">Login as study</div>
                            {/* <span class="arrow flaticon-arrow-pointing-to-right">
                            <i class="fas fa-arrow-right"></i>
                          </span> */}
                          </div>
                        </div>
                      </div>
                      <div className="userTypeItm">
                        <div className="inner-box wow fadeInLeft animated">
                          <div className="content">
                            <div className="icon">
                              <img src={{rating}} alt="" />
                            </div>
                            <h4>Immigration</h4>
                            <div className="text">Login as immigration</div>
                            {/* <span class="arrow flaticon-arrow-pointing-to-right">
                            <i class="fas fa-arrow-right"></i>
                          </span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-shape-content">
                      <img src={shap2} className="chat-shape-2" alt="Shape" />
                      <img src={shap5} className="chat-shape-3" alt="Shape" />
                      <img src={shap4} className="chat-shape-4" alt="Shape" />
                      <img src={shap5} className="chat-shape-5" alt="Shape" />
                      <img src={shap6} className="chat-shape-6" alt="Shape" />
                      <img src={shap7} className="chat-shape-7" alt="Shape" />
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          {/* Features section */}
          <div className="FeaturesSection" id="fetSec">
            <div className="container">
              <div className="section-title">
                <span>Our Features</span>
                <h2>Best Features Make Your Task Easier</h2>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
              </div>
              <div className="row row mb-40">
                <div className="col-lg-4 col-sm-6">
                  <div className="saas-service-card">
                    <div className="icon bg-1">
                      <i className="fas fa-volume-up" />
                    </div>
                    <h3>Business Marketing</h3>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="saas-service-card">
                    <div className="icon bg-2">
                      <i className="fas fa-chart-pie" />
                    </div>
                    <h3>Boost SEO Ranking</h3>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="saas-service-card">
                    <div className="icon bg-3">
                      <i className="fas fa-briefcase" />
                    </div>
                    <h3>Office Management</h3>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="saas-service-card">
                    <div className="icon bg-4">
                      <i className="fas fa-lock" />
                    </div>
                    <h3>File Security</h3>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="saas-service-card">
                    <div className="icon bg-5">
                      <i className="fas fa-user-alt" />
                    </div>
                    <h3>Client Managing</h3>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="saas-service-card">
                    <div className="icon bg-6">
                      <i className="fas fa-server" />
                    </div>
                    <h3>Data Collection</h3>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* download section */}
          <div className="DownloadSection" id="downSec">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="download-text">
                    <div className="section-titleDLD">
                      <span>App Download</span>
                      <h2>Also Available in Mobile App Format, So You Can Connect To Your Business All Time</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                    <div className="app-image">
                      <a href="#">
                        <img src={googleplay} className="play-stroe" alt="Image" />
                      </a>
                      <a href="#">
                        <img src={appstore} className="apple" alt="Image" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="download-image">
                    <img src={saasmobile1} className="mobile-1" alt="Image" />
                    <img src={saasmobile2} className="mobile-2" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
}

export default Home