
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllGrades } from '../actions/gradeActions';
import { getAllTeachers } from '../actions/teacherActions'
import { getAllDays } from '../actions/dayActions';

import { Container, Jumbotron } from 'react-bootstrap';

import NavigationBar from './NavigationBar';
import Navigation from './Navigation';
import LearnersList from './LearnersList'


class Home extends Component {

   componentDidMount() {
      this.props.getAllGrades();
      this.props.getAllTeachers();
      this.props.getAllDays();
   }

   render() {
      console.log(this.props);
      return (
         <>
            <Jumbotron>
               <Container>
                     <Navigation />
                     <LearnersList />
               </Container>
            </Jumbotron>



         </>
      );
   }

}

// Which properties I need in which component
const mapStateToProps = (state) => {
   return {
      grades: state.grades,
      teachers: state.teachers,
      days: state.days
   }
}

// and which Actions I want to dispatch there 
const mapDispatchToProps = (dispatch) => {
   return {
      getAllGrades: bindActionCreators(getAllGrades, dispatch),
      getAllTeachers: bindActionCreators(getAllTeachers, dispatch),
      getAllDays: bindActionCreators(getAllDays, dispatch),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
