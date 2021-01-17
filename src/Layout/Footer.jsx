import { Component } from 'react';

class Footer extends Component{
    constructor(props){
      super(props)

      this.state = {

      }
    }

    render(){
        return (
            <>
              <div className="footerSection">
                <div className="container">
                  <div className="footerBlock">
                    <div className="footerLogo">
                      <p>© ChatImmi 2020-2021 | contact@ChatImmi.com</p>
                    </div>
                    <div className="footerMenu">
                      <ul>
                        <li><a href>Contact us</a></li>
                        <li><a href>Privacy Policy</a></li>
                        <li><a href>Terms &amp; Conditions</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Start Modal */}
              <div className="modal fade csModal" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog loginPage" role="document">
                  <div className="modal-content usertypeMdl">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Login Account</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body usercontantsec">
                      <div className="userseletType">
                        <ul className="usTypeBlock">
                          <li>
                            <a className="unity-link" href="javascript:void(0)">
                              <div className="unity-box">
                                <div className="unity-icon">
                                  <img src="/public/assets/website/images/user_ico.png" alt="" />
                                </div>
                                <div className="unity-title">
                                  User
                                </div>
                                <div className="unity-details">
                                  Login as user
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a className="unity-link" href="javascript:void(0)">
                              <div className="unity-box">
                                <div className="unity-icon">
                                  <img src="/public/assets/website/images/school.png" alt="" />
                                </div>
                                <div className="unity-title">
                                  Study
                                </div>
                                <div className="unity-details">
                                  Login as Study
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a className="unity-link" href="javascript:void(0)">
                              <div className="unity-box">
                                <div className="unity-icon">
                                  <img src="/public/assets/website/images/expert_ico.png" alt="" />
                                </div>
                                <div className="unity-title">
                                  Immigration
                                </div>
                                <div className="unity-details">
                                  Login as Immigration
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                        {/* <a href="javascript:void(0);" id="changeUsType" class="userTyp">Change User Type</a> */}
                        <div className="loginform csForm" id="loginForm">
                          <form id="user_login" method="post">
                            <div className="form-group basic-info">
                              <label className="inputLabel">Email</label>
                              <input type="text" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter Email" />
                            </div>
                            <div className="form-group basic-info">
                              <label className="inputLabel">Password</label>
                              <input type="password" className="form-control" name="password" id="password" aria-describedby="emailHelp" placeholder="Enter Password" />
                            </div>
                            <div className="form-group text-right">
                              <div className="csLink forgotpass">
                                <a href="#" data-toggle="modal" data-target="#exampleModal">Forgot Password?</a>
                              </div>
                            </div>
                            <div className="form-actions btn-delete-edt subscribeBtn book-btn">
                              <a className="btn btnTheme mtr-1" id="loginSubmit">Login</a>
                            </div>
                            &lt;% if( typeof csrfToken!=='undefined'){'{'} %&gt;
                            <input type="hidden" name="_csrf" defaultValue="<%= csrfToken %>" />
                            &lt;% {'}'} %&gt;
                            <div className="createLink">
                              <div className="csLink">
                                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div> */}
                  </div>
                </div>
              </div>
            </>
          );
    }
}

export default Footer