import { CheckOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Success = ({onClose}) => {
    const navigate = useNavigate()
    const handleLogin = () =>{
            onClose()
            navigate("/")
    }
    return ( 
        <>
            <div className='font-roboto text-center text-sm'>
                <h2><CheckOutlined className="text-[50px] my-2 font-bold text-blue-500"/></h2>
                <h2 className='text-blue-500 my-[5px] font-bold'>Congratulations!</h2>
                <h2>You password has been reset successfully </h2>
                
                    <button className='w-full rounded-md py-2  my-2 bg-blue-500 text-white' onClick={handleLogin} >
                        LOGIN
                    </button>
               
            </div>
        </>
     );
}
 
export default Success;