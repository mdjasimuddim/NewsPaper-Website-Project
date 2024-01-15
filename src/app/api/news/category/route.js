import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET(req,res) {
    try{
        let {searchParams}=new URL(req.url);
        let catID= parseInt(searchParams.get('catID'));

        const prisma=new PrismaClient();
        //For Popular
        // const result = await prisma.news_List.createMany({
        //     data:[
        //         {
        //             title:'Whenever you need some fake data',
        //             short_des:'It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.',
        //             img1:'https://photo.teamrabbil.com/images/2024/01/03/Mask-Group-4.md.png',
        //             img2:'https://photo.teamrabbil.com/images/2024/01/01/3.md.png',
        //             img3:'https://photo.teamrabbil.com/images/2024/01/01/1.md.png',
        //             img4:'https://photo.teamrabbil.com/images/2024/01/01/2.md.png',
        //             keywords:'fake api',
        //             long_des:'JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.',
        //             type:'Popular',
        //             catID:1
        //         },
        //         {
        //             title:'Whenever you need some fake data',
        //             short_des:'It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.',
        //             img1:'https://photo.teamrabbil.com/images/2024/01/03/Mask-Group-4.md.png',
        //             img2:'https://photo.teamrabbil.com/images/2024/01/01/3.md.png',
        //             img3:'https://photo.teamrabbil.com/images/2024/01/01/1.md.png',
        //             img4:'https://photo.teamrabbil.com/images/2024/01/01/2.md.png',
        //             keywords:'fake api',
        //             long_des:'JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.',
        //             type:'Popular',
        //             catID:1
        //     },
        //     {
        //         title:'Whenever you need some fake data',
        //         short_des:'It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.',
        //         img1:'https://photo.teamrabbil.com/images/2024/01/03/Mask-Group-4.md.png',
        //         img2:'https://photo.teamrabbil.com/images/2024/01/01/3.md.png',
        //         img3:'https://photo.teamrabbil.com/images/2024/01/01/1.md.png',
        //         img4:'https://photo.teamrabbil.com/images/2024/01/01/2.md.png',
        //         keywords:'fake api',
        //         long_des:'JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.',
        //         type:'Popular',
        //         catID:1
        //      }
        //     ]
        // })
        //For Featured
        // const result = await prisma.news_List.create({
        //     data:{
        //             title:'Whenever you need some fake data',
        //             short_des:'It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.',
        //             img1:'https://photo.teamrabbil.com/images/2024/01/03/Mask-Group-4.md.png',
        //             img2:'https://photo.teamrabbil.com/images/2024/01/01/3.md.png',
        //             img3:'https://photo.teamrabbil.com/images/2024/01/01/1.md.png',
        //             img4:'https://photo.teamrabbil.com/images/2024/01/01/2.md.png',
        //             keywords:'fake api',
        //             long_des:'JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.',
        //             type:'Featured',
        //             catID:1
        //     }
        // })

        //For Slider
        // const result = await prisma.news_List.createMany(
        //     {
        //         data:
        //             [
        //                 {
        //                     title:'Whenever you need some fake data',
        //                     short_des:'It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.',
        //                     img1:'https://photo.teamrabbil.com/images/2024/01/03/Mask-Group-4.md.png',
        //                     img2:'https://photo.teamrabbil.com/images/2024/01/01/3.md.png',
        //                     img3:'https://photo.teamrabbil.com/images/2024/01/01/1.md.png',
        //                     img4:'https://photo.teamrabbil.com/images/2024/01/01/2.md.png',
        //                     keywords:'fake api',
        //                     long_des:'JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.',
        //                     type:'Sider',
        //                     catID:1
        //                 },
        //                 {
        //                     title:'Whenever you need some fake data',
        //                     short_des:'It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.',
        //                     img1:'https://photo.teamrabbil.com/images/2024/01/03/Mask-Group-4.md.png',
        //                     img2:'https://photo.teamrabbil.com/images/2024/01/01/3.md.png',
        //                     img3:'https://photo.teamrabbil.com/images/2024/01/01/1.md.png',
        //                     img4:'https://photo.teamrabbil.com/images/2024/01/01/2.md.png',
        //                     keywords:'fake api',
        //                     long_des:'JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.',
        //                     type:'Sider',
        //                     catID:1
        //                 },{
        //                     title:'Whenever you need some fake data',
        //                     short_des:'It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.',
        //                     img1:'https://photo.teamrabbil.com/images/2024/01/03/Mask-Group-4.md.png',
        //                     img2:'https://photo.teamrabbil.com/images/2024/01/01/3.md.png',
        //                     img3:'https://photo.teamrabbil.com/images/2024/01/01/1.md.png',
        //                     img4:'https://photo.teamrabbil.com/images/2024/01/01/2.md.png',
        //                     keywords:'fake api',
        //                     long_des:'JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.',
        //                     type:'Sider',
        //                     catID:1
        //                 }
        //             ]
                
        //     }
        // )
        const result=await prisma.news_List.findMany({
                where:{catID:catID},
                select:{id:true,title:true,short_des:true,img1:true,img2:true,img3:true,img4:true,createdAt:true}
        }
        )
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}