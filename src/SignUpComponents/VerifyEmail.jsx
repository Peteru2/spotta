import { useState } from "react";
import MailVerification from "./MailVerification";
const VerifyEmail = ({onClose}) => {

    const [resendVerificationMail, setResendVerificationMail ] = useState(false)
    const handleMailBox = () =>{
        setResendVerificationMail(true)
        
    }
    const handleCloseMailBox = () => {
        setResendVerificationMail(false);
        
    };
    return ( 

        <div>
            <h2 className="text-blue-500 text-center my-2">Verify Email</h2>
           <p className="text-center">
                    Thank you for signing up on AreaFinder. In order to
                    keep your account safe and secure, we’ll need you to
                    verify your e-mail address by clicking the verification
                    link sent to your mail box. Thank you!
</p>
<div className="my-3 text-center bg-blue-500 rounded-md text-white p-2 w-full">
    <button onClick={handleMailBox}>GO TO YOUR MAILBOX</button>
</div>

<div className={ `modal w-[330px]  font-roboto ${resendVerificationMail ? "modal-show":""}`}>
                            <div className='bg-white p-4 rounded-[6px] '>                           
                                <MailVerification onClose={onClose} closeMail={handleCloseMailBox}/>
                        </div>
                        </div>
                        <div className={`${resendVerificationMail?"overlay":""} `}></div>
        </div>
     );
}
 
export default VerifyEmail;