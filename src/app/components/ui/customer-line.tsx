"use client";
import React, { useContext, useEffect, useState } from "react";
import StatusOvall from "./status-ovall";
import Image from "next/image";
import TrashIcon from "../../assets/trash.png";
import { Customer } from "@/app/types/project-types.ds";
import { Customers_data } from "@/app/context/context";

export default function CustomerLine({ customer, setCheckedCustomersIds, checkedCustomersIds }: { customer: Customer, setCheckedCustomersIds: any, checkedCustomersIds: number[] }) {
  const [showChecked, setShowChecked] = useState(false);
  const { arrCust, setArrCust } = useContext(Customers_data);

  const handleDelete = () => {
    setArrCust((prevState) => prevState.filter((e) => e.id !== customer.id));
    setCheckedCustomersIds((prevState: number[]) => prevState.filter((id) => id !== customer.id));
    setShowChecked(false);
  };

  useEffect(() => {
    if (checkedCustomersIds.includes(customer.id)) {
      setShowChecked(true);
    } else {
      setShowChecked(false);
    }
  }, [checkedCustomersIds, customer.id]);

  useEffect(() => {
    if (showChecked) {
      if (!checkedCustomersIds.includes(customer.id)) {
        setCheckedCustomersIds((prevState: number[]) => [...prevState, customer.id]);
      }
    } else {
      setCheckedCustomersIds((prevState: number[]) => prevState.filter((id) => id !== customer.id));
    }
  }, [showChecked]);

  return (
    <div
      className={`group custom-grid px-4 items-center justify-between py-2 ${
        customer.id % 2 === 0 ? "bg-white" : ""
      } ${showChecked ? "bg-[#EBF0FA] pl-[14px] border-l-2 border-blue-500" : ""}`}
    >
      <label className="container">
        <input
          type="checkbox"
          checked={showChecked}
          onChange={() => setShowChecked(!showChecked)}
        />
        <span className="checkmark"></span>
      </label>

      <div className="flex flex-col justify-start">
        <h3 className="font-bold text-[#171C26] text-sm">{customer.name}</h3>
        <p className="text-[#687182] text-[12px]">{customer.id}</p>
      </div>

      <div>
        <p className="text-[#464F60] text-sm">{customer.desc}</p>
      </div>

      <div className="flex">
        <StatusOvall status={customer.status} />
      </div>

      <div>
        <p className="text-[#464F60] text-sm">{customer.rate}$</p>
      </div>

      <div className={`${customer.balance > 0 ? "text-green-400" : "text-red-400"}`}>
        <p>{customer.balance}$</p>
      </div>

      <div>
        <p className="text-[#464F60] text-sm">{customer.deposit}$</p>
      </div>

      <div>
              <button className="flex gap-4 justify-between h-4" onClick={handleDelete}>
                <Image src={TrashIcon} alt="TrashIcon" />
              </button>
      </div>
    </div>
  );
}

