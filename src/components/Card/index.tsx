
import clock from '../../assets/clock.png'
import person from '../../assets/person.png'
import heart from '../../assets/heart.png'
export interface postCard{
    title:string
    cryptoValue:string
    time:string
    bidding:number
    like:number
    image:string
}
export default function Card ({bidding,cryptoValue,image,like,time,title}:postCard){
    return(
    <div className=' min-w-[180px] h-[240px]  border border-gray p-2 rounded-lg flex flex-col justify-between mr-2 md:min-w-[220px] md:h-[380px] md:justify-start md:gap-4'>
        <img src={image} className=" w-full h-[150px] rounded-lg  md:h-[200px] object-cover"></img>
        <div className='flex mt-1'>
            <h1 className='text-[9px] text-white font-[Sora] font-bold md:text-[12px]'>{title}</h1>
            <div className='text-[10px] border bg-[#514CFF26] w-[40%] text-center h-[20px] text-[#514CFF] rounded-md'>{cryptoValue}</div>
        </div>
        
        <div className='flex w-full items-center '>
            <img src={clock} className="w-[10px] h-[10px]"></img>
            <h2 className='text-[9px] ml-2 text-white md:text-[10px]'>{time+" min left"}</h2>
        </div>
        <div className='flex w-full border-t-[1px] border-gray pt-4 items-center '>
            <div className='flex w-[20%]'>
                <img src={person} className={"w-3 h-3 md:w-5 md:h-5"}/>
                <img src={person} className={"w-3 h-3 md:w-5 md:h-5"}/>
            </div>
            <div className='text-[8px]  text-white md:text-[10px]'>
                {bidding+" people are bidding"}
            </div>
            <div className='flex ml-2 items-center flex-1 gap-2 '>
                <img src={heart} className={"w-3 h-3 md:w-5 md:h-5"}/>
                <h2 className='text-[8px]  text-white md:text-[10px]'>{like}</h2>
            </div>
        </div>
        
    </div>
    )
}