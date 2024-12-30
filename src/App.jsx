import React, { useState } from 'react'
import './App.css'
import {   FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import { Button  } from 'react-bootstrap'


function App() {
  const [count, setCount] = useState(0)
 //states for validation 
 const[InvalidName,setInavalidName]=useState(false)
 const[InvalidContact,setInavalidContact]=useState(false)
 const[InvalidEmail,setInavalidEmail]=useState(false)



 // states for holding values
 const[name,setName]=useState(null)
 const[address,setAddress]=useState(null)
 const[contact,setContact]=useState(null)
 const[email,setEmail]=useState(null)
 const[gender,setGender]=useState(null)
 const[dob,setDob]=useState(null)


   // Course Select field mUI
   const [course,setCourse] = useState('');
   // const handleChange = (event) => {
   //   setCourse(event.target.value);
   // }
 
 
  const InputValues=(inputTag)=>{
     console.log(typeof inputTag);
     // destructring
     const{name,value}=inputTag
     // console.log(name, value);
     // console.log(!!value.match(/^[a-z A-Z]+$/));

     if(name=='name'){
      setName(value)
      if(!!value.match(/^[a-z A-Z]+$/)){
        setInavalidName(false)
      }else{
        setInavalidName(true)
      }
    }else if(name=='address'){
      setAddress(value)
    }else if(name=='contact'){
      setContact(value)
      if(!!value.match(/^\d{10}$/)){
        setInavalidContact(false)
      }else{
        setInavalidContact(true)
      }
    }else if(name=='email'){
      setEmail(value)
      if(!!value.match(/^[a-z0-9_\.\-]+[@][a-z]+[\.][a-z]{2,3}$/)){
        setInavalidEmail(false)
      }else{
        setInavalidEmail(true)
      }
    }else if(name=='gender'){
      setGender(value)
    }else if(name=='dob'){
      setDob(value)
    }else if(name=='course'){
      setCourse(value)
    }
 
 }


 const Registration=(e)=>{
  e.preventDefault()
if(name && address && contact && email && gender && course){
 alert(`Data stored successfully
  Name: ${name}
  Address: ${address}
  Contact: ${contact}
  Email: ${email}
  Gender: ${gender}
  DOB:  ${dob}
  Course: ${course}
   `)
}else{
 alert("please enter full details..! ")
 &&   setName(null)
 setAddress(null)
 setEmail(null)
 setContact(null)
 setGender(null)
 setDob(null)
 setCourse(null)
 setInavalidName(false)
 setInavalidEmail(false)
 setInavalidContact(false)
}
}



const Reset=()=>{
  setName(null)
  setAddress(null)
  setEmail(null)
  setContact(null)
  setGender(null)
  setDob(null)
  setCourse('')
  setInavalidName(false)
  setInavalidEmail(false)
  setInavalidContact(false)
 }



  




 

  return (
    <>
    <div style={{width:'100%', minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'700px',backgroundColor:'white'}} className=' rounded p-5 child'>
        <h1 className='text-center'>Registration Form

        </h1>
        <p>
          <h5> <b>Name</b></h5>
          <TextField  value={name||''}  name='name' onChange={(e)=>InputValues(e.target)} style={{width:'600px'}} className='name1' id="outlined-basic" label="Enter your name" variant="outlined" />  
                </p>
                 {/* Name Validation */}
            {InvalidName && 
              <div className=' my-3 text-dark  fw-bolder' >
                Invalid name...!!!
              </div>
            }

        <p>
          <h5><b>Address</b></h5>
          <TextField value={address||''} name='address' onChange={(e)=>InputValues(e.target)} style={{width:'600px'}} id="outlined-basic" label="Enter your address" variant="outlined" />            

        </p>
        <p>
          <h5><b>Mobile</b></h5>
          <TextField value={contact||''} name='contact' onChange={(e)=>InputValues(e.target)} style={{width:'600px'}} type='number' id="outlined-basic" label="Enter your mobile no" variant="outlined" />            

        </p>   {/* Contact Validation */}
             {InvalidContact && 
              <div className='text-danger fw-bolder my-3' >
                Invalid contact...!!!
              </div>
            }
          
        <p>
          <h5><b>Email</b></h5>
          <TextField value={email||''} name='email' onChange={(e)=>InputValues(e.target)} style={{width:'600px'}} type='email' id="outlined-basic" label="Enter your email" variant="outlined" />            

        </p>
          {/* Email Validation */}
          {InvalidEmail && 
              <div className='text-danger fw-bolder my-3' >
                Invalid email...!!!
              </div>
            }
    <p>
          
          <h5><b>Gender</b></h5>
       
            {/* Gender*/}
            <div className='text-center mt-4 '>
              <FormControl>
                <div className='d-flex ' style={{width:'600px',borderRadius:'10px 10px 0px 0px',height:'55px'}}>
                  <FormLabel  id="demo-row-radio-buttons-group-label" ></FormLabel>
                  <RadioGroup
                  value={gender||''}
                  name='gender' onChange={(e)=>InputValues(e.target)}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    
                  >
                    <FormControlLabel className='text-light' value="female" control={<Radio />} label="Female" />
                    <FormControlLabel className='text-light' value="male" control={<Radio />} label="Male" />
                    <FormControlLabel className='text-light' value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </div>
              </FormControl>
              
            </div>

          <h5><b>Date of Birth</b></h5>
          <TextField value={dob||''} name='dob' onChange={(e)=>InputValues(e.target)} style={{width:'600px'}} type='date' id="outlined-basic" label="" variant="outlined" />            

        </p>
        <p>
        <h5><b>Course</b></h5>
        
        <select  value={course||''}
                    name='course'  onChange={(e)=>InputValues(e.target)} class="form-select form-select-lg mb-3" aria-label="Large select example">
  <option  selected> <span 
  >Select  Course  </span>         
  </option>
  <option value="Biology">Biology</option>
  <option value="Computer Science">Computer Science</option>
  <option value="Commerce">Commerce</option>
  <option value="Humanities">Humanities</option>

</select>
<br />

</p>
<Stack direction="row" className='d-flex justify-content-between' >
        <Button type='submit'  disabled={InvalidName || InvalidEmail || InvalidContact} onClick={Registration}   variant="contained" style={{width:'295px', color:'white'}} className='bg-dark'>Register</Button>
        <Button onClick={Reset} style={{width:'295px',height:'70px',borderColor:'black'}} className='hello' variant="contained">Cancel</Button>
 
        </Stack>
    
    
       
      </div>
    </div>
    </>
  )
}

export default App