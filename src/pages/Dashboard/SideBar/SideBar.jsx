import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useIsAdmin from '../../../hooks/useIsAdmin';
import uesIsInstructor from '../../../hooks/uesIsInstructor';
import useIsStudent from '../../../hooks/useIsStudent';
import DashboardActiveLink from '../../../providers/DashboardActiveLink';
import { FaHome, FaBorderStyle, FaBoxes } from "react-icons/fa";
import useMyEnrolledClasses from '../../../hooks/useMyEnrolledClasses';

const SideBar = () => {
    const { user } = useAuth()
    const [isAdmin] = useIsAdmin()
    const [isInstructor] = uesIsInstructor()
    const [isStudent] = useIsStudent()
    const [enrolledClass] = useMyEnrolledClasses()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="menu p-4 pt-16 w-60 h-full bg-base-300 text-base-content">
                    <ul className='flex flex-col gap-1'>
                        <li className=' bg-opacity-25 rounded-md font-bold text-base-content'><DashboardActiveLink to={'/dashboard/student/home'}><FaHome /> My Home</DashboardActiveLink></li>
                        <li className=' bg-opacity-25 rounded-md font-bold text-base-content'><DashboardActiveLink to={'/dashboard/student/selectedClass'}><FaBorderStyle /> My Selected Classes</DashboardActiveLink></li>
                        <li className=' bg-opacity-25 rounded-md font-bold text-base-content'><DashboardActiveLink to={'/dashboard/student/enrolledClass'}><FaBoxes />My Enrolled Classes</DashboardActiveLink></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default SideBar;