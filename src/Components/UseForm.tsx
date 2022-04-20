import React ,{useState} from 'react'

interface IUserForm {
    name:string,
    age:number | null
}

const defaultValue = {
    name:'',
    age:0
}

const UseForm = () => {
    const [form , setForm] = useState<IUserForm>(defaultValue);
    
   const onChangeName = (event :any) => {
       setForm({
           ...form,
           name:event.target.value
       })

   }

  return (
    <div>
        <input onChange={onChangeName}  />
    </div>
  )
}

export default UseForm