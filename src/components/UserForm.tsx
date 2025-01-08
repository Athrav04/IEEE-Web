import { useForm, SubmitHandler, Validate } from "react-hook-form"
import { useNavigate } from "react-router-dom"


type Inputs = {
  example: string
  exampleRequired: string
}
type loginValidation = {
    userId : number,
    userName : string,
    password : string,
}

export default function UserForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<loginValidation>()
  const onSubmit: SubmitHandler<loginValidation> = (data) => console.log(data)


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-start gap-3 w-full">
      {/* register your input into the hook by invoking the "register" function */}
      <div className="w-full text-center text-2xl font-montserrat font-semibold primary-text">
          Enter your Details
      </div>
      <div className="w-full">
       <input placeholder="Username" {...register("userName",{required:true})} className={`border-[0.5px] border-[#484849] border-opacity-75 rounded-md pl-2 py-2 w-full bg-transparent focus:outline-none text-white ${errors.userName ? 'border-red-500/55' : ''}`}/>
      </div>
    
      {/* include validation with required or other standard HTML validation rules */}
      <div className="w-full">
        <input placeholder="password" {...register("password", { required: true , minLength : 6})} className={`border-[0.5px] border-[#484849] border-opacity-75 rounded-md pl-2 py-2 w-full bg-transparent focus:outline-none text-white${errors.password ? 'border-2 border-red-500/55' : ''}`} />
      </div>
      
      {/* errors will return when field validation fails  */}
      {/* {errors.password && <span className="text-sm text-red-500"> is a reuqired field</span>} */}


      <button type="submit" className=" cursor-pointer place-self-center w-full mt-2 p-1 bg-white/90 rounded-md text-center items-center">
        Login
      </button>

      <span className="w-full text-center secondary-text text-md font-roboto mt-2 hover:text-white/85 transition duration-200 ease-in hover:cursor-default" onClick={()=>navigate(-1)}>Back to Login</span>
    </form>
  )
}