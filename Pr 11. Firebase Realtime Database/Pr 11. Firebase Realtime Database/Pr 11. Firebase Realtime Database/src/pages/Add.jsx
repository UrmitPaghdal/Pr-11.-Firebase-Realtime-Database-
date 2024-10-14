import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../firebase.js"
import { useState } from "react";
import './Add.css';



function Add() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("");
    const[msg , setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase(app);
        let id = Math.floor(Math.random() * 100000);
        set(ref(db, `users/${id}`), {
            name: name,
            company: company,
            email: email,
            phone: phone,
            msg: msg
        })
        alert("record add");
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
        setMsg("");
    }
    return (
        <div align="center">
            <h2>Add Record</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br /><br />
                
                <label htmlFor="name">Company:</label><br />
                <input type="text" onChange={(e) => setCompany(e.target.value)} value={company} /><br /><br />

                <label htmlFor="name">Email Address:</label><br />
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} /><br /><br />

                <label htmlFor="phone">Phone Number:</label><br />
                <input type="number" onChange={(e) => setPhone(e.target.value)} value={phone} /><br /><br />

                <label htmlFor="text">Message :- </label> <br />
                <textarea onChange={(e) => setMsg(e.target.value)} value={msg} ></textarea> <br /><br />

                <input type="submit" defaultValue="Submit" />
            </form>
        </div>
    )
}
export default Add
