
import {Card} from "react-bootstrap"
import React, { Component } from 'react';
import axios from 'axios';

class Page extends Component {
    constructor(props) {
        super(props);
        this.serviceUrl= "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        this.state = {
            person: [{}],
            Show: false,
         }
    }
    display=()=>{
        this.setState({
            show : true
        })
    }
renderCards=(person)=>{
    console.log('if', person)
        if(person.data )
        {
            return (
                <div className="row">
                {person.data.map((i, j)=>
                <div key={j} className="col-sm-3 card">

                <h3 >{i.Nation}</h3>
                <p>{i.Population}</p>
   
                  </div> 
                )}
                
                </div>
                
            )
        }
        else {
            console.log('else')
            return null
       
        }
       
    }
  
  componentDidMount() {
    axios.get(this.serviceUrl).then((res) => {
        this.setState({
          person: res.data
        });
      })

  }
    render() {
        return (
            <div className="container">
        <div className="row " >
            <div className='col-sm-2'>
                <div className='sidebar'>
                <a  onClick={this.display}>Call API 1</a> <br/>
                <a  onClick={this.display}>Call API 2</a></div></div>
                <div className="col-sm-10">
                {this.state.show
               ? this.renderCards(this.state.person)
                : null
                }
                </div>
        </div>
        

      </div>
         );
    }
}


export default Page;