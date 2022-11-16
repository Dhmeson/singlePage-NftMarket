import Sygnet from '../../assets/Sygnet.png'
function Header() {
  return (
    <header className="w-full h-[117px] p-[4px]  flex flex-row flex-wrap items-center justify-around md:pt-[42px] md:pl-[48px] z-20">
     <img src={Sygnet} className="w-[34px] h-[34px]"></img>
     
     <ul className='flex flex-row w-[50%] justify-center gap-[10px]  flex-grow md:gap-[32px] '>
        <li className=' text-txtOne font-[Sora] font-bold text-[0.8rem] md:text-[1rem] hover:cursor-pointer'>Auctions</li>
        <li className=' text-txtOne font-[Sora] font-bold text-[0.8rem] md:text-[1rem] hover:cursor-pointer'>Roadmap</li>
        <li className=' text-txtOne font-[Sora] font-bold text-[0.8rem] md:text-[1rem] hover:cursor-pointer'>Discover</li>
        <li className=' text-txtOne font-[Sora] font-bold text-[0.8rem] md:text-[1rem] hover:cursor-pointer'>Community</li>
    </ul>
   
    <div className="mr-4">
    <button className=' border-btBorder border-[2px] w-[100px] h-10 text-[16px]  text-txtOne rounded-lg'>Contact</button>
    <button className=' border-btBorder border-[2px] w-[110px] h-10 text-white font-bold rounded-lg bg-gradient-to-r from-btOne to-btTwo ml-1'>Myaccount</button>
    </div>
    
   
    </header>
  );
}

export default Header;
