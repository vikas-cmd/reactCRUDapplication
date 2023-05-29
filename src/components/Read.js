import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
    const [ApiData, setApiData] = useState([])
    function getData() {

        axios.get('https://646dc01a9c677e23218a5924.mockapi.io/crud')
            .then((response) => {
                setApiData(response.data);
            }).catch((err)=>{
                console.log(err);
    
            });

    }
    function handleDelete(id){

      axios.delete(`https://646dc01a9c677e23218a5924.mockapi.io/crud/${id}`) 
      .then(()=>{
        alert("Data Deleted");
        getData();
      }).catch((err)=>{
        console.log(err);

    });
    }
    function setDataToStorage(id,name,age,email){
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('email',email);
        

    }
    useEffect(() => {
        getData();

    }, [])


    return <div>
        <div className='row'>
            <div className='col-md-12'>
                <div className='mb-2 mt-2'>
                    <Link to='/create'>
                        <button className='btn btn-primary'>Create New Data</button>
                    </Link>
                </div>
                <table className='table table-bordered table-striped table-light table-hover'>
                    <thead >
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </thead>
                    <tbody>
                        {
                            ApiData.map((item) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.e_name}</td>
                                            <td>{item.e_age}</td>
                                            <td>{item.e_email}</td>
                                            <td>
                                                <Link to='/update'>
                                                <button className='btn btn-primary' onClick={()=>setDataToStorage(item.id,item.e_name,item.e_age,item.e_email)}>Edit</button>
                                                </Link>
                                            </td>
                                            <td>
                                                <button className='btn btn-danger' onClick={()=> {if(window.confirm("Do you want to delete ??")){
                                                    handleDelete(item.id)}
                                                }}>Delete</button>

                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }


                    </tbody>
                </table>

            </div>

        </div>
    </div>;
}


export default Read;