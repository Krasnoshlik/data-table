"use client"
import React, { useState } from 'react';
import { Customer } from '@/app/types/project-types.ds';
import StatusOvall from './status-ovall';
import Image from 'next/image';
import DotsIcon from '../../assets/dotes.png';
import EditIcon from '../../assets/pencil.png';
import TrashIcon from '../../assets/trash.png';

export default function CustomerLine({customer}:{customer : Customer}) {
  const [showEdit, setShowEdit] = useState(false);
  const [showChecked, setShowChecked] = useState(false);

  return (
    <div className={`group custom-grid px-4 items-center justify-between py-2 ${customer.id % 2 === 0 && ' bg-white' } ${showChecked ? ' bg-[#EBF0FA] pl-[14px] border-l-2 border-blue-500' : ''}`}>

      <label className="container">
      <input type="checkbox" onChange={() => setShowChecked(!showChecked)}></input>
      <span className="checkmark"></span>
      </label>

        <div className=' flex flex-col justify-start'>
          <h3 className=' font-bold text-[#171C26] text-sm'>{customer.name}</h3>
          <p className=' text-[#687182] text-[12px]'>{customer.id}</p>
        </div>

        <div>
          <p className=' text-[#464F60] text-sm'>{customer.disc}</p>
        </div>

        <div className=' flex'>
        <StatusOvall status={customer.status}/>
        </div>

        <div>
          <p className=' text-[#464F60] text-sm'>{customer.rate}$</p>
        </div>

        <div className={` ${customer.balance > 0 ? 'text-green-400' : 'text-red-400' }`}>
          <p>{customer.balance}$</p>
        </div>

        <div>
          <p className=' text-[#464F60] text-sm'>{customer.deposit}$</p>
        </div>

        <div>
          <button className=' invisible group-hover:visible' onClick={() => setShowEdit(!showEdit)}>
            <Image src={DotsIcon} alt='DotsIcon'/>
          </button>

          {
            showEdit && 
          <div className=' relative'>
          <div className=' absolute w-24 bg-white p-3 flex flex-col gap-4 rounded shadow-lg right-5 -top-12'>

            <button className=' flex justify-between h-4' onClick={() => setShowEdit(false)}>
              <p className=' text-sm font-medium text-[#2264E5]'>Edit</p>
              <Image src={EditIcon} alt='EditIcon'/>
            </button>

            <button className=' flex justify-between h-4' onClick={() => setShowEdit(false)}>
              <p className=' text-sm font-medium text-[#D12953]'>Delete</p>
              <Image src={TrashIcon} alt='TrashIcon'/>
            </button>

          </div>
          </div>
          }


        </div>
    </div>
  )
}
