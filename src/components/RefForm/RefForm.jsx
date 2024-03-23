import { useEffect, useRef } from "react";

const RefForm = () => {
    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log(refName.current.value);
        console.log(refEmail.current.value);
        console.log(refPhone.current.value);
        console.log(refPassword.current.value);
    }

    useEffect( () => {
        refName.current.focus();
        refEmail.current.focus();
        refPhone.current.focus();
        refPassword.current.focus();
    },[])

    const refName = useRef(null);
    const refEmail = useRef(null);
    const refPassword =useRef(null);
    const refPhone =useRef(null);

    return(
        <div className="text-center">
             <form className="space-y-3" onSubmit={handleSubmit}>
                <input ref={refName} type="text" name="name" className="border-[2px] border-black p-3 w-80"/>
                <br></br>
                <input ref={refEmail} type="text" name="email"  className="border-[2px] border-black p-3 w-80"/>
                <br></br>
                <input ref={refPhone} type="text" name="phone"  className="border-[2px] border-black p-3 w-80"/>
                <br></br>
                <input ref={refPassword} type="password" name="password"  className="border-[2px] border-black p-3 w-80"/>
                <br></br>
                <button className="bg-green-200 p-3 text-2xl rounded-2xl font-medium">Submit</button>
            </form>
        </div>
    );
};

export default RefForm;