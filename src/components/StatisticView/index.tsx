interface statisticProps{
    icon:string 
    value:string
    describe:string
}
export default function StatisticView({describe,icon,value}:statisticProps){
    return(
        <div className="flex flex-col w-[50%] items-center mt-2">
            <img src={icon} className="w-[32px] h-auto"></img>
            <h1 className="text-white text-[20px] mt-2">{value}</h1>
            <h2 className="text-gray text-[10px]">{describe}</h2>
        </div>
    )
}