import {useState, createContext, useContext} from 'react';

const Notificacion = ({mensaje, severidad}) => {

    const EstiloNotificacion = {
        position: 'absolute',
        top: 100,
        right: 5,
        width: 'auto',
        height: 'auto',
        backgroundColor: severidad === 'error' ? '#E29578' : '#83C5BE',
        color: '#EDF6F9',
        fontWeight: 'bold',
        padding: '5px 10px',
        borderRadius: '5px',
        boxShadow: '2px 2px 2px',
    }
    return(
        <div style={EstiloNotificacion}>
            {mensaje}
        </div>
    )
}

const NotificacionContext = createContext()

export const NotificacionProvider = ({children}) =>{

    const [msnConfig, setMsgConfig] = useState({severidad:'succes', mensaje:''})

    const setNotificacion = (sev,msn,tiempo) =>{
        setMsgConfig({severidad:sev, mensaje: msn})
        setTimeout(()=>{
            setMsgConfig({...msnConfig,mensaje:''})
        },tiempo * 1000)
    }

    return(
        <NotificacionContext.Provider value={setNotificacion}>
            {msnConfig.mensaje !== '' && <Notificacion mensaje={msnConfig.mensaje} severidad={msnConfig.severidad}/>}
            {children}
        </NotificacionContext.Provider>
    )
}

export const useNotificacion = () =>{
    return useContext(NotificacionContext)
}

