import React from 'react'
import { useForm } from 'react-hook-form'
export default function Formone() {
  const {handleSubmit,register,formState:{errors}}=useForm();

  const handleData=(data)=>{
    console.log(data)
  }
  return (
    <>
    <div>
      <form onSubmit={handleSubmit(handleData)}>
      <label htmlFor="email"></label>
    <input {...register("email",{
      required:"email is required",
      pattern:{
        value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message:"Enter a valid email"
      }
    })}  type="email" id='email'/>
    {errors.email && (
      <span>{errors.email.message}</span>
    )}
         <label htmlFor="password"></label>
    <input {...register("password",{
      required:"password is required",
      minLength:{
        value:8,
        message:"Password must be at least 8 characters long"
      }
    })}  type="password" id='password'/>
    {errors.password && (
      <span>{errors.password.message}</span>
    )}
    <button type='submit'>Submit</button>
    </form>
    </div>
      
    </>
  )
}
