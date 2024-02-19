import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { isValidEmail } from '@/utils'


type Data = {
    msg: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {

        case 'POST':    
            return sendEmailContact( req, res )
    
        default:
            return res.status(400).json({ msg: 'Bad request' })
    }
}

const sendEmailContact = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { name='', email='', message='' } = req.body

    if( name.trim() === '' ){
        return res.status(400).json({ msg: 'Ingresa tu nombre por favor' })
    }

    if( email.trim() === '' ){
        return res.status(400).json({ msg: 'Ingresa tu correo por favor' })
    }

    if( !isValidEmail(email) ){
        return res.status(400).json({ msg: 'El correo no es válido' })
    }

    if( message.trim() === '' ){
        return res.status(400).json({ msg: 'Ingresa un mensaje por favor' })
    }
    
    const transport = nodemailer.createTransport({
        service: process.env.MAILER_SERVICE,
        auth: {
            user: process.env.MAILER_EMAIL,
            pass: process.env.MAILER_SECRET_KEY
        }
    })

    try {        
        await transport.sendMail({
            from: 'PORTAFOLIO <tonsanzjimz@gmail.com>',
            to: 'tonatiuj.sanchez@gmail.com',
            subject: 'PORTAFOLIO - Nuevo Mensaje',
            html:`
            <body style="font-family: Arial, sans-serif; background-color: #f1f1f1; margin-top: 20px; padding: 10px;">
                <table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                    <tr>
                        <td style="padding: 30px;">
                            <h3 style="color: #0F172A; margin-top: 20px; text-transform: uppercase; font-weight: bold; text-align: center;">NUEVO MENSAJE</h3>
                            <p><strong>Nombre:</strong> ${ name }</p>
                            <p><strong>Correo:</strong> ${ email }</p>
                            <p><strong>Mensaje:</strong></p>
                            <p>${ message }</p>
                        </td>
                    </tr>
                </table>
            </body>`
        })

        return res.status(200).json({ msg: 'Mensaje enviado' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'Server - Hubo un error al enviar el mensaje' })
    }

}
