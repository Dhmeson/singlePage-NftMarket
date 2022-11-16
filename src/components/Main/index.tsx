import logotypes from '../../assets/logotypes.png'
import vector from '../../assets/Vector.png'
import frame from '../../assets/Frame.png'

function Main() {
    return (
        <main className='w-full h-[30%]  md:h-[50%] mt-5'>

        <div  className='w-full h-[80%]   flex  items-center justify-center '>
  
          <div className=' top-20 w-[45%] flex flex-col items-center md:w-[30%] lg:w-[25%]'>
            <h2 className='text-gray text-[10px] mb-2'>Non Fungible Tokens</h2>
            <div className='flex items-center  self-start'>
              <h1 className=' font-[Sora] text-[24px] text-white lg:text-[40px]'>A new NFT</h1>
              <img src={vector} className="w-auto h-[20px] ml-[2px] lg:h-[25px]"></img>
            </div>
            <div className='flex items-center'>
              <img src={frame} className="w-[20px] h-[20px] lg:h-[25px] lg:w-[25px]"></img>
              <h1 className=' font-[Sora] text-[24px] text-white ml-2 lg:text-[40px]'>Experience</h1>
            </div>
            <h2 className=' font-[Sora] text-[10px] text-gray mt-2'>Discover, collect and sell</h2>

          </div>
  
  
        </div>
        
        <div className='flex w-full justify-center mt-4'>
          <img src={logotypes} className={"w-[150px] lg:w-[300px]"}></img>
        </div>
        </main>
    )}
    export default Main;