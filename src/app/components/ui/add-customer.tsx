"use client"
import React, { useEffect, useState } from 'react';
import { Customer } from '@/app/types/project-types.ds';
import { useContext } from "react";
import { Customers_data } from '@/app/context/context';

export default function AddCustomer({setShowAddCustomerModal} : {setShowAddCustomerModal : any}) {
  const [ addCustomer, setAddCustomer ] = useState<Customer | null>(null);
  const { arrCust,setArrCust } = useContext(Customers_data);

  const takeAllDataForCustomer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let newID = arrCust.length > 0 ? arrCust[arrCust.length - 1].id + 1 : 1;

    const formData = new FormData(event.currentTarget);
    const newCustomer = {
      id: newID,
      name: formData.get('name') as string,
      status: formData.get('status') as string,
      rate: Number(formData.get('rate')),
      balance: Number(formData.get('balance')),
      deposit: Number(formData.get('deposit')),
      desc: formData.get('description') as string,
    };

    setAddCustomer(newCustomer);
  };

  useEffect(() => {
    if (addCustomer) {
      setArrCust((prevState: Customer[]) => [
        ...prevState,
        addCustomer,
      ]);
      setShowAddCustomerModal(false)
    }
  }, [addCustomer, setArrCust]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAddCustomerModal(false);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className='absolute top-0 left-0 w-screen h-screen bg-gray-400 bg-opacity-50 -mx-2 flex items-center justify-center'
    onClick={handleOverlayClick}
    >
        
      <div className='bg-white w-1/2 h-1/2 p-3 rounded-lg max-w-[700px]' onClick={handleModalClick}>
        <div className='flex justify-between items-start'>
          <h3 className='text-xl font-bold'>New customer</h3>
          <button
          onClick={() => setShowAddCustomerModal(false)}
          >x</button>
        </div>

        <form className='flex flex-col gap-4 mt-4' onSubmit={takeAllDataForCustomer}>
          <div className='flex gap-4'>
            <label htmlFor="" className='flex flex-col'>
              Customer name:
              <input
                type="text"
                name="name"
                placeholder='Name'
                className="h-full rounded-md py-[5px] pl-2 pr-3 bg-white border shadow-md min-w-80 outline-none"
              />
            </label>

            <label htmlFor="" className='flex flex-col'>
              Status:
              <select
                name="status"
                className='rounded-md py-[5px] pl-2 pr-3 bg-white border shadow-md outline-none'
              >
                <option value="Open">Open</option>
                <option value="Paid">Paid</option>
                <option value="Inactive">Inactive</option>
              </select>
            </label>
          </div>

          <div className='flex gap-5'>
            <label htmlFor="" className='flex flex-col'>
              Rate:
              <input
                type="number"
                name="rate"
                className="w-full rounded-md py-[5px] pl-2 pr-3 bg-white border shadow-md outline-none"
              />
            </label>

            <label htmlFor="" className='flex flex-col'>
              Balance:
              <input
                type="number"
                name="balance"
                className="w-full rounded-md py-[5px] pl-2 pr-3 bg-white border shadow-md outline-none"
              />
            </label>

            <label htmlFor="" className='flex flex-col'>
              Deposit:
              <input
                type="number"
                name="deposit"
                className="w-full rounded-md py-[5px] pl-2 pr-3 bg-white border shadow-md outline-none"
              />
            </label>
          </div>

          <div>
            <label htmlFor="" className='flex flex-col'>
              Description:
              <textarea
                name="description"
                className="text-start h-[168px] rounded-md py-[5px] pl-2 pr-3 bg-white border shadow-md outline-none resize-none"
              />
            </label>
          </div>

          <button
            className='self-start bg-[#2264E5] min-w-[150px] text-white font-medium rounded-md px-4 py-2'
            type='submit'
          >
            Submit new customer
          </button>
        </form>
      </div>
    </div>
  );
}
