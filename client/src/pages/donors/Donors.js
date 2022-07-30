import React, {Component} from 'react';
import {connect} from 'react-redux';
import Donor from '../../components/Donor/Donor';
import BloodPic from '../../components/BloodPic/BloodPic';
import './Donors.css';

import donorsData from '../../Donors.json';

// Material UI Imports start
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { setDonors } from './action';
import News from '../News/News';
import { ToastContainer,toast } from 'react-toastify';
import benefitsOfImage from '../../pictures/benefits-of-blood-donation.jpg';
import eligibility from '../../pictures/eligible.png';
// Material UI Imports end

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    width: "280px",
    marginTop : "20px",
    marginBottom : "20px" 
  }
});

class Donors extends Component{

  state = {
    bloodGroup : '',
    donors : [],
    possibleGroups : '',
    requestDonor: {},
  }

  componentDidMount(){
    this.props.onSetDonors(donorsData);
  
    this.handleChange(this.state.bloodGroup);
    console.log('dd',donorsData);

  }

  handleChange = bloodGroup => {
    this.setState({ bloodGroup});
    let donors = [];
    let possibleGroups = '';
    if(bloodGroup === "AB+"){
      donors = [...this.props.donors];
      possibleGroups = 'all';
    }
    else if(bloodGroup === "AB-"){
      donors = this.props.donors.filter(donor => {
        return donor.bloodGroup === "A-" || donor.bloodGroup === "B-" || donor.bloodGroup === "O-" || donor.bloodGroup === "AB-" 
      })
      possibleGroups = 'AB-, A-, B- and O-';
    }
    else if(bloodGroup === "A+"){
      donors = this.props.donors.filter(donor => {
        return donor.bloodGroup === "O+" || donor.bloodGroup === "O-" || donor.bloodGroup === "A+" || donor.bloodGroup === "A-" 
      })
      possibleGroups = 'A+, A-, O+ and O-';
    }
    else if(bloodGroup === "A-"){
      donors = this.props.donors.filter(donor => {
        return donor.bloodGroup === "O-" || donor.bloodGroup === "A-" 
      })
      possibleGroups = 'A- and O-';
    }
    else if(bloodGroup === "B+"){
      donors = this.props.donors.filter(donor => {
        return donor.bloodGroup === "O+" || donor.bloodGroup === "O-" || donor.bloodGroup === "B+" || donor.bloodGroup === "B-" 
      })
      possibleGroups = 'B+, B-, O+ and O-';
    }
    else if(bloodGroup === "B-"){
      donors = this.props.donors.filter(donor => {
        return donor.bloodGroup === "O-" || donor.bloodGroup === "B-" 
      })
      possibleGroups = 'B- and O-';
    }
    else if(bloodGroup === 'O+'){
      donors = this.props.donors.filter(donor => {
        return donor.bloodGroup === "O-" || donor.bloodGroup === "O+" 
      })
      possibleGroups = 'O+ and O-';
    }
    else if(bloodGroup === 'O-'){
      donors = this.props.donors.filter(donor => {
        return donor.bloodGroup === "O-"
      })
      possibleGroups = 'O-';
    }
    this.setState({donors, possibleGroups})
  };

  clickedHandler = (donor) => {
    this.setState({
      requestDonor: donor
    })
  }
  submitRequest =(e)=>{
     e.preventDefault();
    
     toast(`Your request has been sent to ${this.state.requestDonor?.name}!`)
     this.setState({
      requestDonor: {}
    })
  }

