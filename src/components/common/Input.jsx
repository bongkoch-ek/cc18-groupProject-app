import { OpenPassword } from '@/src/icons';
import React, { useState } from 'react'

export default function Input({type="text",label,placeholder,name,value ,isError=false,...restProps}) {

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
  return (
    <div className={`${type == "password" && "relative"}`}>
        <label className={`flex flex-col m-1 text-base ${isError && "text-red-600"}`}> {label}
            <input type={type == 'password'& !showPassword ? 'password' : 'text'} 
           
            placeholder={placeholder}
            name={name}
            value={value}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#5DB9F8] disabled:bg-transparent disabled:border-[#D3D5D7] disabled:text-[##333333] ${isError && "border-red-600"}`}
            
            {...restProps}
            />
            {
                isError && <p>Email is require</p>
            }
          
            {
                type == "password" && <OpenPassword onClick={togglePasswordVisibility} className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer w-6 h-6 " />
            }
        </label>

    </div>
  )
}