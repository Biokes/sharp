'use client'
import styles from '@/styles/styles.module.css'
import { describe } from 'node:test';
import {useState} from 'react'
export default function Modal(props:{isOpen:boolean,setOpen: (open: boolean) => void}){
    const handleCancel = () => {
        props.setOpen(false);
      };
      const handleCreate = () => {
        console.log("Transaction created!");
        props.setOpen(false);
      };
      const [title, setTitle] = useState<string>('')
      const [desc, setDesc] = useState<string>('')
      const [amount, setAmount] = useState<number>(0)
      const isValid = amount>=0 && desc && title
    return (
        <div className={`${props.isOpen ? 'flex flex-col' : 'hidden'} fixed top-1/2 left-1/2 inset-0 -translate-x-1/2 -translate-y-1/2 ${styles.modal}`}>
            <p className={'text-center w-full my-[20px]'}>Register a Record</p>
            <div className={`flex flex-col ${ styles.inputCols}`}>
                <input type="text" placeholder="Title"  onChange={(e)=>{setTitle(e.target.value.trim())}} value={title}/>
                <input type="number" placeholder='Enter amount' onChange={(e)=>{setAmount(e.target.valueAsNumber)}} value={amount} min={0}/>
                <input type="text" placeholder="Enter description"  onChange={(e)=>{setDesc(e.target.value.trim())}} value={desc} />
            </div>
            <div className={`flex gap-[15px] justify-center items-center ${styles.buttons}`}>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleCreate} disabled={isValid}>Create</button>
            </div>
        </div>
    )
}