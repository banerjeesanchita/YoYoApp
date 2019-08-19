import React, { Component } from 'react'
import {FaBeer,FaBaseballBall,FaHiking} from 'react-icons/fa'

export default class service extends Component {
   state={
         services:
                    [
                       {icon:<FaBeer></FaBeer>,
                    Title:"strong beer",
                     info:"testing the service component "},
                  
                   {icon:<FaHiking></FaHiking>,
                    Title:"Advanterous hiking",
                     info:"testing the service component hiking  "}
                 ]
                };
    render() {
       
        console.log("service",this.state.services);
        return (
            <section className="services">
               {/* <Title title="services"></Title> */}
              <div className="services-center">
                 {this.state.services.map((item,index)=>{
                     return<article key={index} className="service">
                         <span>{item.icon}</span>
                         <h6>{item.Title}</h6>
                         <p>{item.info}</p>
                     </article>
                 }

                    )}

              </div>
            </section>
                
        )
    }
}
