import Image from 'next/image'
import FilterIcon from '../../assets/filter.png';
import SearchIcon from '../../assets/Search.png';

export default function ControlPanel() {
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

        <button className=' bg-[#2264E5] min-w-[150px] text-white font-medium rounded-md'>+ Add customer</button>
    </section>
  )
}
