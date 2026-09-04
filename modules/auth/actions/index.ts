"use server";

import { db } from "@/lib/db";

export const onBoardUser = async()=>{
    try{
        const user = await currentUser()

        if(!user){
            return {
                success: false,
                error: "No authenticated User Found"
            }
        }
            const {id,firstName,lastName,imageUrl,emailAddresses} = user;
            // Using Upsert to create or Update User
            const newUser = await db.user.upsert({
                where:{
                    clerkId:id
                },
                update:{
                    firstName:firstName || null,
                    lastName: lastName || null,
                    imageUrl:imageUrl || null,
                    email : emailAddresses[0]?.emailAddress || "",
                },
                create:{
                    clerkId:id,
                    firstName:firstName || null,
                    lastName: lastName || null,
                    imageUrl:imageUrl || null,
                    email : emailAddresses[0]?.emailAddress || "",
                }
            })
        return {
                success: true,
                user:newUser,
                message : "User Onboarded Successfully!!"
            }
    
    }catch(err) {
console.error("Error Onboarding User", err);
         return {
                success: false,
                error : "User Onboarded Failed!!"
            };
    }
}