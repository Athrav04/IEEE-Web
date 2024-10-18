import { useForm, SubmitHandler, Validate } from "react-hook-form"


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
      <div className="w-full">
        <p className="text-sm text-gray-500 text-bold mb-1">UserName</p>
       <input placeholder="John1" {...register("userName",{required:true})} className={`rounded-md pl-2 p-[4px] w-full bg-gray-100 ${errors.userName ? 'border-red-500' : 'border-[1px]'}`}/>
      </div>
    
      {/* include validation with required or other standard HTML validation rules */}
      <div className="w-full">
        <p className="text-sm text-gray-500 text-bold mb-1">password</p>
        <input placeholder="password" {...register("password", { required: true , minLength : 6})} className={`border-[1px] rounded-md pl-2 p-[4px] w-full bg-gray-100 ${errors.password ? 'border-2 border-red-500' : 'border-[1px]'}`} />
      </div>
      
      {/* errors will return when field validation fails  */}
      {/* {errors.password && <span className="text-sm text-red-500"> is a reuqired field</span>} */}


      <button type="submit" className=" cursor-pointer place-self-center w-full mt-2 p-1 bg-gradient-to-r from-sky-300 to-sky-500 rounded-md text-center items-center">
        Login
      </button>
    </form>
  )
}