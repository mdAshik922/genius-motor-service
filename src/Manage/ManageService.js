import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([]);
    // console.log(services)
    useEffect(() =>{
       fetch('https://whispering-reef-91006.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    const hendelDelete = id =>{
        // console.log(id);
        const url = `https://whispering-reef-91006.herokuapp.com/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                alert('successfully delete');
                const remaning = services.filter(service => services._id !== id);
                setServices(remaning);
               }
        //  console.log(data);
        } );
    };
    return (
        <div>
            <h1>manage</h1>
            {
                services.map(service => <div key={service._id}>
<h2>{service.name}</h2>

<button onClick={()=> hendelDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageService;