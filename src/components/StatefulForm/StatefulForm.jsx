import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] =useState(null);
    const [email, setEmail] =useState(null);
    const [phone, setPhone] =useState(null);
    const [password, setPassword] =useState(null);
    const [error, setError] =useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,email,phone,password);
        if(password.length < 6){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('');
        }
    }
    const handleName= (e) =>{
        setName(e.target.value);
    }
    const handleEmail= (e) =>{
        setEmail(e.target.value);
    }
    const handlePhone= (e) =>{
        setPhone(e.target.value);
    }
    const handlePassword= (e) =>{
        setPassword(e.target.value);
    }
    return (
        <div className="text-center">
             <form className="space-y-3" onSubmit={handleSubmit}>
                <input onChange={handleName} type="text" name="name" className="border-[2px] border-black p-3 w-80"/>
                <br></br>
                <input onChange={handleEmail} type="text" name="email"  className="border-[2px] border-black p-3 w-80"/>
                <br></br>
                <input onChange={handlePhone} type="text" name="phone"  className="border-[2px] border-black p-3 w-80"/>
                <br></br>
                <input onChange={handlePassword} type="password" name="password"  className="border-[2px] border-black p-3 w-80"/>
                <br></br>
                <button className="bg-green-200 p-3 text-2xl rounded-2xl font-medium">Submit</button>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;