import React from 'react';
import { MdCurrencyExchange } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const state = {
        series: [
            {
                name: "Orders",
                data: [23, 34, 45, 67, 74, 58, 93, 75, 66, 36, 18],
            },
            {
                name: "Revenue",
                data: [25, 54, 25, 87, 41, 38, 53, 65, 76, 26, 38]
            },
            {
                name: "Sellers",
                data: [45, 14, 55, 77, 11, 48, 50, 35, 26, 70, 40]
            }
        ],
        options: {
            color: ['#181ee8', '#181ee8'],
            plotOption: {
                radius: 30,
            },
            chart: {
                background: 'transparent',
                foreColor: '#d0d2d6'
            },
            dataLabels: {
                enable: false,
            },
            strock: {
                show: true,
                curve: ['smooth', 'straight', 'stepline'],
                lineCap: 'butt',
                colors : '#f0f0f0',
                width: .5,
                dashArray: 0
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            legend: {
                position: 'top'
            },
            responsive: [{
                breakpoint: 565,
                yaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                options: {
                    plotOption: {
                        bar: {
                            horizontal: true
                        }
                    },
                    chart: {
                        height: "550px", 
                    }
                }
            }]
        }
    }

    return (
        <div className='px-2 md:px-7 py-5'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3xl font-bold'>$2000</h2>
                        <span className='text-md font-medium'>Total sales</span>
                    </div>

                    <div className='w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg' />
                    </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-[#b8a8ba] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3xl font-bold'>50</h2>
                        <span className='text-md font-medium'>Products</span>
                    </div>

                    <div className='w-[40px] h-[47px] rounded-full bg-[#4949ca] flex justify-center items-center text-xl'>
                        <MdOutlineProductionQuantityLimits className='text-[#fae8e8] shadow-lg' />
                    </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-[#55d471] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3xl font-bold'>30</h2>
                        <span className='text-md font-medium'>Sellers</span>
                    </div>

                    <div className='w-[40px] h-[47px] rounded-full bg-[#e07ddb] flex justify-center items-center text-xl'>
                        <FaUser className='text-[#fae8e8] shadow-lg' />
                    </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-[#7384d6] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3xl font-bold'>$5000</h2>
                        <span className='text-md font-medium'>Orders</span>
                    </div>

                    <div className='w-[40px] h-[47px] rounded-full bg-[#66b66b] flex justify-center items-center text-xl'>
                        <FaCartArrowDown className='text-[#fae8e8] shadow-lg'/>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-wrap mt-7 '>
                <div className='w-full lg:w-7/12 lg:pr-3'>
                    <div className='w-full bg-[#6a5fdf] p-4 rounded-md'>
                        <Chart options={state.options} series={state.series}/>
                    </div>
                </div>

                <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0 '>
                    <div className='w-full bg-[#6a5fdf] p-4 rounded-md text-[#d0d2d6] '>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent Seller Message</h2>
                            <Link className='font-semibold text-sm text-[#d0d2d6]' >View ALl</Link>
                        </div>

                        <div className='flex flex-col gap-2 pt-6 text-[#d0d2d6] '>
                            <ol className='relative  ml-4'>
                                <li className='mb-3 ml-6 '>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                                        <img lassName='w-full rounded-full h-full shadow-lg' src="http://localhost:5173/images/admin.png" alt="" />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm '>
                                        <div className='flex justify-between items-center mb-2 '>
                                            <Link className='text-md font-normal '>Admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                                            How are you
                                        </div>
                                    </div>
                                </li>

                                <li className='mb-3 ml-6 '>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                                        <img lassName='w-full rounded-full h-full shadow-lg' src="http://localhost:5173/images/admin.png" alt="" />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm '>
                                        <div className='flex justify-between items-center mb-2 '>
                                            <Link className='text-md font-normal '>Admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                                            How are you
                                        </div>
                                    </div>
                                </li>

                                <li className='mb-3 ml-6 '>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                                        <img lassName='w-full rounded-full h-full shadow-lg' src="http://localhost:5173/images/admin.png" alt="" />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm '>
                                        <div className='flex justify-between items-center mb-2 '>
                                            <Link className='text-md font-normal '>Admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                                            How are you
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full p-4 bg-[#6a5fdf] rounded-md mt-6 '>
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3 '>Recent Orders</h2>
                    <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
                </div>

                <div className='relative overflow-x-auto '>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4 '>Order Id</th>
                                <th scope='col' className='py-3 px-4 '>Price</th>
                                <th scope='col' className='py-3 px-4 '>Payment Status</th>
                                <th scope='col' className='py-3 px-4 '>Order Status</th>
                                <th scope='col' className='py-3 px-4 '>Active</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                [1,2,3,4,5].map((data, index) => <tr index={index}>
                                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#44334</td>
                                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>$334</td>
                                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                                <Link scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>View</Link>
                            </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AdminDashboard;