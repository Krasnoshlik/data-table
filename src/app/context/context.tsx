"use client"
import { createContext, useState, ReactNode } from "react";
import { customers } from '../../../data/customers';
import { Customer } from '@/app/types/project-types.ds';

interface CustomersContextType {
  arrCust: Customer[];
  setArrCust: React.Dispatch<React.SetStateAction<Customer[]>>;
}

const defaultContextValue: CustomersContextType = {
  arrCust: customers,
  setArrCust: () => {},
};

export const Customers_data = createContext<CustomersContextType>(defaultContextValue);

export function CustomersArr({ children }: { children: ReactNode }) {
  const [arrCust, setArrCust] = useState<Customer[]>(customers);

  return (
    <Customers_data.Provider value={{ arrCust, setArrCust }}>
      {children}
    </Customers_data.Provider>
  );
}
