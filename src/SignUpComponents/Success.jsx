import { CheckOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Success = ({onClose}) => {
    const navigate = useNavigate()
    const handleLogin = () =>{
            onClose()
    }
    return ( 
        <>
            <div className='text-center text-sm'>
                <h2><CheckOutlined className="text-[50px] my-2 font-bold text-blue-500"/></h2>
                <h2>You password has been reset successfully </h2>
                <div className='w-full rounded-md py-2  my-2 bg-blue-500'>
                    <button onClick={handleLogin} className=" text-white ">
                        LOGIN
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default Success;