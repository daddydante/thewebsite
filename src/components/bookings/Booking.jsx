import React, { useState, useNavigate } from 'react'
import './Booking.css'
import Footer from '../footer/Footer'


const Booking = () => {

    const [values, setValues]=useState({
        firstname:'',
        surname:'',
        destination:'',
        email:'',
        phone:'',
        password:'',
        travelmonth:'',
    })

    const [errors, setErrors]=useState({})
    

    const handleInput=(event)=>{
        setValues(prev=>({...prev, [event.target.name]:event.target.value}))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.firstname===''&&errors.surname===''&&errors.destination===''&&errors.email===''&&errors.phone===''&&errors.password===''&&errors.travelmonth===''){
            axios.post('http://localhost:8081/bookings',values)
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
            

        }
    }

    const validation = (values) => {
        let errors = {};
        if (!values.firstname) errors.firstname = 'First name is required';
        if (!values.surname) errors.surname = 'Surname is required';
        if (!values.destination) errors.destination = 'Destination is required';
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = 'Email is invalid';
        }
        if (!values.phone) errors.phone = 'Phone number is required';
        if (!values.travelmonth) errors.travelmonth = 'Travel month is required';
        return errors;
      };

  return (
    <div>
        <div className='booking-container'>
        <h2>Booking Page</h2>
      <form action="" onSubmit={handleInput}>
        <div className="inputs">
            <label htmlFor="firstname">First Name</label>
            <input onChange={handleInput} type="text" placeholder='Enter First Name' name='firstname' value={values.firstname} required />
            {errors.firstname && <span className='text-danger'>{errors.firstname}</span>}
        </div>
        <div className="inputs">
            <label htmlFor="surname">Surname</label>
            <input onChange={handleInput} type="text" placeholder='Enter Surname' name='surname' value={values.surname} required/>
            {errors.surname && <span className='text-danger'>{errors.surname}</span>}
        </div>
        <div className="inputs">
            <label htmlFor="destination">Destination</label>
            <input onChange={handleInput} type="text" placeholder='Enter Destination' name='destination' value={values.destination} required />
            {errors.destination && <span className='text-danger'>{errors.destination}</span>}
        </div>
        <div className="inputs">
            <label htmlFor="email">Email</label>
            <input onChange={handleInput} type="email" placeholder='Enter Email' name='email' value={values.email} required/>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
        </div>
        <div className="inputs">
            <label htmlFor="phone">Phone Number</label>
            <input onChange={handleInput} type="text" placeholder='Enter Phone Number' name='phone' value={values.phone} required/>
            {errors.phone && <span className='text-danger'>{errors.phone}</span>}
        </div>
        <div className="inputs">
            <label htmlFor="phone">Travel Month</label>
            <input onChange={handleInput} type="text" placeholder='Enter Month' name='travelmonth' value={values.travelmonth} required/>
            {errors.travelmonth && <span className='text-danger'>{errors.travelmonth}</span>}
        </div>
        <button type='submit' onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
    <Footer/>
    </div>
    
  )
}

export default Booking
