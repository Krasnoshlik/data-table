import Image from 'next/image'
import FilterIcon from '../../assets/filter.png';
import SearchIcon from '../../assets/Search.png';
import { useContext } from "react";
import { Customers_data } from '@/app/context/context';

export default function ControlPanel({setShowAddCustomerModal, checkedCustomersIds,setCheckedCustomersIds} : {setShowAddCustomerModal: any, checkedCustomersIds : number[],setCheckedCustomersIds: any}) {
  const { arrCust, setArrCust } = useContext(Customers_data);

  function handleDeleteForSeveralCustomers() {
    let filteredArrCust = arrCust.filter((e) => {if(!checkedCustomersIds.includes(e.id)) return e });
    setArrCust(filteredArrCust);
    setCheckedCustomersIds([]);
  }

  return (
    <section className=' py-2 px-4 flex justify-between'>
        <div className=' flex items-center gap-4'>
        <button className=' rounded-md py-2 px-3 bg-white border shadow-md'><Image src={FilterIcon} alt='FilterIcon'/></button>

        <div className="relative">
          <input
            type="text"
            className="h-full rounded-md py-[5px] pl-10 pr-3 bg-white border shadow-md min-w-80 outline-none"
            placeholder="Search..."
          />
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2 flex justify-center">
          <button>
            <Image src={SearchIcon} alt="Search Icon" width={16} height={16} />
            </button>
          </div>
        </div>

        </div>

        <div className=' flex gap-5'>
        <button className=' bg-red-600 min-w-[160px] text-white font-medium rounded-md'
        onClick={() => handleDeleteForSeveralCustomers()}
        >
          - Delete customers
        </button>

        <button 
        onClick={() => setShowAddCustomerModal(true)}
        className=' bg-[#2264E5] min-w-[150px] text-white font-medium rounded-md'>+ Add customer</button>
        </div>
    </section>
  )
}
