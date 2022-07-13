import React from "react";
import {connect} from 'react-redux';

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import StyledTabs from './Tabs/Tabs';
import Tab from "@material-ui/core/Tab";
import { setUserLogged } from "../../pages/login/action";


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#EE2039",
  },
  own: {
    background: "#EAE2E3",
    position: 'fixed',
    width: '100%',  
  },
});

class Navbar extends React.Component {
  
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  buttonClickedHandler = (path) => {
      this.props.history.push(path);
  }

  logout = () => {
    this.props.dispatch(setUserLogged(false));
  }
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.own}>
          <StyledTabs centered value={value} onChange={this.handleChange}>
          {this.props.isAuth ? <Tab label="Donors" onClick ={() => this.buttonClickedHandler("/donors")}/>  : null}
          {this.props.isAuth ? <Tab label="Profile" onClick ={() => this.buttonClickedHandler("/profile")}/> : null}
          {this.props.isAuth ? <Tab label="Logout" onClick ={this.logout} />: null}
          </StyledTabs>
        </AppBar>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const isLogged  = state["pages/login"].isLogged;
    return{
      isAuth : isLogged,//state.auth.isAuth,
      isDonor : true//state.auth.isDonor
    }
}

// const mapDispatchToProps=(dispatch)=>{
//    return{
//      logout: ()=>dispatch(setUserLogged(false))
//    }
// }

export default connect(mapStateToProps)(withStyles(styles)(Navbar));
