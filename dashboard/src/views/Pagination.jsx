import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Pagination = ({pageNumber, setPageNumber, totalItem, parPage, showItems}) => {
    let totalPage = Math.ceil(totalItem/parPage);
    let startPage = pageNumber;
    let dif = totalPage - pageNumber;
    if(dif <= showItems){
        startPage = totalPage - showItems;
    }
    let endPage = startPage<0 ? showItems : showItems + startPage;

    if(startPage <= 0){
        startPage = 1;
    }

    const createButton = () => {
        const btn = [];
        for(let i=startPage; i< endPage; i++){
            btn.push(
                <li onClick={() => setPageNumber(i)} className={`${pageNumber === i ? 'bg-indigo-300 shadow-lg shadow-indigo-300/50 text-white' : 'bg-slate-600 hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 hover:text-white text-[#d0d2d6]'} w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer`}>
                    {i}
                </li>
            )
        }
        return btn;
    }

    return (
        <div>
            <ul className='flex gap-3 '>
                {
                    <li onClick={() => pageNumber ===1 ? ()=>{} : setPageNumber(pageNumber-1)} className={`${pageNumber <= 1 ? 'disabled:opacity-50 disabled:cursor-not-allowed' :''} w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-[#000]`}><FaArrowLeft /></li>
                }
                {
                    createButton()
                }
                {
                    <li onClick={() => pageNumber ===totalPage-1 ? ()=>{} : setPageNumber(pageNumber+1)} className={`${pageNumber >= totalPage-1 ? 'disabled:opacity-50 disabled:cursor-not-allowed' :''} w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-[#000]`}><FaArrowRight /></li>
                }
            </ul>
        </div>
    );
};

export default Pagination;