import React, {useState} from "react";
import { validateEmail } from "../../utils/helpers";

const Contact = () => {
//states for all inputs
const [formState, setFormState] = useState({ name: '', email: '', message: '' });
const { name, email, message } = formState;

const [errorMessage, setErrorMessage] = useState('');

// uses helper function to valid email through the "onBlur" event.
    const formChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
    
                if(!isValid) {
                    setErrorMessage('please enter a valid email');
                } else {
                    setErrorMessage('');
                }

            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    };    
    
    const submitForm = (e) => {
        //stops pages refresh on submit
        e.preventDefault();
setErrorMessage("Thank you for the message")
        setFormState("");
    }      

    return ( 
<section className="contact">
    <h2><b>You can contact me through here</b></h2>

    <form className="forms">
        <label>
            <span>Name</span>
            <input defaultValue={name} onBlur={formChange} type="text" name="name" />
        </label>
        <label>
            <span>Email</span>
            <input defaultValue={email} onBlur={formChange} type="email" name="email" placeholder="Email"/>
        </label>
        <label>
            <span>Message</span>
            <input className="message" defaultValue={message} onBlur={formChange} type="text" name="message"/>
        </label>       
        <button type="button" onClick={submitForm}>Submit</button>        
    </form>
    <div>
        <p className="error">{errorMessage}</p>
    </div>

</section>
     );

} // end Contact bracket
 
export default Contact ;