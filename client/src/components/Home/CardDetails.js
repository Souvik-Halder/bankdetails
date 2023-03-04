import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../layout/Hero';

function CardDetails() {
    const [name, setName] = useState("");
   const [content, setContent] = useState("");
   
    const {id}=useParams();
    const options = [
        {
            id: 1,
            name: "Mountain",
            content: "This is the mountain Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
        },
        {
            id: 2,
            name: "River",
            content: "This is the river Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
        },
        {
            id: 3,
            name: "Forest",
            content: "This is the forest Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
        }
    ]
   const getData=()=>{
   for(let i=0;i<options.length;i++){
    if(Number(options[i].id)===Number(id)){
        setName(options[i].name);
        setContent(options[i].content)
    }
    
   }
   }
   useEffect(() => {
     getData();
   
     
   }, [getData])
   
   
  return (
    <>
    <Hero/>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
 <div>
         <div key={id} class="rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="/mountain.jpg" alt="Mountain" />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">{name}</div>
                                <p class="text-gray-700 text-base">
                                    {content}
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                        </div>
    </div>
    </div>
    </>
  )
}

export default CardDetails
