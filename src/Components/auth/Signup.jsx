import { Component } from 'react';
import profileuser from "../../assets/website/images/profile-user.png"
import schoolbuilding from "../../assets/website/images/school-building.png"
import rating from "../../assets/website/images/rating.png"
import user from "../../assets/website/images/user-acnt-icn.png"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';
import ReactSession from 'react-client-session';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { parsePhoneNumber ,isValidPhoneNumber} from 'react-phone-number-input'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      full_name: '',
      email: '',
      password: '',
      confirm_password: '',
      user_type: "1",
      schoolDisplay: "none",
      expertDisplay: "none",
      userDisplay: "block",
      imgSrc: user,
      contact_number:"",
      dial_code:"91",
      country_code:"IN",
      temp:"",
      schoolCat:"none",
      expertCat:"none"
      // schoolDisplayRow:"none"
    }
    // this.getValue = this.state.bind(this.getValue);
    this.getValue = this.getValue.bind(this);
    this.submitData = this.submitData.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.onchange = this.onchange.bind(this);
    this.validData = this.validData.bind(this)


  }
  getValue = (event) => {

    this.setState({ [event.target.name]: event.target.value });
  }

  changeDisplay = (event) => {
    if (event.target.name == "expert") {
      this.setState({ schoolDisplay: "none" });
      this.setState({ expertDisplay: "block" })
      this.setState({ userDisplay: "none" })
      this.setState({ user_type: "2" })
      // this.setState({ schoolDisplayRow: "none" })

    } else if (event.target.name == "school") {
      this.setState({ schoolDisplay: "block" })
      this.setState({ expertDisplay: "none" })
      this.setState({ userDisplay: "none" })
      this.setState({ user_type: "3" })
      // this.setState({ schoolDisplayRow: "block" })

      


    } else {
      this.setState({ schoolDisplay: "none" })
      this.setState({ expertDisplay: "none" })
      this.setState({ userDisplay: "block" })
      // this.setState({ schoolDisplayRow: "none" })
      this.setState({ user_type: "1" })


    }


  }

  onchange(event) {
    // Assuming only image
    // console.log(event)
    // return false
    var file = event.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        imgSrc: [reader.result],
      })
    }.bind(this);
    console.log(url) // Would see a path?
    // TODO: concat files
  };


  //submit data
  submitData = (e) => {

    e.preventDefault();
    console.log(this.state);
    delete this.state.expertDisplay
    delete this.state.schoolDisplay
    delete this.state.userDisplay
    delete this.state.imgSrc
    delete this.state.temp

    if(this.state.user_type==1){
      delete this.state.contact_number
      delete this.state.country_dial
      delete this.state.country_code
    }

    axios({
      "method": "post",
      "url": "https://chatimmi.net/api/v1/auth/signup",
      "data": this.state,
      "headers": {
        "device-id": 'jfgjfjgjk',
        "device-token": "fsdgg",
        "device-type": 3,
        "timezone": '01-01-2021'
      }

    }).then((response) => {

      toast(response.data.message)
      this.props.history.push('/profile')

    }).catch((error) => {
      if (error.response !== undefined) {
        toast(error.response.data.message)
        if (error.response.data.error_details !== undefined && error.response.data.error_details.length >= 1) {
          error.response.data.error_details.map((value) => {
            toast(value.message)
          })
        }
      }

    });

  }

  setValue = (value)=>{
if(value){
  // if(isValidPhoneNumber(value)===false){
  //   toast("Phone number is not valid")
  //   return false
  // }
    if(parsePhoneNumber(value)!==undefined){
      
      if(parsePhoneNumber(value).countryCallingCode!==undefined){
        this.setState({contact_number:parsePhoneNumber(value).nationalNumber,dial_code:"+"+parsePhoneNumber(value).countryCallingCode,
          country_code:parsePhoneNumber(value).country});
      
      }

      console.log(this.state)
    }
}

  }
  //valid data
  validData = (e) => {
    e.preventDefault();

    // this.setState({"contact_number":this.state.temp})
    // console.log(this.state)
    // return false
    var data = {};
    data = {...this.state}
    delete data.expertDisplay
    delete data.schoolDisplay
    delete data.userDisplay
    delete data.imgSrc
    delete data.temp
    delete data.schoolCat
    delete data.expertCat
    delete data.schoolDisplayRow

    axios({
      "method": "post",
      "url": "https://chatimmi.net/api/v1/auth/signupValidation",
      "data": data,
      "headers": {
        "device-id": 'jfgjfjgjk',
        "device-token": "fsdgg",
        "device-type": 3,
        "timezone": '01-01-2021'
      }

    }).then((response) => {

      toast(response.data.message)
      this.setState({schoolDisplay:"none"})
      this.setState({expertDisplay:"none"})
      this.setState({userDisplay:"none"})
      if(this.state.user_type==3){
        this.setState({schoolCat:"block"})  

      }
      if(this.state.user_type==2){
        this.setState({expertCat:"block"})  

      }
      // this.props.history.push('/profile')
      console.log(this.state)

    }).catch((error) => {
      if (error.response !== undefined) {
        toast(error.response.data.message)
        if (error.response.data.error_details !== undefined && error.response.data.error_details.length >= 1) {
          error.response.data.error_details.map((value) => {
            toast(value.message)
          })
        }
      }

    });

  }

  render() {
    return (
      <>
        <ToastContainer />
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
                        <input type="radio" name="user" onClick={this.changeDisplay} />
                        <div className="usInfo">
                          <img src={profileuser} />
                          <h2>User</h2>
                        </div>
                      </label>
                    </div>
                    <div className>
                      <label>
                        <input type="radio" name="school" onClick={this.changeDisplay} />
                        <div className="usInfo">
                          <img src={schoolbuilding} />
                          <h2>Study</h2>
                        </div>
                      </label>
                    </div>
                    <div className>
                      <label>
                        <input type="radio" name="expert" onClick={this.changeDisplay} />
                        <div className="usInfo">
                          <img src={rating} />
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
                    <div className="formBox userForm" style={{ display: this.state.userDisplay }}>
                      <form id="user_signup" onSubmit={this.submitData} method="post">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="text-center">
                              <div className="upload-pic mb-5">
                                <img src={this.state.imgSrc} id="pImg" />
                                {/* <img src={this.imgSrc} id="pImg1" /> */}
                                <div className="text-center upload-icon">
                                  <input accept="image/*" className="inputfile hideDiv" id="profilePicture" name="profilePicture" onChange={this.onchange} style={{ display: 'none' }} type="file" />
                                  <label htmlFor="profilePicture" className="upload_pic">
                                    <span className="fas fa-camera" />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="inputLabel">Full Name {this.state.full_name}</label>
                              <input type="text" name="full_name" id="full_name" className="form-control" placeholder="Enter Name" onChange={this.getValue} />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="inputLabel">Email</label>
                              <input type="text" id="email" name="email" className="form-control" placeholder="Enter Email" onChange={this.getValue} />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="inputLabel">Password</label>
                              <input type="password" id="password" name="password" className="form-control" placeholder="Enter Password" onChange={this.getValue} />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="inputLabel">Confirm Password</label>
                              <input type="password" id="confirm_password" name="confirm_password" className="form-control" placeholder="Confirm Password" onChange={this.getValue} />
                            </div>
                            <input type="hidden" name="user_type" id="user_type" defaultValue={1} />
                            <input type="hidden" name="_csrf" />
                          </div>
                          <div className="col-md-12">
                            <button type="submit" className="btn btnTheme mt-2" >Create Account</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="formBox schoolForm" style={{ display: this.state.schoolDisplay }}>
                      <form id="expert_signup" onSubmit={this.submitData}>
                        <div className="form-wizard">
                            <div className="row" style={{ display: this.state.schoolDisplayRow }}>
                              <div className="col-md-12">
                                <div className="text-center">
                                  <div className="upload-pic mb-5">
                                    <img src={this.state.imgSrc} id="pImg" />
                                    <div className="text-center upload-icon">
                                      <input accept="image/*" className="inputfile hideDiv" id="file-2" name="profileImage" onChange={this.onchange} style={{ display: 'none' }} type="file" />
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
                                  <input type="text" name="full_name" id="full_name" className="form-control" onChange={this.getValue} placeholder="Enter Name" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="inputLabel">Email</label>
                                  <input type="text" name="email" id="email" className="form-control" placeholder="Enter Email" onChange={this.getValue} />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="inputLabel">Phone No</label>
                                  {/* <input type="text" name="contact_number" id="contact_number" className="form-control phone" placeholder="Enter Phone No" /> */}
                                  <PhoneInput
                                    placeholder="Enter phone number"
                                    defaultCountry="IN"
                                    value={this.state.temp}
                                    onChange={(val)=>{this.setValue(val)}} />
                                  <input type="hidden" name="country_code" id="country_code" defaultValue="us" />
                                  <input type="hidden" name="dial_code" id="dial_code" defaultValue={+1} />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="inputLabel">Password</label>
                                  <input type="password" name="password" id="password_expert" className="form-control" placeholder="Enter Password" onChange={this.getValue} />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="inputLabel">Confirm Password</label>
                                  <input type="password" name="confirm_password" className="form-control" placeholder="Confirm Password" onChange={this.getValue} />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="inputLabel">Bio</label>
                                  <textarea rows={3} name="bio" id="bio" className="form-control" placeholder="Write About You..." defaultValue={""}  onChange={this.getValue}/>
                                </div>
                                <input type="hidden" name="user_type" id="user_type" defaultValue={2} />
                                <input type="hidden" name="_csrf" defaultValue="<%= csrfToken %>" />
                              </div>
                              <div className="col-md-12">
                                <button type="button" onClick={this.validData} className="btn btnTheme mt-2" id="experNext" href="javascript:void(0)">Continue</button>
                              </div>
                            </div>
                          
                            
                          
                        </div>
                      </form>
                    </div>
                    <div className="row" style={{ display: this.state.schoolCat }}>
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
                                      <Select 
                                        options={options}
                                        isMulti 
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                      />
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
                                <button type="submit" className="btn btnTheme mt-2" href="javascript:void(0)" id="expertSignup">Create Account</button>
                              </div>
                            </div>
                    <div className="formBox expertForm" style={{ display: this.state.expertDisplay }}>
                      <form id="expert_signup1">
                        <div className="form-wizard">
                          
                            <div className="row">
                              <div className="col-md-12">
                                <div className="text-center">
                                  <div className="upload-pic mb-5">
                                    <img src={this.state.imgSrc} id="pImg" />
                                    <div className="text-center upload-icon">
                                      <input accept="image/*" className="inputfile hideDiv" id="file-2" name="profileImage" onChange={this.onchange} style={{ display: 'none' }} type="file" />
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
                                  <input type="text" name="full_name" id="full_name" className="form-control" onChange={this.getValue} placeholder="Enter Name" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="inputLabel">Email</label>
                                  <input type="text" name="email" id="email" className="form-control" placeholder="Enter Email" onChange={this.getValue}/>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="inputLabel">Phone No</label>
                                  {/* <input type="text" name="contact_number" id="contact_number_expert1" className="form-control phone" placeholder="Enter Phone No" /> */}
                                  <PhoneInput
                                    placeholder="Enter phone number"
                                    defaultCountry="IN"
                                    value={this.state.temp}
                                    onChange={(val)=>{this.setValue(val)}} />
                                  <input type="hidden" name="dial_code" id="dial_code_expert1" defaultValue={+1} />
                                  <input type="hidden" name="country_code" id="country_code_expert" defaultValue="us" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="inputLabel">Password</label>
                                  <input type="password" id="password_expert1" name="password" className="form-control" placeholder="Enter Password" onChange={this.getValue}/>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="inputLabel">Confirm Password</label>
                                  <input type="password" name="confirm_password" id="confirm_password" className="form-control" placeholder="Confirm Password" onChange={this.getValue}/>
                                </div>
                              </div>
                              <input type="hidden" name="user_type" id="user_type" defaultValue={3} />
                              <input type="hidden" name="_csrf" defaultValue="<%= csrfToken %>" />
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="inputLabel">Bio</label>
                                  <textarea rows={3} className="form-control" id="bio" name="bio" placeholder="Write About You..." defaultValue={""} onChange={this.getValue}/>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <a className="btn btnTheme mt-2" href="javascript:void(0)" id="experNext1" onClick={this.validData}>Continue</a>
                              </div>
                            </div>
                                                    
                        </div>
                      </form>
                    </div>
                    <div className="row" style={{ display: this.state.expertCat }}>
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
                                      <Select 
                                        options={options}
                                        isMulti 
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                      />
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