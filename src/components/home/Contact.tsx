import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { tsxApi } from '@/apis'
import { toastError, toastSuccess } from '@/libs'

import { Loader } from '@/components/icons'
import { isValidEmail } from '@/utils'


interface IContactFormData {
    name: string
    email: string
    message: string
}
export const Contact = () => {

    const [sendingMessage, setSendingMessage] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IContactFormData>()


    const handleMessageSubmit = (data:IContactFormData) => {
        setSendingMessage(true)
        tsxApi.post('/public/contact', data)
            .then( ()=>{
                toastSuccess('Mensaje enviado')
                reset()
            })
            .catch(()=> toastError('Hubo un error al enviar el mensaje') )
            .finally(()=> setSendingMessage(false))
    }

    return (
        <section id="contact" className="py-12 sm:py-28">
            <h2 className="text-center font-extrabold text-3xl md:text-4xl uppercase mb-3">Contacto</h2>
            <p className="text-center max-w-[40rem] mx-auto md:text-lg mb-10 sm:mb-20">Si estás interesado en trabajar conmigo en tu próximo proyecto, no dudes en ponerte en contacto conmigo.</p>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 px-5">
                <div>
                    <h3 className="font-bold text-xl sm:text-[2rem] mb-2 md:mb-7">Hablemos</h3>
                    <p className="md:text-lg md:mb-7">Actualmente estoy disponible para asumir nuevos proyectos, así que siéntete libre de enviarme un mensaje sobre cualquier idea que quieras contarme.</p>
                    <ul className="flex items-center gap-4 mt-5">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/tonatiujsanchez"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="inline-block hover:scale-110 transition-all"
                            >
                                <i className='bx bxl-linkedin-square text-[1.8rem]'></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/tonatiujsanchez"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="inline-block hover:scale-110 transition-all"
                            >
                                <i className='bx bxl-github text-[1.8rem]' ></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/tonatiujsanchez"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="inline-block hover:scale-110 transition-all"
                            >
                                <i className='bx bxl-twitter text-[1.8rem]'></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com/tonatiujsanchez"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="inline-block hover:scale-110 transition-all"
                            >
                                <i className='bx bxl-instagram text-[1.8rem]'></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <form onSubmit={ handleSubmit( handleMessageSubmit ) }  >
                        <div className="relative flex flex-col gap-1 mb-6">
                            <label htmlFor="name" className="font-bold text-slate-800">Nombre<span className="text-xs text-red-700 font-normal">*</span></label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Ingresa tu nombre"
                                className="bg-white px-3 py-4 rounded border border-transparent hover:border-slate-700"
                                {...register('name', {
                                    required: 'Ingresa tu nombre por favor',
                                    validate: ( value )=> value.trim() === '' ? 'Ingresa tu nombre por favor' : undefined
                                })}
                            />
                            {
                            !!errors.name &&
                                <p className="absolute -bottom-5 text-sm text-red-600">{errors.name.message}</p>
                            }
                        </div>
                        <div className="relative flex flex-col gap-1 mb-6">
                            <label htmlFor="email" className="font-bold text-slate-800">Correo<span className="text-xs text-red-700 font-normal">*</span></label>
                            <input
                                id="email"
                                type="email"
                                className="bg-white px-3 py-4 rounded border border-transparent hover:border-slate-700"
                                placeholder="Ingresa tu correo"
                                {...register('email', {
                                    required: 'Ingresa tu correo por favor',
                                    validate: (value) => isValidEmail( value ) ? undefined : 'Correo no válido'
                                })}
                            />
                            {
                                !!errors.email &&
                                <p className="absolute -bottom-5 text-sm text-red-600">{errors.email.message}</p>
                            }
                        </div>
                        <div className="relative flex flex-col gap-1 mb-6">
                            <label htmlFor="message" className="font-bold text-slate-800">Mensaje<span className="text-xs text-red-700 font-normal">*</span></label>
                            <textarea
                                id="message"
                                placeholder="Cuentame sobre tu proyecto"
                                className="bg-white px-3 py-4 rounded min-h-[16rem] max-h-[16rem] border border-transparent hover:border-slate-700"
                                {...register('message', {
                                    required: 'Ingresa un mensaje por favor',
                                    validate: ( value )=> value.trim() === '' ? 'Ingresa un mensaje por favor' : undefined
                                })}
                            >
                            </textarea>
                            {
                                !!errors.message &&
                                <p className="absolute -bottom-5 text-sm text-red-600">{errors.message.message}</p>
                            }
                        </div>
                        <button
                            type="submit"
                            disabled={ sendingMessage }
                            className="flex justify-center items-center w-full md:min-w-[12rem] md:w-auto md:ml-auto gap-3 text-white font-semibold bg-slate-800 hover:bg-slate-950 px-5 py-3 rounded-lg uppercase transition-all duration-300 hover:shadow-lg hover:shadow-slate-400 min-h-[3.4rem] disabled:bg-slate-600"
                        >
                            {
                                !sendingMessage
                                ?(
                                    <>
                                        Enviar
                                        <i className='bx bx-send text-xl -rotate-12 animate-wiggle animate-infinite animate-duration-[2500ms] animate-delay-0 animate-ease-in animate-alternate-reverse animate-fill-forwards'></i>
                                    </>
                                ):(
                                    <div className="flex items-center justify-center gap-2">
                                            <Loader />
                                            Enviando...
                                    </div>
                                )
                            }
                            
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
