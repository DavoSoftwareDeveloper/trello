import Image from "next/image"

export default function Header() {
  return (
    <div className="p-2 text-center flex justify-center items-center bg-slate-400 gap-2">
      <Image src='/assets/test.png' alt='logo' width={32} height={32} className=' border-black border-[1px]' />
      <h1 className="font-bold p-2 text-xl">DavoDeveloper.com</h1>
    </div>
  )
}

