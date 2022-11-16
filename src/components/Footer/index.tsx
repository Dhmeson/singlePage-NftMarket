import Sygnet from '../../assets/Sygnet.png'
import facebook from '../../assets/facebook.png'
import insta from '../../assets/insta.png'
import github from '../../assets/github.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
export default function Footer(){
    return(
        <footer className='bg-background flex flex-col w-full p-4 md:flex-row'>
            <div className='flex flex-col w-full h-[300px] border border-gray rounded-lg p-5 justify-between'>
                <div className='flex w-full  items-center'>
                    <img src={Sygnet} className="w-[34px] h-[34px]"/>
                    <h1 className='text-white font-[Sora] font-extrabold text-[20px] ml-2'>NFT Market</h1>
                </div>
                <div className='flex w-full gap-5'>
                    <h2 className='text-gray font-[Sora] text-[12px] hover:cursor-pointer'>Support</h2>
                    <h2 className='text-gray font-[Sora] text-[12px] hover:cursor-pointer'>Term of service</h2>
                    <h2 className='text-gray font-[Sora] text-[12px] hover:cursor-pointer'>License</h2>
                </div>
            </div>

            <div className='flex flex-col w-full h-[300px] border border-gray rounded-lg p-5 justify-between'>
                <div className='flex w-full  flex-col gap-2 min-h-[200px]'>                
                    <h1 className='text-white font-[Sora]  text-[12px] ml-2'>Auctions</h1>
                    <h1 className='text-white font-[Sora]  text-[12px] ml-2'>Roadmap</h1>
                    <h1 className='text-white font-[Sora]  text-[12px] ml-2'>Discover</h1>
                    <h1 className='text-white font-[Sora]  text-[12px] ml-2'>Community</h1>
                    <button className=' border-btBorder border-[2px] w-[100px] h-10 text-white rounded-lg bg-gradient-to-r from-btOne to-btTwo mt-2 font-bold'>Myaccount</button>

                </div>
                <div className='flex w-full gap-5 mt-2'>
                    <img src={facebook} className={"w-[32] h-[32] hover:cursor-pointer"}></img>
                    <img src={linkedin} className={"w-[32] h-[32] hover:cursor-pointer"}></img>
                    <img src={github} className={"w-[32] h-[32] hover:cursor-pointer"}></img>
                    <img src={twitter} className={"w-[32] h-[32] hover:cursor-pointer"}></img>
                    <img src={insta} className={"w-[32] h-[32] hover:cursor-pointer"}></img>
                 
                </div>

               
            </div>
            <div className='flex flex-col w-full h-[300px] border border-gray rounded-lg p-5 justify-between'>               
                <div className='flex w-full flex-col justify-between h-full'>
                    <h2 className='text-gray font-[Sora] text-[12px]'>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </h2>
                    <div className='w-full bg-white h-[36px] flex rounded-lg p-0 justify-center items-center md:h-[40px]'>
                        <input placeholder='Newsletter' className='w-[70%]'></input>
                        <h2 className='text-[#2A27C9] font-[Sora] text-[12px] ml-2 font-bold '>Sign in</h2>

                    </div>
                </div>
            </div>
        </footer>
    )
}