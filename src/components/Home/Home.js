import React, { Component } from 'react';
import './Home.css';
import Sort from '../Sort';

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
      <div className="Home">
      		<div className="upperContent">
              <Sort />
            </div>
            <div className="mainContent">
            	{this.state.text}
            </div>
      </div>
    );
  }
}

export default Home;
