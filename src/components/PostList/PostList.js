import React, { Component } from 'react';
import './PostList.css';
import Post from '../Post';
import Image from '../../assets/images/reader.png'

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
        id: 1,
        thumnail: Image,
        title: 'Jean E. Sammet, who developed the FORMAC programming language, has died',
        url: 'abc/abc',
        by: {
          name: 'tinhte.vn',
          link: 'http://www.tinhte.vn'
        },
        time: Date.now()
      },
      {
        id: 2,
        thumnail: Image,
        title: 'Jean E. Sammet, who developed the FORMAC programming language, has died',
        url: 'abc/abc',
        by: {
          name: 'tinhte.vn',
          link: 'http://www.tinhte.vn'
        },
        time: Date.now()
      },
      {
        id: 3,
        thumnail: Image,
        title: 'Jean E. Sammet, who developed the FORMAC programming language, has died',
        url: 'abc/abc',
        by: {
          name: 'tinhte.vn',
          link: 'http://www.tinhte.vn'
        },
        time: Date.now()
      }
      ]
    }
   
  }
  

  render() {
    return (
      <ul className="post-list">
        {this.state.lists.map((list, index) => (
            <Post key={index} list={list} />     
        ))}
      </ul>
    );
  }
}

export default PostList;
