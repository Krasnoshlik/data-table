"use client"
import ControlPanel from "./components/ui/control-panel";
import Image from "next/image";
import ColumnSorting from './assets/column-sorting.png';
import CustomerLine from "./components/ui/customer-line";
import AddCustomer from "./components/ui/add-customer";
import { useContext, useState } from "react";
import { Customers_data } from '@/app/context/context';

export default function Home() {
  const { arrCust } = useContext(Customers_data);
  const [ showAddCustomerModal, setShowAddCustomerModal ] = useState(false);
  const [ checkedCustomersIds, setCheckedCustomersIds] = useState([]);
  const [ arrCustForFilter, setArrCustForFilter] = useState(arrCust);

  const handleNameSorting = () => {
    setArrCustForFilter(arrCustForFilter.toSorted().reverse())
  }

  const handleStatusSorting = () => {
    const groupedByStatus = arrCustForFilter.reduce((acc, customer) => {
      const status = customer.status;
  
      if (!acc[status]) {
        acc[status] = [];
      }
  
      acc[status].push(customer);
  
      return acc;
    }, {});

    const sortedArr = Object.values(groupedByStatus).flat();
  
    setArrCustForFilter(sortedArr);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen py-4">
     <section className=" bg-[#F9FAFC] max-w-7xl w-full h-full rounded-lg border py-4">
      <ControlPanel setShowAddCustomerModal={setShowAddCustomerModal} checkedCustomersIds={checkedCustomersIds} setCheckedCustomersIds={setCheckedCustomersIds}/>

      <div className=" mt-4">

        <div className=" custom-grid font-semibold text-[11px] text-[#464F60] px-4">

          <div>

          </div>

          <button className=" flex items-center gap-1" onClick={handleNameSorting}>
            <h4>NAME</h4>
              <Image src={ColumnSorting} alt='ColumnSorting'/>
            </button>


          <h4>DESCRIPTION</h4>

          <button className=" flex items-center gap-1" onClick={handleStatusSorting}>
            <h4>STATUS</h4>
              <Image src={ColumnSorting} alt='ColumnSorting'/>
            </button>

          <h4>RATE</h4>

          <h4>BALANCE</h4>

          <h4>DEPOSIT</h4>

        </div>

        <span className=" block w-full h-[1px] bg-slate-200 mt-2"></span>

        <div className=" flex flex-col gap-2">
        {
          arrCustForFilter.map((e,i) => {
            return (
              <div key={i}>
              <CustomerLine customer={e} setCheckedCustomersIds={setCheckedCustomersIds} checkedCustomersIds={checkedCustomersIds}/>
              </div>
            )
          })
        }
        </div>
      </div>

      {
        showAddCustomerModal &&
        <AddCustomer setShowAddCustomerModal={setShowAddCustomerModal}/>
      }
     </section>
    </main>
  );
}
