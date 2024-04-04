import { CloseOutlined, EyeInvisibleOutlined, DeliveredProcedureOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ResetPassword from './ResetPassword';

const MailVerification = ({onClose, closeMail}) => {
    const [resendLink, setResendLink] = useState(false)
    const handleResendLink = () =>{
            setResendLink(true)
    }
    const handleCloseResendLink = () =>{
        setResendLink(false)
        onClose()
        closeMail()
}
    return ( 
        <div className="text-sm">
            <div className="flex w-full items-center my-2">
            <h2 className="text-blue-500 text-center my-2">Resend verification mail</h2>
            <CloseOutlined onClick ={handleCloseResendLink} fill="" className='ml-auto cursor-pointer text-blue-500'/>
            </div>
           <p className="">Please enter your valid email address</p>

<div className="border-[1px] rounded-md p-3">
    <input 
    type="email" 
    placeholder='E-mail address'
    className="bg-transparent outline-none w-full" />
</div>

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