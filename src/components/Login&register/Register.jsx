import React, {useState} from 'react';

// import firebase utils methods
import { createAuthenticateUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utilities/firebase';
// styles
import './login-register.css'

const Register =()=>{
    // const [displayName] =useState('')
    // const defaultFormFields = {
    //     displayName: 'name',
    //     secondName:' second',
    //     phone:'000000000',
    //     email: 'name@gmail.com ',
    //     password: '111111',
    //     confirmPassword:'111111'
    // }
    const [formFields, setFormFields] = useState({
        displayName: '',
        secondName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      });
    // const [formField, setFormFields] = useState(defaultFormFields);
    const {displayName,secondName, phone, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(formFields); 
        }
        //change helper function 
    function handleChange(eve) {
        const {name, value} = eve.target;
        // setFormFields({ ...formFields, [name]:value});  
        setFormFields(prevState => ({
            ...prevState,
            [name]: value
          }));  
    };

    //submit halper function 
    const handleSubmit = async (eve) => {
        eve.preventDefault(); 
        
        if (password !== confirmPassword) {
            alert('password does not match');
            return; 
        }
        try {
            const {user}= await createAuthenticateUserWithEmailAndPassword(email, password);
            //console.log(user);
            // setCurrentUser(user);

             await createUserDocumentFromAuth(user, {displayName});
             //reset fields 
             resetFormFields();

        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("email entered is already in use by onother user")
            } else if(error.code === "auth/weak-password"){
                alert('Password should be at least 6 characters')
            }else{
                console.error(error);
            }          
        };
    };

    return(
        <div className='register-container  container'>
        <div class="section-header">
            <h3>Create your account</h3>
            <p>
            Let's get started by creating your account.
            To keep your account safe, we need a strong password
            </p>
        </div>
            <div class="col-md-6">
                <div class="register-form">
                    <form class="row" onSubmit={handleSubmit}>
                        <div class="col-md-6">
                            <label>First Name</label>
                            <input class="form-control" type="text" placeholder="First Name" name="displayName" onChange={handleChange} value={displayName}/>
                        </div>
                        <div class="col-md-6">
                            <label>Last Name"</label>
                            <input class="form-control" type="text" placeholder="Last Name" name="secondName" onChange={handleChange} value={secondName}/>
                        </div>
                        <div class="col-md-6">
                            <label>E-mail</label>
                            <input class="form-control" type="text" placeholder="E-mail" name="email" onChange={handleChange} value={email}/>
                        </div>
                        <div class="col-md-6">
                            <label>Mobile No</label>
                            <input class="form-control" type="text" placeholder="Mobile No" name="phone" onChange={handleChange} value={phone}/>
                        </div>
                        <div class="col-md-6">
                            <label>Password</label>
                            <input class="form-control" type="text" placeholder="Enter Password" name="password" onChange={handleChange} value={password}/>
                        </div>
                        <div class="col-md-6">
                            <label>Confirm Password</label>
                            <input class="form-control" type="text" placeholder="confirm password" name="confirmPassword" onChange={handleChange} value={confirmPassword} />
                        </div>
                        <div class="col-md-12">
                            <button class="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;