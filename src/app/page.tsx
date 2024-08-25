import ControlPanel from "./components/ui/control-panel";
import Image from "next/image";
import ColumnSorting from './assets/column-sorting.png';
import { customers } from '../../data/customers';
import CustomerLine from "./components/ui/customer-line";
import AddCustomer from "./components/ui/add-customer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen py-4">
     <section className=" bg-[#F9FAFC] max-w-7xl w-full h-full rounded-lg border py-4">
      <ControlPanel/>

      <div className=" mt-4">

        <div className=" custom-grid font-semibold text-[11px] text-[#464F60] px-4">

        <label className="container">
      <input type="checkbox"></input>
      <span className="checkmark checkmark-l"></span>
      </label>

          <button className=" flex items-center gap-1">
            <h4>NAME</h4>
              <Image src={ColumnSorting} alt='ColumnSorting'/>
            </button>


          <h4>DESCRIPTION</h4>

          <button className=" flex items-center gap-1">
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
          customers.map((e,i) => {
            return (
              <div key={i}>
              <CustomerLine customer={e}/>
              </div>
            )
          })
        }
        </div>
      </div>

      {
        <AddCustomer/>
      }
     </section>
    </main>
  );
}
