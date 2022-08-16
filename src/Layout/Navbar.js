import { NavLink, Link } from 'react-router-dom';
import '../styles/navbar.css';
import { useContext } from 'react';
import { Context } from '../Contexts/Context'
import {MdShoppingCart} from 'react-icons/md';
import {MdManageAccounts} from 'react-icons/md';

//className='bg-[#7bdeeb] rounded-xl px-4 w-[100px] m-3 h-24 border-2 border-white text-white font-semibold p-2 hover:text-[#7bdeeb] hover:border-[#7bdeeb] hover:bg-white'

const Navbar = () => {
    const { changeNav, setChangeNav } = useContext(Context);

    return (<>
        {changeNav ?
            <nav className='navbar'>
                <div className='bg-[#ffa5a4] w-[100%] h-16 p-4 flex justify-between'>
                    <NavLink className='w-16 h-16 text-center z-20 p-4 rounded-[50%] bg-[#7bdeeb] text-white border-2 border-white font-bold' to='/'  >لوگو</NavLink>
                    <div className='flex'>
                        <NavLink to='manageform' className='ml-3 text-5xl text-white hover:text-[#7bdeeb]' > <MdManageAccounts /> </NavLink>
                        <NavLink to='cart' className='text-5xl text-white hover:text-[#7bdeeb]'>  <MdShoppingCart /> </NavLink>

                    </div>
                </div>
                <div className='svgContain '>
                    <svg className='svg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
            </nav>
            :
            <nav className='bg-[#ffa5a4]'>
                <div className='  w-[100%] h-16 p-4 flex justify-between'>
                    <NavLink onClick={() => { setChangeNav(true) }} className='w-16 h-16 text-center z-20 p-4  rounded-[50%] bg-white font-bold text-[#7bdeeb] border-2 border-[#7bdeeb]' to='/'  >لوگو</NavLink>
                    <div className='mt-4  ' >
                        <NavLink to='inventory' className='bg-[#7bdeeb] rounded-xl px-4 w-[100px] m-3 h-24 border-2 border-white text-white font-semibold p-2 hover:text-[#7bdeeb] hover:border-[#7bdeeb] hover:bg-white' >کالا</NavLink>
                        <NavLink to='commodity' className='bg-[#7bdeeb] rounded-xl w-[5%] h-24 border-2 border-white text-white font-semibold p-2 hover:text-[#7bdeeb] hover:border-[#7bdeeb] hover:bg-white'> موجودی </NavLink>
                        <NavLink to='order' className='bg-[#7bdeeb] rounded-xl w-[5%] m-3 h-24 border-2 border-white text-white font-semibold p-2 hover:text-[#7bdeeb] hover:border-[#7bdeeb] hover:bg-white'> سفارش</NavLink>
                    </div>
                    <div className='mt-4'>
                        <Link to='/' className='z-30  text-[#7bdeeb] font-semibold border-2 border-[#7bdeeb] p-2 bg-white rounded-lg hover:bg-[#7bdeeb] hover:border-white hover:text-white' onClick={() => { setChangeNav(true); }
                        }>بازگشت </Link>
                    </div>
                </div>
                <div className='svgContain '>
                    <svg className='svg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
            </nav>
        }
    </>
    )
}

export default Navbar;