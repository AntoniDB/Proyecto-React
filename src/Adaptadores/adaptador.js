export const creaAdaptadorCatalogoFirestore = (doc) => {
    const data = doc.data()

    const catalogoFormato = {
        id: doc.id,
        Nombre: data.Nombre,
        Precio: data.Precio,
        Categoria: data.Categoria,
        Descripcion: data.Descripcion,
        Imagen: data.Imagen,
        Stock: data.Stock
    }
    return catalogoFormato
}