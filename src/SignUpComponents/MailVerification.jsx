import { CloseOutlined, EyeInvisibleOutlined, DeliveredProcedureOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ResetPassword from './ResetPassword';

const MailVerification = ({onClose, closeMail}) => {
    const [resendLink, setResendLink] = useState(false)
    const [formData, setFormData] = useState({
        email:'',
       });
     
       const [errors, setErrors] = useState({
         email:'',
       });
     
       const handleInputChange = (e) => {
        // e.preventDefault();       
       const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    
      };
     
    const handleResendLink = (e) =>{
        e.preventDefault()
        const newErrors = {};
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Invalid email format';
            }
            else{
                setResendLink(true)
            }
            setErrors(newErrors);
            if (Object.keys(newErrors).length === 0) {
                setErrors({});
            }
            
    }
    const handleCloseResendLink = () =>{
        setResendLink(false)
        onClose()
        closeMail()
}
    return ( 
        <div className="text-sm">
            <div className="flex w-full items-center my-2">
            <h2 className="text-blue-500 text-center my-2 font-bold w-full">Resend verification mail</h2>
            <CloseOutlined onClick ={handleCloseResendLink} fill="" className='ml-auto cursor-pointer text-blue-500'/>
            </div>
           <p className="">Please enter your valid email address</p>

           <div className={`border-[1px] rounded-md p-3 ${errors.email? "border-red-400": ""}`}>
                    <input 
                    name='email'
                    type="Email" 
                    placeholder='E-mail address'
                    onChange={handleInputChange}
                    className="bg-transparent outline-none w-full" />
                </div>
    <label className="flex text-[14px] ">
        <span className={`text-red-500 text-[14px] ${errors.email? "blink-error":""}`}> {errors.email}</span>
    </label> 

<div className="my-3 text-center bg-blue-500 rounded-md text-white p-2 w-full">
    <button onClick={handleResendLink}>RESEND VERIFICATION LINK</button>
</div>

<div className={ `modal w-[330px]  font-roboto ${resendLink ? "modal-show":""}`}>
                            <div className='bg-white p-4 rounded-[6px] '>
                               
                                <ResetPassword onClose={onClose} closeMail={closeMail} closeResend={handleCloseResendLink}/>
                        </div>
                        </div>
                        <div className={`${resendLink?"overlay":""} `}></div>
        </div>
     );
}
 
export default MailVerification;