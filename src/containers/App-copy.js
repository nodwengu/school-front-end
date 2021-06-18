import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';

// import '../App.css';

import NavigationBar from '../components/NavigationBar';
import Navigation from '../components/Navigation';

import Main from '../components/Main';
import User from '../components/User';
import { setName, setAge } from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { getAllGrades } from '../actions/gradeActions';

class App extends Component {

   componentDidMount() {
      console.log("COPONENT DID MOUNT...");
      this.props.getAllGrades();
   }

   render() {
      console.log("this.props: ", this.props);

      return (
         <div className="App">
            <NavigationBar />

            <Jumbotron className="container">
               <Navigation grades={this.props.grades} />
{/* 
               <Main changeUsername={() => this.props.setName("Anna")} />
               <User username={this.props.user.name} /> */}
            </Jumbotron>

         </div>
      );
   }
}

// Which properties I need in which component

const mapStateToProps = (state) => {
   return {
      // user: state.userReducer,
      // math: state.mathReducer,

      grades: state.grades
   }
}

// and which Actions I want to dispatch there 
const mapDispatchToProps = (dispatch) => {
   return {
      // setName: (name) => {
      //     dispatch(setName(name));
      // }

      getAllGrades: bindActionCreators(getAllGrades, dispatch)
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
