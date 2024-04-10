import { UserOutlined, SettingOutlined, FormOutlined } from '@ant-design/icons';

const SideBar = () => {
    return ( 
            <>
                <section className="font-inter h-screen w-[200px] bg-blue-50">
                    <div className="pt-10  text-[19px]">
                        <h2 className='p-5 text-gray-900'><span className='mr-3'><UserOutlined /></span><span>Profile</span></h2>
                        <h2 className='p-5 text-white bg-indigo-900'><span className='mr-3'><FormOutlined /></span><span>Reviews</span></h2>
                        <h2 className='p-5 text-gray-900'><span className='mr-3'><SettingOutlined /></span><span>Settings</span></h2>
                    </div>
                </section>
            </>
     );
}
 
export default SideBar;