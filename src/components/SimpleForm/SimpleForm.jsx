const SimpleForm = () => {

    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);

    }

    return (
        <div className="text-center">
            <form className="space-y-3" onSubmit={handleSubmit}>
                <input type="text" name="name" className="border-[2px] border-black p-3 w-80"/>
                <br></br>
                <input type="text" name="email"  className="border-[2px] border-black p-3 w-80"/>
                <br></br>
                <input type="text" name="phone"  className="border-[2px] border-black p-3 w-80"/>
                <br></br>
                <button className="bg-green-200 p-3 text-2xl rounded-2xl font-medium">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;