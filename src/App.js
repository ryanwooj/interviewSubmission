/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './App.css';
import Data from './projects.json';
import ListView from './ListView';
import MenuView from './MenuView';
import { TimeConverter } from './TimeConverter';

class App extends Component {

  state = {
    startData: Data.projects,
    interested : [],
    uninterested: []
  }

  componentWillMount() {
    const interested = localStorage.interested;
    const uninterested = localStorage.uninterested;

    if (interested && uninterested) {
      this.setState({
        interested: JSON.parse(interested),
        uninterested: JSON.parse(uninterested)
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(JSON.stringify(prevState.interested) !== JSON.stringify(this.state.interested)){
      localStorage.interested = JSON.stringify(this.state.interested);
    }
    if(JSON.stringify(prevState.uninterested) !== JSON.stringify(this.state.uninterested)){
      localStorage.uninterested = JSON.stringify(this.state.uninterested);
    }
    console.log(this.state)
  } 

  addInterest(item) {
    var isThereIn = this.state.interested;
    if(isThereIn.includes(item)){
      return;
    }
    if(isThereIn.includes(item)){
      return;
    }else {
      this.setState({
        interested: [...this.state.interested, item],
        uninterested: this.state.uninterested.filter(uni => item !== uni)
      })
    }
  }

   addUninterest(item) {
    var isThereUni = this.state.uninterested;
     if(isThereUni.includes(item)){
       return;
     }
    if(isThereUni.includes(item)){
       return;
    } else {
      this.setState({
        uninterested: [...this.state.uninterested, item],
        interested: this.state.interested.filter(uni => item !== uni)
      })
    }
   }

   checkSpotInterested(item){
     var arr = this.state.interested;
     for (var i = 0; i < arr.length; i++) {
       if (arr[i] === item) {
         return i;
       }
     }
   }

   checkSpotUninterested(item) {
     var arr = this.state.uninterested;
     for (var i = 0; i < arr.length; i++) {
       if (arr[i] === item) {
         return i;
       }
     }
   }

  render() {
    console.log(this.state.data)
    return (
      <div className="ui container row">
        <MenuView />
        <div className="ui three row grid center">
          <div className="ui internally celled grid row">
            {
            this.state.startData.sort((a,b) => {
              if(a.added > b.added){ return -1 }
              if(a.added < b.added){ return 1 }
              return 0;
            }).map((item, index) => (
              <div key={index} className="ui raised very padded">
                <div className="ui labeled button" tabIndex="0" onClick={() => this.addInterest(item)}>
                  <div className="ui red button">
                    < i className = "heart icon" > </i> Like
                  </div>
                  <a className="ui basic red left pointing label"> click </a>
                </div>
                <div className="ui labeled button" tabIndex="0" onClick={()=>this.addUninterest(item)}>
                  <div className="ui basic blue button">
                    <i className="fork icon"></i> Dislike
                  </div>
                  <a className="ui basic left pointing blue label"> click </a>
                </div>
               <ListView item={item} timeConverter={TimeConverter} />
               {console.log(this.state.interested, this.state.uninterested)}
              </div>
            ))
          }
          </div>
          <h3>Interested</h3>
          <div className="wide row ">
            <div>
              {
                this.state.interested.map((item, index) => (
                  <ListView item={item} key={index} timeConverter={TimeConverter} className="ui raised very padded"/>
                ))
              }
            </div>
          </div>
          <h3> Uninterested</h3>
          <div className="wide row center">
          <br/>
            <div>
              {
                this.state.uninterested.map((item, index) => (
                  <ListView item={item} key={index} timeConverter={TimeConverter} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;

