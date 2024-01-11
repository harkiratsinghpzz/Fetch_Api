import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Main() {
  let [state, setState] = useState([])
// In React, Promises are commonly used for handling asynchronous operations like making API calls, managing state updates, and controlling the component lifecycle. 
// Asynchronous operations refer to tasks or processes that do not occur immediately in a program's execution flow. 
  let getdata = async() =>{
    let response = await axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then(val =>{
        console.log(val.data)
        setState(val.data)

    } )
    .catch(err =>{
        console.log(err)
    })
    
  }

  useEffect(() =>{

    getdata()

  },[])

//Render the data
let renderdata = state.map((ele, index)=>(
    <tr key={index}>
    <td scope="row">{ele.name}</td>
      <td>{ele.name}</td>
      <td>{ele.username}</td>
      {/* <td>{ele.city}</td> */}
      <td>{ele.website}</td>
      <td>{ele.phone}</td>
    </tr> 
))


  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      {/* <th scope="col">City</th> */}
      <th scope="col">Website</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
   {
    renderdata
   }
  </tbody>
</table>
    </div>
  )
}

export default Main

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import myproduct from './main.module.css'

// function Main() {
//     let [product,setproduct] = useState([])

// let getdata = async()=>{
//     let response = await axios
//     .get(`https://fakestoreapi.com/products`)
//     .then(val=>{
//         console.log(val.data);
//         setproduct(val.data)
//     })
//     .catch(err=>{
//         console.log(err);
//     }) 

// }

// useEffect(()=>{
//     getdata()
// },[])

// // render data

// let renderdata = product.map((ele,index)=>(
//     <div key={index} className={myproduct.card}>
//         <div className="card-title">
//             <h3>{ele.title}</h3>
//         </div>
//         <div className="card-body">
//             <img className='img-fluid' src={ele.image} alt="" />
//             <p>{ele.description}</p>
//         </div>
//         <div className="card-footer">
//             <h1> ${ele.price}</h1>
//         </div>
//     </div>
// ))

//   return (
//     <div className={myproduct.container}>
// {
//     renderdata
// }
//     </div>
//   )
// }

// export default Main


// // 1) send request to get the data
// // 2) updatae a state with incoming data
// // render the data