    'use client'
    import {Transaction } from "@/interfaces/interfaces"
    import {Bar} from 'react-chartjs-2'
    import {useSelector} from 'react-redux'
    import { RootState } from "@/redux/store"
    import { useState } from "react"
    import Modal from '@/componentt/chart/chartModal'

    interface MapData {
        text:string,
        data: Transaction[]
    }
    export default function Chart(){
        const allTransaction= useSelector((state:RootState)=> state.user.expense)
        const [isOpen, setOpen] = useState<boolean>(false)
        const data: MapData[] = [{text:"day",data:[]},{text:"weekly",data:[]},{text:"Monthly",data:[]},{text:"yearly",data:[]}]
        const texts: string[] = [];
        data.forEach((element) => {texts.push(element.text);});
        const dataSet: Transaction[]= []
        data.forEach((element)=>{dataSet.push(...element.data)})
        const addMore= ():void=>{
            setOpen(true)
        }
        return (
            <div className='flex flex-col justify-center items-center px-[10px] gap-[10px] relative'>
                <p className={'py-[10px]'} style={{fontWeight: 600}}>Statictics</p>
                <div className={"flex border-[1px] border-gray-300 flex-col  justify-center items-center"}>
                    <div className='flex justify-around items-center py-[7px] gap-[20px] bg-gray-600 w-[100%] px-[10px]'>
                        {data.map((obj,index)=>(<p key={index} className='p-[7px_15px] rounded-[5px] text-black text-sm capitalize bg-gray-300 hover:cursor-pointer hover:bg-gray-400'>{obj.text}</p>))}
                    </div>
                    <div className={`${allTransaction.length===0?'h-[200px] flex justify-center items-center':''}`}>
                        {
                            allTransaction.length !== 0 ? 
                            <Bar data={{labels:texts,datasets:[{label:"Expenses",data:[]}]}}/>:
                            <p className={'text-balance text-gray-200 font-semibold'}>No Record created Yet</p>
                        }
                    </div>
                </div>
                <button className={'p-[5px] w-[150px] flex justify-center items-center bg-gray-300 text-black hover:bg-gray-500 rounded-md'} onClick={addMore}>Create a Record</button>
                <Modal isOpen={isOpen} setOpen={setOpen}/>
            </div>
        )
    }