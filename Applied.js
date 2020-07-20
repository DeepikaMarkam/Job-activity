import React, { Component } from 'react';
import Axios from 'axios';
class Applied extends Component {
constructor ()
{
    super()
    this.state ={
        applied: []

    }
}
    componentDidMount()
    {
        Axios.get(`https://f7bed76d-ac50-4bb1-ae1a-ccc242845b8c.mock.pstmn.io/api/v1/users/recommended_jobs/1`)
        .then(res => {
            console.log(res);
            this.setState({
                applied: res.data });
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
                  



                  <h3>Applied Training Program</h3>

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
                                            <h5 class="mb-3 text-left">{this.state.applied.map((applied)=>(
            <li key={applied.id}>{applied.Job_title}</li>))}</h5>
                  <dl class="row ">
                     <dd class="col-sm-6"> 
                     {this.state.applied.map(applied=>(
                <li key={applied.id}>{applied.Job_description}</li>
                     ))}
                             </dd>
                  </dl>
               </div>
            </div>
        </div>





        <div className="container">
             <div className='mt-5'>
                <div className="border" >
                                            <h5 class="mb-3 text-left">{this.state.applied.map(applied =>(
            <li key={applied.id}>{applied.Job_title}</li>))}</h5>
                  <dl class="row ">
                     <dd class="col-sm-6"> 
                     {this.state.applied.map(applied=>(
                <li key={applied.id}>{applied.Job_description}</li>
                     ))}
                             </dd>
                  </dl>
               </div>
            </div>
        </div>

  


        

</div></div></div>

</div>
</div>        

{/*frist coloum end */}






{/*Second coloum start */}
<div className="mt-5 m-5 ">
                  <div className="border border-info">  {/*Second-Border-Main */}
                  



                  <h3>Applied Training Program</h3>

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
                                            <h5 class="mb-3 text-left">{this.state.applied.map(applied =>(
            <li key={applied.id}>{applied.Job_title}</li>))}</h5>
                  <dl class="row ">
                     <dd class="col-sm-6"> 
                     {this.state.applied.map(applied=>(
                <li key={applied.id}>{applied.Job_description}</li>
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
export default Applied;