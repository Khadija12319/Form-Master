import useInputState from "../../hooks/useInputState";

const HookForm = () => {
    const[name, handleNameChange] = useInputState('rojoni');
    const[phone, handlePhoneChange] = useInputState('');
    const[email, handleEmailChange] = useInputState('');
    const[password, handlePasswordChange] = useInputState('');
    

    const handleSubmit = e => {
        e.preventDefault();
        console.log("hi i am",name," and my phone number is ",phone)
    }
    return (
        <div className="text-center">
            <form className="space-y-3" onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" className="border-[2px] border-black p-3 w-80"/>
                <br></br>
                <input value={email} onChange={handleEmailChange}  type="text" name="email"  className="border-[2px] border-black p-3 w-80"/>
                <br></br>
                <input value={phone} onChange={handlePhoneChange}  type="text" name="phone"  className="border-[2px] border-black p-3 w-80"/>
                <br></br>
                <input value={password} onChange={handlePasswordChange}  type="password" name="password"  className="border-[2px] border-black p-3 w-80"/>
                <br></br>
                <button className="bg-green-200 p-3 text-2xl rounded-2xl font-medium">Submit</button>
            </form>
        </div>
    );
};

export default HookForm;