  /**
   * 
   * Request donors
   */
  requestDonor =()=>{
    return(
      <>
        <div style={{
          width: '40%',
          height: 'auto',
          backgroundColor: 'rgb(230, 227, 237)',
          position: 'fixed',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          borderRadius: 5,
          marginLeft: '10%',
          padding: '20px'
        }}>
          <div className='request-donor'>
             <h3 style={{
              color: '#222',
              fontSize: 14,
             }}>Request for donation to  <span style={{color: 'red', fontSize: 17}}>{this.state.requestDonor?.gender == 'male'?'Mr.':'Mrs.'} {this.state?.requestDonor?.name}</span></h3>
             <form onSubmit={this.submitRequest}>
             <input placeholder="Your full name *" type="text" required onChange={(e)=>{}}/>
             <input placeholder="Patient full name *" type="text" required onChange={(e)=>{}}/>
              <input placeholder="Your contact No. *" type="text" required onChange={(e)=>{}}/>
              <input placeholder="Hospital address *" type="text" required onChange={(e)=>{}}/>
              <input placeholder="Collection room no. *" type="text" required onChange={(e)=>{}}/>
              <input  type="submit" value="Send request"/>
              <input  type="button" onClick={()=>{
                this.setState({
                  requestDonor: {}
                })
              }} value="Cancel"/>
             </form>
          </div>
        </div>
      </>
    )
  }

  render(){
      let donors = ''
      if(this.state.bloodGroup === '')
        donors = <p>Select a Blood Group To Continue</p>
      else if(this.state.donors.length <= 0)  
        donors = <p>Sorry, No Donors are Available for the Selected Blood Group</p>
      else{
        donors = this.state.donors.map(donor => {
          if(donor.available){
          return(
            <Donor
              key = {donor.id} 
              name = {donor.name}
              age = {donor.age}
              area = {donor.area}
              bloodGroup = {donor.bloodGroup}
              gender = {donor.gender}
              
              // disabled = {!this.props.isDonor 
              //               || this.props.requestedDonors.find((requestedDonors) => requestedDonors.to === donor.id)
              //               || donor.id === this.props.uid}
              clicked = {() => this.clickedHandler(donor)}
              phone = {donor.phone}/>
          )}else{
            return null;
          }
        })
      }
      return(
        <div className = "main-container">
          <div className = "left">
            <div className='left-news'>
              <News title="Benefits of become a blood donor" source="@starhealth.in" link="https://www.starhealth.in/blog/health-benefits-of-donating-blood" image={benefitsOfImage}/>
              <News title="Eligibility for donating blood" source="@redcrossblood.org" link="https://www.redcrossblood.org/donate-blood/how-to-donate/eligibility-requirements.html" image={eligibility}/>
            </div>
          </div>
          <div className = "center" style={{ padding: '10px' }}>
            <FormControl className={this.props.classes.formControl} style={{ width: '60%' }}>
              <InputLabel htmlFor="age-simple">Blood Group</InputLabel>
              <Select
                value={this.state.bloodGroup}
                onChange={(event) => this.handleChange(event.target.value)}
                inputProps={{
                name: 'bloodGroup',
                id: 'bloodGroup',
              }}>
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={"A+"}>A+</MenuItem>
                <MenuItem value={"A-"}>A-</MenuItem>
                <MenuItem value={"B+"}>B+</MenuItem>
                <MenuItem value={"B-"}>B-</MenuItem>
                <MenuItem value={"AB+"}>AB+</MenuItem>
                <MenuItem value={"AB-"}>AB-</MenuItem>
                <MenuItem value={"O+"}>O+</MenuItem>
                <MenuItem value={"O-"}>O-</MenuItem>
              </Select>
            </FormControl>
            {this.state.bloodGroup ? <p style={{
              background: "#EAE2E3",
              padding: "10px",
              borderRadius: "10px"
            }} className = "Error">{this.state.bloodGroup} can recieve blood from {this.state.possibleGroups} group{this.state.bloodGroup !== 'O-' ? "s" : null}</p> : null}
            <div className = "Donors">
            {donors}
            </div>
          </div>
          { this.state.requestDonor?.name &&
            this.requestDonor()
          }
           <div className="toast-mesage">
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        </div>
          {/* <div className = "right">
            <BloodPic/>
          </div> */}
      </div>      
      )
  }
}

const mapStateToProps = state => {
  const donors  = state["pages/donors"].donors.donors;
  console.log('dnnn1',state["pages/donors"]);
  return{
     donors : donors,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onSetDonors : (donors) => dispatch(setDonors(donors))     
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Donors));