import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"

export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();
        const result=await prisma.socials.findMany();
        // const result = await prisma.socials.create({
        //     data:{
        //         facebook:'https://www.facebook.com/',
        //         youtube:'https://www.youtube.com/',
        //         twitter:'https://www.twitter.com/',
        //         linkedin:'https://www.linkedin.com/',
        //         about:'lorem ipsum dolar set amet, lorem ipsum dolar set amet',
        //         address:'lorem ipsum dolar set amet'
        //     }
        // })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}