import React from 'react'

export default function StatusOvall({status}:{status: string}) {
  return (
    <div className={`flex px-[10px] py-[1px] rounded-xl font-medium 
    ${status === 'Open' && ' bg-[#F0F1FA] text-[#4F5AED]'}
    ${status === 'Paid' && ' bg-[#E1FCEF] text-[#14804A]'}
    ${status === 'Inactive' && ' bg-[#E9EDF5] text-[#5A6376]'}
    `}>
        <h4>
        {status}  
        </h4>
    </div>
  )
}
