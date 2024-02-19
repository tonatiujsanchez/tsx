import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const toastError = ( msg:string ) => toast.error( msg, {
    position: 'bottom-right'
})
export const toastSuccess = ( msg:string ) => toast.success( msg, {
    position: 'bottom-right'
})