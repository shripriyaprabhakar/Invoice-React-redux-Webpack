import _ from 'lodash';
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import axios from 'axios';


export default class PostsNew extends Component {
  constructor(props) {
    super(props) 
      this.state= {
        activities: [],
      };
  }


  componentDidMount() {
    // this.props.fetchPosts();
    // this.props.fetchPosts().then((data) => { console.log('resolved')}); 
    axios.get("/posts")
      .then((response) => {
        this.setState({ activities: response.data });
        
      })
      .catch((error) => {
        console.error(error);
      });
  }
   
  renderPosts() {
    console.log('renderposts',this.state.activities);
    const values = (Object.values(this.state.activities))
    values.shift();
    values.pop();
    console.log('values', values);
    return (values).map( (post) => {
      return (
        <li key={this.state.activities.id}>
          {post}
        </li>
      );
      <img src={this.state.activities.img} />
    });
    // const valuesObj = this.state.activities;
    // // delete valuesObj["_id"];
    // delete valuesObj["._v"];
    // return Object.keys(valuesObj).map(function(keyName, keyIndex) {
    //   return (
    //     <li className=".others" key={keyName}>
    //        {valuesObj[keyName]}
    //     </li>
    //   )
    // });
  };


  render() {
    console.log('here', this.state.activities);
  	// console.log('here', this.props.posts);
    <a >text</a>
    return (
      <div>
        <h3>Activities</h3>
        <ul>
          {this.renderPosts()}
        </ul>
        <button className="btn btn-secondary">Check for Activity listed above</button>
      </div>
    );
  }
}

// function mapStateToProps(state) {
// 	return { posts:state.posts };
// }

// export default connect(mapStateToProps, { fetchPosts })(PostsNew);
