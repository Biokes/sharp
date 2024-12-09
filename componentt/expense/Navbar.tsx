'use client'
import styles from '@/styles/styles.module.css'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from 'react';
import Chart from '@/componentt/chart/chart'


export default function Navbar(props:{index:number}){
    const username = useSelector((state:RootState)=> state.user.username)
    const [showExpense, setShowExpenses] = useState<boolean>(false)
    const click = ()=>{
        setShowExpenses(!showExpense)
    }
    return (
        <div>
            <div className={'flex justify-between items-center px-[15px] bg-gray-700'}>
                <p className={`${styles.text} font-[700] py-[3px] `}>Tracker</p>
                <div className={'hidden md:flex justify-center items-center gap-[20px]'}>
                    <p className={props.index === 0? `${styles.current}` : `${styles.text}`}>
                        Expense
                    </p>
                    <p className={props.index === 1? `${styles.current}` : `${styles.text}`} onClick={click}>
                        Income
                    </p>
                </div>
                <div className='rounded-xl border-[2px] border-gray-500 p-[5px]'>
                    <p className='font-bold capitalize'>{username.charAt(0)}</p>
                </div>
            </div>
            <Chart/>
        </div>
        
    )
}