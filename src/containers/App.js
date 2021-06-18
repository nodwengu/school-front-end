import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavigationBar from '../components/NavigationBar';
import Home from '../components/Home';

import Navigation from '../components/Navigation';
import LearnersList from '../components/LearnersList';
import UpdateSubject from '../components/UpdateSubject';
import UpdateSubjectComponent from '../components/UpdateSubjectComponent';
import LearnerLessons from '../components/LearnerLessons';
import SelectSubject from '../components/SelectSubject';

import TeacherLessons from '../components/TeacherLessons'

class App extends Component {
   render() {
      return (
         <div className="App">
            <NavigationBar />
            <Router>
     
               <Switch>
                  <Route path="/" exact component={ Home }></Route> 
                  <Route path="/update-subject/:id" component={ UpdateSubjectComponent }></Route>
                  <Route path="/learner/:id/lessons" component={ LearnerLessons }></Route>
                  <Route path="/select-subject" component={ SelectSubject }></Route>

                  <Route path="/teacher/:id/lessons" component={ TeacherLessons }></Route>
                  

                 
                  <Home /> 
                  <UpdateSubject />
                  <LearnersList />
                  <LearnerLessons />
                  <TeacherLessons />
               </Switch>
            </Router> 

         </div>
      );
   }
}


export default App;
