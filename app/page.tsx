import data from './mockData'
import MyCarousel from '@/components/shared/MyCarousel'
export default function Home() {
  return (
    <div className='wrapper  '>
      <div className='flex flex-col max-w-[800px] '>
        <h1 className='text-5xl text-[#7884a5]'>Полезные материалы</h1>
        <p className='text-[#525C7A]'>Собрали для вас полезные исследования схемы кормления и другие материалы, которые пригодятся для лучших результатов на вашем хозяйстве</p>
      </div>
      
      <MyCarousel data={data}/>
    </div>
  )
}
