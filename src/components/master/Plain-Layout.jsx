import React from 'react';
import AppNavBar from "./AppNavBar";
import Footer from "./Footer";
import {Toaster} from "react-hot-toast";
import { PrismaClient } from '@prisma/client';

async function getData(){
    let prisma =new PrismaClient()
    // let socials=  await fetch('http://localhost:3000/api/social')
    // .then(res=> res.json())
    // .then(data=>console.log(data))
    // let categories= (await (await fetch(`${process.env.HOST}/api/category`)).json())['data']
  
    let socials = await prisma.socials.findMany()
    let categories = await prisma.categories.findMany({select:{id:true,name:true}})
   return {socials:socials,categories:categories}
}


const PlainLayout = async (props) => {
    const data=await getData();
    // console.log(data);
    return (
        <div>
            {/* {
                JSON.stringify(data)
            } */}
            <AppNavBar data = {data} />
            {props.children}
            <Toaster position="bottom-center"/>
            <Footer data={data}/>
        </div>
    );
};

export default PlainLayout;