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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="11324" {...register("userId")} />
      <input placeholder="John1" {...register("userName")} />


      {/* include validation with required or other standard HTML validation rules */}
      <input placeholder="password" {...register("password", { required: true , minLength : 6})} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This is a reuqired field</span>}


      <input type="submit" />
    </form>
  )
}