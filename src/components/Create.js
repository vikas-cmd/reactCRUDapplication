import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://646dc01a9c677e23218a5924.mockapi.io/crud', {
            e_name: name,
            e_age: age,
            e_email: email
        }).then(() => {
            alert("successfully submitted")
            navigate('/')
        }).catch((err)=>{
            console.log(err);

        });


    }
    return <>
        <div className='row'>
            <div className='col-md-4'>
                <div className='bg-primary p-4 text-center'>
                    <h1>Create Data
                    </h1>
                </div>
                <div className='mb-2 mt-2'>
                    <Link to='/'>
                        <button className='btn btn-primary'>Show all Data</button>
                    </Link>
                    </div>
                    <form  onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Enter Name:</label>
                            <input type='text' placeholder='name' className='form-control' onChange={(e) => setName(e.target.value)} ></input>

                        </div>
                        <div className='form-group'>
                            <label>Enter Age:</label>
                            <input type='number' placeholder='age' className='form-control' onChange={(e) => setAge(e.target.value)}></input>

                        </div>
                        <div className='form-group'>
                            <label>Enter Email:</label>
                            <input type='email' placeholder='Email' className='form-control' onChange={(e) => setEmail(e.target.value)}></input>

                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='Submit' className='btn btn-primary' />


                        </div>
                    </form>
                    <br />
                    {name}
                    <br />
                    {age}
                    <br />
                    {email}

                </div>
            </div>

        </>;
}



        export default Create;