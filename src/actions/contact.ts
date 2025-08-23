import { nullToEmptyString } from "@/helpers";
import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const contact ={
    sendEmail: defineAction({
        accept:'form',
        input: z.object({
            name:z.preprocess(
                nullToEmptyString,
            z.string().min(1, {message:'el nombre no puede ir vacio'})
             ),
             email:z.preprocess(
                nullToEmptyString,
            z.string().min(1, {message:'el email no puede ir vacio'})
            .email('email no valido')
             ),
             subject:z.preprocess(
                nullToEmptyString,
            z.string().min(1, {message:'el asunto no puede ir vacio'})
             ),
             message:z.preprocess(
                nullToEmptyString,
            z.string().min(30, {message:'el mensaje no puede ir vacio o es muy corto'})
             ),
        }),
        handler:(input)=>{
            console.log (input)
        }
    })
}