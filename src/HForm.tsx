import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'

type FormFields = {
    email:string;
    pwd:string;
}

const HForm = () => {
    const {register,
      handleSubmit,
      setError,
      formState:{errors,isSubmitting}} = useForm<FormFields>({
        defaultValues:{
          email:'admin@gmail.com',
          pwd:'admin@pass'
        }
      })

    const onSubmit:SubmitHandler<FormFields>=async(data)=>{
      try{
        await new Promise((resolve)=> setTimeout(resolve, 1000))
        throw new Error()
        console.log(data)
      }
      catch(err){
      //   setError("email",{
      //     message:'Email already in use'})
      // }
      setError("root",{
        message:'Server Down'})
    }
    }


  return (
    <form className='my-form' onSubmit={handleSubmit(onSubmit)} style={{display:'flex',flexDirection:'column',gap:'10px',width:'40vw'}}>
      <input {...register('email',{
        required:'Email is required',
        validate:email => {
          if(!email.includes('@') || !email.includes('.com')){
          return "This email doesnt exist"
        }
      return true
      }
      })} type="text" placeholder='Email'/>
      {errors.email && <span style={{color:'red'}}>Invalid email - {errors.email.message}</span> }
      
      <input {...register('pwd',{
        required:true,
        minLength:{
          value:8,
          message:'Password should be atleast 8 characters long'
        },
        validate:(value) => value.includes('@')
      })} type="password" placeholder='Password'/>
      {errors.pwd && <span style={{color:'red'}}>Password is too weak - {errors.pwd.message}</span> }

      <button type='submit' disabled={isSubmitting&&true}>
        {isSubmitting?'Logging In':'Login'}
      </button>

      {errors.root && <span style={{color:'red'}}>{errors.root.message}</span> }
    </form>
  )
}

export default HForm