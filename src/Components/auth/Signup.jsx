import { Component } from 'react';

class Signup extends Component{
    constructor(props){
      super(props)

      this.state = {

      }
    }

    render(){
      return (
        <>
        <section className="signupSec">
        <div className="container-fluid">
          <div className="row justify-content-center lsRow">
            <div className="col-md-6 lsLeftBlk">
              <div className="lsUserType">
                <div className="lsHead">
                  <h1>Welcome to Chatimmi...</h1>
                  <h5>Create New Account</h5>
                  <p>Give us some of your information to get free access to Chatimmi.</p><p>
                  </p></div>
                <div className="lsUsTypeSec">
                  <div className>
                    <label>
                      <input type="radio" name="usType" defaultChecked defaultValue="userForm" />
                      <div className="usInfo">
                        <img src="/public/assets/website/images/profile-user.png" />
                        <h2>User</h2>
                      </div>
                    </label>
                  </div>
                  <div className>
                    <label>
                      <input type="radio" name="usType" defaultValue="schoolForm" />
                      <div className="usInfo">
                        <img src="/public/assets/website/images/school-building.png" />
                        <h2>Study</h2>
                      </div>
                    </label>
                  </div>
                  <div className>
                    <label>
                      <input type="radio" name="usType" defaultValue="expertForm" />
                      <div className="usInfo">
                        <img src="/public/assets/website/images/rating.png" />
                        <h2>Immigration</h2>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="lsForm csForm">
                <div className="lsFormBox">
                  {/* <div class="lsHead">
	    						<h1>Create New Account</h1>
	    						<p>Give us some of your information to get free access to Chatimmi.<p>
	    					</div> */}
                  <div className="formBox userForm">
                    <form id="user_signup">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="text-center">
                            <div className="upload-pic mb-5">
                              <img src="/public/assets/website/images/user-acnt-icn.png" id="pImg" />
                              <div className="text-center upload-icon">
                                <input accept="image/*" className="inputfile hideDiv" id="profilePicture" name="profilePicture" onchange="document.getElementById('pImg').src = window.URL.createObjectURL(this.files[0])" style={{display: 'none'}} type="file" />
                                <label htmlFor="profilePicture" className="upload_pic">
                                  <span className="fas fa-camera" />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="inputLabel">Full Name</label>
                            <input type="text" name="full_name" id="full_name" className="form-control" placeholder="Enter Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="inputLabel">Email</label>
                            <input type="text" id="email" name="email" className="form-control" placeholder="Enter Email" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="inputLabel">Password</label>
                            <input type="password" id="password" name="password" className="form-control" placeholder="Enter Password" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="inputLabel">Confirm Password</label>
                            <input type="password" id="confirm_password" name="confirm_password" className="form-control" placeholder="Confirm Password" />
                          </div>
                          <input type="hidden" name="user_type" id="user_type" defaultValue={1} />
                          <input type="hidden" name="_csrf" defaultValue="<%= csrfToken %>" />
                        </div>
                        <div className="col-md-12">
                          <a className="btn btnTheme mt-2" id="userSignupSubmit">Create Account</a>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="formBox schoolForm" style={{display: 'none'}}>
                    <form id="expert_signup">
                      <div className="form-wizard">
                        <fieldset>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="text-center">
                                <div className="upload-pic mb-5">
                                  <img src="/public/assets/website/images/user-acnt-icn.png" id="pImg" />
                                  <div className="text-center upload-icon">
                                    <input accept="image/*" className="inputfile hideDiv" id="file-2" name="profileImage" onchange="document.getElementById('pImg').src = window.URL.createObjectURL(this.files[0])" style={{display: 'none'}} type="file" />
                                    <label htmlFor="file-2" className="upload_pic">
                                      <span className="fas fa-camera" />
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="inputLabel">Full Name</label>
                                <input type="text" name="full_name" id="full_name" className="form-control" placeholder="Enter Name" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="inputLabel">Email</label>
                                <input type="text" name="email" id="email" className="form-control" placeholder="Enter Email" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="inputLabel">Phone No</label>
                                <input type="text" name="contact_number" id="contact_number" className="form-control phone" placeholder="Enter Phone No" />
                                <input type="hidden" name="country_code" id="country_code" defaultValue="us" />
                                <input type="hidden" name="dial_code" id="dial_code" defaultValue={+1} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="inputLabel">Password</label>
                                <input type="password" name="password" id="password_expert" className="form-control" placeholder="Enter Password" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="inputLabel">Confirm Password</label>
                                <input type="password" name="confirm_password" className="form-control" placeholder="Confirm Password" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="inputLabel">Bio</label>
                                <textarea rows={3} name="bio" id="bio" className="form-control" placeholder="Write About You..." defaultValue={""} />
                              </div>
                              <input type="hidden" name="user_type" id="user_type" defaultValue={2} />
                              <input type="hidden" name="_csrf" defaultValue="<%= csrfToken %>" />
                            </div>
                            <div className="col-md-12">
                              <a className="btn btnTheme mt-2" id="experNext" href="javascript:void(0)">Continue</a>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="lsInsideHead">
                                <h1>Add Category</h1>
                                <p>Give us some of your information to get free access to Chatimmi.</p><p>
                                </p></div>
                              <div className="categoryBlk">
                                <div className="catBox">
                                  <div className="form-group cat">
                                    <label className="inputLabel">Category</label>
                                    <select className="form-control" onchange="schoolCategory(event) " id="selectCat">
                                      <option>Select Category</option>
                                      &lt;% if(schoolCategory){'{'}
                                      schoolCategory.map((value)=&gt;{'{'}
                                      %&gt;
                                      <option value="<%- value.categoryID%>">&lt;%- value.name%&gt;</option>
                                      &lt;% 		{'}'})
                                      {'}'}
                                      %&gt;
                                    </select>
                                  </div>
                                  <div className="form-group sub"> 
                                    <label className="inputLabel">Sub Category</label>
                                    <select className="form-control bootMultiselect" multiple="multiple">
                                      <option value="AK">Canada immigration</option>
                                      <option value="HI">UK immigration</option>
                                      <option value="HI">etc</option>
                                    </select>
                                  </div> 
                                  <div className="catRemove">
                                    {/* <a href="" class="removeCat">Remove</a> */}
                                  </div>
                                </div>
                                <div className="addMoreBlk">
                                  <button type="button" className="btn btn-outline-info" id="addCat" onclick="addCatBlock(event)">Add More</button>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <a className="btn btnTheme mt-2" href="javascript:void(0)" id="expertSignup">Create Account</a>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </form>
                  </div>
                  <div className="formBox expertForm" style={{display: 'none'}}>
                    <form id="expert_signup1">
                      <div className="form-wizard">
                        <fieldset style={{display: 'block'}}>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="text-center">
                                <div className="upload-pic mb-5">
                                  <img src="/public/assets/website/images/user-acnt-icn.png" id="pImg" />
                                  <div className="text-center upload-icon">
                                    <input accept="image/*" className="inputfile hideDiv" id="file-2" name="profileImage" onchange="document.getElementById('pImg').src = window.URL.createObjectURL(this.files[0])" style={{display: 'none'}} type="file" />
                                    <label htmlFor="file-2" className="upload_pic">
                                      <span className="fas fa-camera" />
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="inputLabel">Full Name</label>
                                <input type="text" name="full_name" id="full_name" className="form-control" placeholder="Enter Name" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="inputLabel">Email</label>
                                <input type="text" name="email" id="email" className="form-control" placeholder="Enter Email" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="inputLabel">Phone No</label>
                                <input type="text" name="contact_number" id="contact_number_expert1" className="form-control phone" placeholder="Enter Phone No" />
                                <input type="hidden" name="dial_code" id="dial_code_expert1" defaultValue={+1} />
                                <input type="hidden" name="country_code" id="country_code_expert" defaultValue="us" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="inputLabel">Password</label>
                                <input type="password" id="password_expert1" name="password" className="form-control" placeholder="Enter Password" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="inputLabel">Confirm Password</label>
                                <input type="password" name="confirm_password" id="confirm_password" className="form-control" placeholder="Confirm Password" />
                              </div>
                            </div>
                            <input type="hidden" name="user_type" id="user_type" defaultValue={3} />
                            <input type="hidden" name="_csrf" defaultValue="<%= csrfToken %>" />
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="inputLabel">Bio</label>
                                <textarea rows={3} className="form-control" id="bio" name="bio" placeholder="Write About You..." defaultValue={""} />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <a className="btn btnTheme mt-2" href="javascript:void(0)" id="experNext1">Continue</a>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="lsInsideHead">
                                <h1>Add Category</h1>
                                <p>Give us some of your information to get free access to Chatimmi.</p><p>
                                </p></div>
                              <div className="categoryBlk">
                                <div className="catBox">
                                  <div className="form-group">
                                    <label className="inputLabel">Category</label>
                                    <select className="form-control" onchange="schoolCategory(event) " id="selectCat">
                                      <option>Select Category</option>
                                      &lt;% if(expertCategory){'{'}
                                      expertCategory.map((value)=&gt;{'{'}
                                      %&gt;
                                      <option value="<%- value.categoryID%>">&lt;%- value.name%&gt;</option>
                                      &lt;% 		{'}'})
                                      {'}'}
                                      %&gt;
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <label className="inputLabel">Sub Category</label>
                                    <select className="form-control bootMultiselect" multiple="multiple">
                                      {/* <option>Select Sub Category</option> */}
                                      <option value="AK">Canada immigration</option>
                                      <option value="HI">UK immigration</option>
                                      <option value="HI">etc</option>
                                    </select>
                                  </div>
                                  <div className="catRemove">
                                    {/* <a href="" class="removeCat">Remove</a> */}
                                  </div>
                                </div>
                                <div className="addMoreBlk">
                                  <button type="button" className="btn btn-outline-info" id="addCatExpert" onclick="addCatBlockExpert(event)">Add More</button>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <a className="btn btnTheme mt-2" href="javascript:void(0)" id="expertSignup1">Create Account</a>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
      );
    }
}

export default Signup