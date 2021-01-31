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


class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="mainWrapper">
                    <section className="profilePage">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="prInfo">
                                        <div className="prInfoCnt">
                                            <img src="<%= user.user_details.avatar%>" />
                                            <h2>&lt;%= user.user_details.full_name%&gt;</h2>
                                        </div>
                                        <div className="contactInfo">
                                            <ul>
                                                <li><span className="fas fa-envelope" /> &lt;%= user.user_details.email%&gt;</li>
                &lt;% if(user.user_details.contact_number){'{'}%&gt;
                <li><span className="fas fa-phone-alt" /> &lt;%= user.user_details.country_dial %&gt;-&lt;%= user.user_details.contact_number%&gt;</li>
                &lt;% {'}'}%&gt;
              </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="profileCnt">
                                        <div className="prTab">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="csTab2-tab" data-toggle="tab" href="#csTab2" role="tab" aria-controls="csTab2" aria-selected="false">Subscription</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="prTabCnt">
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active" id="csTab2" role="tabpanel" aria-labelledby="csTab2-tab">
                                                    <div className="addedSubPlan">
                                                        <div className="addSubsPlan">
                                                            <img src="/public/assets/website/images/receipt.png" />
                                                            <h2>Add Subscription Plan</h2>
                                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                            <a href="subscription.html" className="btn btnTheme">Add Subscription</a>
                                                        </div>
                                                        <div className="addSubsPlan mt-4">
                                                            <img src="/public/assets/website/images/receipt.png" />
                                                            <h2>Basic Plan</h2>
                                                            <div className="subsPrice mt-3">
                                                                <h2>$150</h2>
                                                                <p>Per Year</p>
                                                            </div>
                                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                            <div className="subBillingDate">
                                                                <p>Subscription End In : 25 Days</p>
                                                                <p>Next Billing Date : 25/01/2021</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </>
        )
    }
}

export default Profile