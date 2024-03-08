import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const validate = values => {
    const errors = {};
    if (!values.userName) {
      errors.userName = 'Required';
    } else if (values.userName.length > 15) {
      errors.userName = 'Must be 15 characters or less';
    }
  
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length > 20) {
      errors.password = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

export function Signup() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
          userName: '',
          password: '',
          email: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          axios.post('http://localhost:5000/users/signup',{
            username: values.userName,
            email: values.email,
            password: values.password
          }).then((response) => {
            console.log(response.data)
            const {user} = response.data
            if(!user && response.data.message === "User already exists")
              alert("User already exists")
          }).catch((error)=>{
            console.log(`Error:${error}`)
            navigate('/signup')
          })

        },
      });
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <legend style = {{borderColor:'black'}}>
        <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{display :'flex',justifyContent:'center',alignItems:'center'}}><AccountCircleIcon  sx = {{fontSize : '40px'}}/></div>
          <h1 style = {{display: 'flex', justifyContent: 'center', alignItems: 'center',color:'blueviolet'}}>Register</h1>
          <TextField
            id="userName"
            name="userName"
            label = "User Name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.userName}
            sx={{ width: '300px'}}
          />
          {formik.errors.userName ? <div style = {{color : 'red'}}>{formik.errors.userName}</div> : null}
    
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            sx={{ width: '300px' }}
          />
          {formik.errors.password ? <div style = {{color : 'red'}}>{formik.errors.password}</div> : null}
    
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            sx={{ width: '300px'}}
          />
          {formik.errors.email ? <div  style = {{color : 'red'}}>{formik.errors.email}</div> : null}
    
          <Button variant="outlined" type = "submit" sx={{ width: '300px'}}>Submit</Button>
        </form>
        </legend>
        </div>
  )
}
