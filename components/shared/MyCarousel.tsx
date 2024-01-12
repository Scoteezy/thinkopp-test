import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card, CardContent, CardHeader } from "../ui/card";
type MyCarouselProps = { 
    data:{ 
        id: number;
        types: string;
        img: string;
        title: string;
        date: string;

    }[]
}
const MyCarousel = ({data}: MyCarouselProps) => {
  return (
    <div className="flex flex-col h-[453px] mt-10">
  <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-7xl "
    >
      <CarouselContent>
      {data.map((el)=>
     {
      let type__1_style = el.title.length>35?"rounded-full w-full h-[200px]" :"rounded-full w-64 h-[200px]";
      return(
        <CarouselItem key={el.id} className={`${el.title.length>35?'pl-1 md:basis-1/2' : "pl-1 basis-1/2 md:basis-1/4"}`}>
        <div className="p-1">
        <Card className="h-[480px] border-none cursor-pointer">
            
        <CardContent className="flex items-center justify-center p-6 ">
        <Image className={`${el.types==='types__1'? type__1_style : "ml-10 h-[200px] w-80 rounded-ee-full rounded-tl-full"}`} src={el.img} alt="animal image" width={150} height={150}/>
                 
                </CardContent>
                <CardHeader>
            <span className="text-3xl font-semibold text-[#7884a5] line-clamp-2">{el.title}</span>
            </CardHeader>
            <span className="ml-6 text-[#525C7A]">{el.date}</span>
        </Card>
        </div>
       
        
      </CarouselItem>
      )
     })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
  )
}

export default MyCarousel