import React, { Component } from 'react';
import './Home.css';
import Sort from '../Sort';
import PostList from '../PostList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	text: 'All-data'
    };
  }

  componentDidMount() {
    if(this.props.match.params.source){
    	 this.setState({text: this.props.match.params.source });
    }
  }
  render() {
    return (
      <div className="home">
      		<div className="upper-content">
                <Sort />
            </div>
            <div className="main-content">
            	<PostList />
            </div>
      </div>
    );
  }
}

export default Home;
