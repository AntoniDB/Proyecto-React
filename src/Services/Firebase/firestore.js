import {db} from './index'
import {getDocs, getDoc, doc, where, query, collection} from 'firebase/firestore'
import { creaAdaptadorCatalogoFirestore } from '../../Adaptadores/adaptador'

export const getCatalogo = (CategoriaId) => {

    return new Promise((resolve, reject) => {
        const coleccionRef = CategoriaId ? (query(collection(db, 'Catalogo'), where('Categoria','==',CategoriaId))) : (collection(db, 'Catalogo'))

        getDocs(coleccionRef).then(response =>{
            const catalogoFirestore = response.docs.map(doc =>{
                return creaAdaptadorCatalogoFirestore(doc)
            })
            resolve(catalogoFirestore)
        }).catch(error => {reject(error)})
    })
}

export const getDetailCatalogo = (CatalogoId) =>{
    return new Promise((resolve, reject) =>{
        const DocRef = doc(db, 'Catalogo', CatalogoId)
        getDoc(DocRef).then(response =>{
            
            const catalogoResponse = {id: response.id, ...response.data()}
            
            resolve(catalogoResponse)
        }).catch(error =>{reject(error)})
    })
}


export const getDetalleOrden = (ordenId) =>{
    return new Promise((resolve, reject) =>{
        const OrdenRef = doc(db, 'Ordenes', ordenId)
        getDoc(OrdenRef).then(response =>{
            const OrdenResponse = {id: response.id, ...response.data()}
            resolve(OrdenResponse)
        }).catch(error =>{reject(error)})
    })
}