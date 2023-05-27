import React from 'react';
import SubscriptionPlanCard from "@/components/subscription-plan/card";
import {TbVip} from "react-icons/tb";
import {AiFillHourglass, AiOutlineVideoCamera} from "react-icons/ai";

const items = [
    {
        title:"Starter",
        price:10,
        options:[
            {
                title:"Vip",
                icon:<TbVip/>
            },
            {
                title:"100 Hours Video",
                icon:<AiFillHourglass/>,

            },{
                title:"FULL HD FORMAT",
                icon:<AiOutlineVideoCamera/>,

            },
        ]
    }
    ,{
        title:"Starter",
        price:10,
        options:[
            {
                title:"Vip",
                icon:<TbVip/>
            },
            {
                title:"200 Hours Video",
                icon:<AiFillHourglass/>,

            },{
                title:"4K",
                icon:<AiOutlineVideoCamera/>,

            },
        ]
    }
    ,{
        title:"Starter",
        price:10,
        options:[
            {
                title:"Vip",
                icon:<TbVip/>
            },
            {
                title:"Unlmited",
                icon:<AiFillHourglass/>,

            },{
                title:"8K FORMAT",
                icon:<AiOutlineVideoCamera/>,

            },
        ]
    }
]

const SubscriptionPlan = () => {
    return (
        <div className={"min-h-screen flex flex-col  py-10"}>
            <div className="flex flex-col py-20 items-center w-full sm:space-y-2 md:space-y-4 text-center">
                <h1 className={"text-2xl text-shadow-sm font-bold p-2 text-transparent md:text-5xl lg:text-7xl bg-clip-text bg-gradient-to-r from-blue-600 to-blue-200"}>Flexible pricing for teams of any size.</h1>
                <p className={"text-md lg:text-3xl md:text-2xl text-shadow-sm"}>Relaxing with watching your favourite movies and tv series</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="md:px-4 md:grid md:gird-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-5 gap-3 md:space-y-0 space-y-4">
                {/*    Card Plan*/}
                    {
                        items.map(item=>(
                            <SubscriptionPlanCard
                                key={item.title}
                                title={item.title}
                                price={item.price}
                                options={item.options}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPlan;
