import React from 'react';

const OrderDetails = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='s-full p-4 bg-[#6a5fdf] rounded-md'>
                <div className='flex  justify-between items-center p-4 '>
                    <h2 className='text-xl text-[#d0d2d6]'>Order Details</h2>
                    <select name="" id="" className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#475569] border border-slate-700 rounded-md text-[#d0d2d6]'>
                        <option value="">Pending</option>
                        <option value="">Processing</option>
                        <option value="">Wareouse</option>
                        <option value="">Placed</option>
                        <option value="">Canceled</option>
                    </select>
                </div>

                <div className='p-4'>
                    <div className='flex gap-2 text-lg text-[#d0d2d6]'>
                        <h2>#3343</h2>
                        <span>3 Jan 2026</span>
                    </div>

                    <div className='flex flex-wrap'>
                        <div className='w-[30%]'>
                            <div className='pr-3 text-[#d0d2d6] text-lg'>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='pb-2 font-semibold'>Delevery To: Ho Chi Minh City</h2>
                                    <p><span>999 Đ. Sư Vạn Hạnh, Phường 10, Quận 10, Thành phố Hồ Chí Minh, Việt Nam</span></p>
                                </div>
                                <div className='flex justify-start items-center gap-3 '>
                                    <h2>Pending Status :</h2>
                                    <span className='text-base'>Paid</span>
                                </div>
                                <span>Price : $232</span>

                                <div className='mt-4 flex flex-col gap-4 bg-[#8288ed] rounded-md'>
                                    <div className='text-[#d0d2d6]'>
                                        <div className='flex gap text-md'>
                                            <img src="http://localhost:5173/images/category/1.jpg" alt="" className='w-[50px] h-[50px] mr-3' />
                                            <div>
                                                <h2>Product Name here</h2>
                                                <p>
                                                    <span>Brand : </span>
                                                    <span>VTShop</span>
                                                    <span className='text-lg'>Quantity : 3</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-4 flex flex-col gap-4 bg-[#8288ed] rounded-md'>
                                    <div className='text-[#d0d2d6]'>
                                        <div className='flex gap text-md'>
                                            <img src="http://localhost:5173/images/category/1.jpg" alt="" className='w-[50px] h-[50px] mr-3' />
                                            <div>
                                                <h2>Product Name here</h2>
                                                <p>
                                                    <span>Brand : </span>
                                                    <span>VTShop</span>
                                                    <span className='text-lg'>Quantity : 3</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-4 flex flex-col gap-4 bg-[#8288ed] rounded-md'>
                                    <div className='text-[#d0d2d6]'>
                                        <div className='flex gap text-md'>
                                            <img src="http://localhost:5173/images/category/1.jpg" alt="" className='w-[50px] h-[50px] mr-3' />
                                            <div>
                                                <h2>Product Name here</h2>
                                                <p>
                                                    <span>Brand : </span>
                                                    <span>VTShop</span>
                                                    <span className='text-lg'>Quantity : 3</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-[70%]'>
                            <div className='pl-3 '>
                                <div className='mt-4 flex flex-col bg-[#8288ed] rounded-md p-4 '>
                                    <div className='text-[#d0d2d6]'>
                                        <div className='flex justify-start items-center gap-3'>
                                            <h2>Seller 1 Order : </h2>
                                            <span>Pending</span>
                                        </div>
                                        <div className='text-[#d0d2d6] mt-2'>
                                            <div className='flex gap text-md mt-2'>
                                                <img src="http://localhost:5173/images/category/1.jpg" alt="" className='w-[50px] h-[50px] mr-3' />
                                                <div>
                                                    <h2>Product Name here</h2>
                                                    <p>
                                                        <span>Brand : </span>
                                                        <span>VTShop</span>
                                                        <span className='text-lg'>Quantity : 3</span>
                                                    </p>
                                                </div>
                                            </div>                                        
                                        </div>
                                        <div className='text-[#d0d2d6] mt-2'>
                                            <div className='flex gap text-md mt-2'>
                                                <img src="http://localhost:5173/images/category/1.jpg" alt="" className='w-[50px] h-[50px] mr-3' />
                                                <div>
                                                    <h2>Product Name here</h2>
                                                    <p>
                                                        <span>Brand : </span>
                                                        <span>VTShop</span>
                                                        <span className='text-lg'>Quantity : 3</span>
                                                    </p>
                                                </div>
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;