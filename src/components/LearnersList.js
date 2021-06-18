
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllLearners, removeLearner } from '../actions/learnerActions';

import { Card, Button, Table, Row } from 'react-bootstrap';



let styles = {
   // container: {
   //    marginTop: '40px'
   // },
   learnersListCard: {
      width: '400px',
      padding: '20px',
      boxShadow: '1px 3px 1px #9E9E9E'
   }
}

class LearnersList extends Component {

   state = {
      isLoading: true
   }

   componentDidMount() {
      this.props.getAllLearners();
   }

   deleteLearner = (id) => {
      this.props.removeLearner(this.props.learners, id);
   }

   render() {
     // const { closeLearnerModal, showLearnerModal } = this.props;

      const learners = this.props.learners.map(learner => {
         return  (
            <tr key={learner.id}>
               <td>{learner.firstName}</td>
               <td>{learner.lastName}</td>
               <td>{learner.email}</td>
               <td>{learner.tokens}</td> 
               <td>{learner.grade.gradeName}</td>
               <td>
                  <Button variant="primary" className="mr-2">Edit</Button>
                  <Button variant="danger" onClick={() => this.deleteLearner(learner.id)}>Remove</Button>
               </td>
            </tr>
         );
      });

      // if (this.state.isLoading) {
      //    return(<div>Loading....</div>)
      // }

      //  { !this.props.learners ? (
      //       <div>Loading....</div>
      //    ) : (
      //      <div>Loaded...</div>
      //    ) 
      // }

      return (
         <>
            <Row>
               <Card className="mt-5 col-12" style={styles.learnersListCard}>
                  <Card.Body>
                     <Card.Title>Grade 10: Monday</Card.Title>
                     <Card.Text>
                        <Table striped bordered hover>
                           <thead>
                              <tr>
                                 <th>First Name</th>
                                 <th>Last Name</th>
                                 <th>Email</th>
                                 <th>Tokens</th>
                                 <th>Grade</th>
                                 <th>Action</th>
                              </tr>
                           </thead>
                           <tbody>
                              {learners}
                           </tbody>
                        </Table>
                     </Card.Text>
                  </Card.Body>
               </Card>
            </Row>
         </>
      );
   }
}


// Which properties I need in which component
const mapStateToProps = (state) => {
   return {
      learners: state.learner.items
   }
}

// and which Actions I want to dispatch there 
const mapDispatchToProps = (dispatch) => {
   return {
      getAllLearners: bindActionCreators(getAllLearners, dispatch),
      removeLearner: bindActionCreators(removeLearner, dispatch),
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(LearnersList);
