import React, { Component } from 'react';
import Axios from 'axios';
class Saved extends Component {

    state ={
        saved: []

    }
    componentDidMount()
    {
        Axios.get(`https://85f9db8e-440d-4385-af1f-51878b9d85d7.mock.pstmn.io/api/v1/users/recommended_jobs/1`)
        .then(res => {
            console.log(res);
            this.setState({saved:res.data });
        })
    }
    render() {
        return (
            <div>      {/*MAIN class BORDER */}
                  
                  <h1>Dashboard </h1>
               <h3 class="text-right">Current Role:JOB SEEKER</h3>
<hr></hr>

                <div className="border m-5  border-dark   "> {/*MAIN START BORDER */}







{/*Frist coloum start */}
<div className="mt-5 m-5 ">
                  <div className="border border-info">  {/*Second-Border-Main */}
                  



                  <h3>Recommended Training Program as per your Skills:Python</h3>

                  <div className="container">

 <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" 
         aria-expanded="false" aria-controls="collapseExample" button-right>
    Button with data-target
  </button>
  <div className="collapse" id="collapseExample">
  <div className="card card-body">


  <div className="container">
             <div className='mt-5'>
                <div className="border" >
                                            <h5 class="mb-3 text-left">{this.state.saved.map(saved =>(
            <li key={saved.id}>{saved.Job_title}</li>))}</h5>
                  <dl class="row ">
                     <dd class="col-sm-6"> 
                     {this.state.saved.map(saved=>(
                <li key={saved.id}>{saved.Job_description}</li>
                     ))}
                             </dd>
                  </dl>
               </div>
            </div>
        </div>

  


        <div className="container">
             <div className='mt-5'>
                <div className="border" >
                                            <h5 class="mb-3 text-left">{this.state.saved.map(saved =>(
            <li key={saved.id}>{saved.Job_title}</li>))}</h5>
                  <dl class="row ">
                     <dd class="col-sm-6"> 
                     {this.state.saved.map(saved=>(
                <li key={saved.id}>{saved.Job_description}</li>
                     ))}
                             </dd>
                  </dl>
               </div>
            </div>
        </div>


        <div className="container">
             <div className='mt-5'>
                <div className="border" >
                                            <h5 class="mb-3 text-left">{this.state.saved.map(saved =>(
            <li key={saved.id}>{saved.Job_title}</li>))}</h5>
                  <dl class="row ">
                     <dd class="col-sm-6"> 
                     {this.state.saved.map(saved=>(
                <li key={saved.id}>{saved.Job_description}</li>
                     ))}
                             </dd>
                  </dl>
               </div>
            </div>
        </div>

</div></div></div>

</div>
</div>        

{/*Second coloum end */}











                              </div>                {/*MAIN START BORDER */}
                         </div>   
     );
 }
}
export default Saved;