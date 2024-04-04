import { CloseOutlined, EyeInvisibleOutlined, DeliveredProcedureOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ConfirmPassword from './ConfirmPassword';

const ResetPassword = ({closeResend}) => {
    const [resetPassword, setResetPassword] = useState(false)
    const handleResetPassword = () =>{
            setResetPassword(true)
    }
   const  handleCloseResetPassword = () =>{
    setResetPassword(false)
    closeResend()
   }

    return ( 
        <div className="text-sm">
            <div className="flex w-full justify-center items-center my-2">
            <h2 className="text-blue-500 text-center my-2">Reset Password</h2>
            <CloseOutlined fill=""  onClick={handleCloseResetPassword} className='ml-auto cursor-pointer text-blue-500'/>
            </div>
           <p className="">Please enter your valid email address</p>

<div className="border-[1px] rounded-md p-3">
    <input 
    type="email" 
    placeholder='E-mail address'
    className="bg-transparent outline-none w-full" />
</div>

<div className="my-3 text-center bg-blue-500 rounded-md text-white p-2 w-full">
    <button onClick={handleResetPassword}>GET RECOVERY LINK</button>
</div>

<div className={ `modal w-[330px]  font-roboto ${resetPassword ? "modal-show":""}`}>
                            <div className='bg-white p-4 rounded-[6px] '>
                               
                                 <ConfirmPassword onClose={handleCloseResetPassword}/> 
                        </div>
                        </div> 
                        <div className={`${resetPassword?"overlay":""} `}></div>
        </div>
     );
}
 
export default ResetPassword;