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
        handler: async (input)=>{
            const url =`${import.meta.env.HOME_URL}/wp-json/contact-form-7/v1/contact-forms/141/feedback`

            const formData = new FormData()
            formData.append('your-name', input.name)
            formData.append('your-email', input.email)
            formData.append('your-subject', input.subject)
            formData.append('your-message', input.message)
            formData.append('_wpcf7_unit_tag', "wpcf7-123")

            const res = await fetch(url, {
                method:'POST',
                body: formData
            })

            await res.json()
            

            return{
                error:false,
                message: 'Tu mensaje ha sido enviado correctamente'
            }
        }
    })
}