import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {
    
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
       
        console.log(data);
        axios.post('https://whispering-reef-91006.herokuapp.com/service', data)
        .then(res =>{
           console.log(res)
           reset();
        })
        // data.preventDefault();
    };
    return (

        <div className="AddService-container">
            <h2>please add service</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="name" />
      <input {...register("description")} placeholder="description" />
      <input {...register("img")} placeholder="image url" />
      <input type="number" {...register("price")} placeholder="price" />
      <input type="submit" />
    </form>

  
        </div>
    );
};

export default AddService;