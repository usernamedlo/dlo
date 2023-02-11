import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from "@emailjs/browser"

type FormInputs = {
    subject: string
    email: string
    message: string
}

export const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

    const onSubmit: SubmitHandler<FormInputs> = data => {
        emailjs.send('service_ygsqsrk', 'template_4x5cqtv', {
            subject: data.subject,
            email: data.email,
            message: data.message
        },
        'UH4i6JiK5Qr3YDLWP')
    }

    return (
        <main>
            <form className="mt-5 flex flex-col items-center justify-center text-black" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="block" htmlFor="subject">Sujet du mail</label>
                    <input {...register("subject")} type="text" className="border" name="subject" id="subject" placeholder="Quel est le sujet ?"/>
                </div>

                <div className="mb-3">
                    <label className="block" htmlFor="email">Email</label>
                    <input {...register("email", {required:true})} type="text" className="border" name="email" id="email" placeholder="Votre email"/>

                    {errors.email && <p className="text-red-500">{errors.email.message}Email requis</p>}
                </div>

                <div className="mb-3">
                    <label className="block" htmlFor="message">Sujet du mail</label>
                    <textarea {...register("message")} rows={5} className="border resize-none" name="message" id="message" placeholder="Votre message"/>
                </div>
                <input type="submit" className="block bg-[white] text-[black] py-3 px-3 hover:bg-[gray]"/>
            </form>
        </main>
    )
}