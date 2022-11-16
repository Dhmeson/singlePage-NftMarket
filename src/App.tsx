import Card, { postCard } from './components/Card';
import Header from './components/Header';
import Main from './components/Main';
import image from './assets/Image.png'
import image1 from './assets/Image1.png'
import iconRight from './assets/iconRight.png'
import user from './assets/user.png'
import group from './assets/Group.png'
import paint from './assets/paint.png'
import wallet from './assets/wallet.png'
import StatisticView from './components/StatisticView';
import Footer from './components/Footer';

function App() {
  const data:postCard[]=
[
    {title:"Dui accumsan leo vestibulum ornare eu",cryptoValue:"1.14 ETH",time:"22:13",bidding:100,like:30,image:image},
    {title:"Dui accumsan leo vestibulum ornare eu",cryptoValue:"1.11 ETH",time:"22:13",bidding:150,like:10,image:image1},
    {title:"Dui accumsan leo vestibulum ornare eu",cryptoValue:"2.11 ETH",time:"12:13",bidding:100,like:20,image:image},


]
  return (
    <div className="w-full h-screen bg-background flex flex-col  ">
    <Header/>
    <Main/>

    <div className='flex flex-col items-center w-full  self-center bg-background mt-4 '>
      <h1 className='text-white text-[1rem] md:text-[1.5rem] mb-4'>Latest live auctions</h1>

      <div className='  overflow-scroll  max-h-[700px] max-w-[300px] flex md:max-w-[900px] md:max-h-[800px] md:overflow-hidden'  >
        {
          data.map((i)=>{
            return <Card title={i.title} bidding={i.bidding} cryptoValue={i.cryptoValue} image={i.image} like={i.like} time={i.time} key={Math.random()*2+Math.random()}/>

          })
        }


      </div>

      
    </div>

    <div className='flex flex-col w-full h-full bg-background  p-10 md:flex-row '>
    <div className='flex w-full h-full p-4   flex-col'>
        <h2 className='text-[#7780A1] text-[10px] font-[Sora]'>Overline</h2>
        <h1 className='text-[#7780A1] text-[30px] font-[Sora] md:text-[40px]'>Sapien ipsum scelerisque convallis fusce</h1>
        <h2 className='text-[#7780A1] text-[10px] font-[Sora]'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</h2>
        <div className='flex mt-4 gap-4'>
          <button className=' border-btBorder border-[2px] w-[100px] h-10 text-white rounded-lg bg-gradient-to-r from-btOne to-btTwo ml-1 font-bold'>Get started</button>
          <button className=' border-btBorder border-[2px] w-[100px] h-10 text-[16px]  text-txtOne rounded-lg font-bold'>Learn more</button>
        </div>
    </div>

    <div className=' bg-background w-full flex  justify-center'>
      <img src={iconRight} className="h-[300px] w-[300px]"></img>
    </div>

    </div>

    <div className='flex w-full bg-background p-4 justify-center  flex-wrap lg:flex-nowrap'>
      <StatisticView value='300k' icon={user} describe='Users Active' key={1}/>
      <StatisticView value='15,7k' icon={group} describe='Artworks' key={2}/>
      <StatisticView value='300k' icon={paint} describe='Artists' key={3}/>
      <StatisticView value='35.8k' icon={wallet} describe='ETH Spent' key={4}/>
    </div>
    <Footer/>

  </div>
  );
}

export default App;


