const catalogo = [
    {Id:1,Nombre:"Torta Iron Man",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 10-min.png",Categoria:"Buttercream"},
    {Id:2,Nombre:"Torta El Cap",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 11-min.png",Categoria:"Buttercream"},
    {Id:3,Nombre:"Torta Betty",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 13-min.png",Categoria:"Buttercream"},
    {Id:4,Nombre:"Torta de Rey",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 14-min.png",Categoria:"Buttercream"},
    {Id:5,Nombre:"Torta Mafalda",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 15-min.png",Categoria:"Buttercream"},
    {Id:6,Nombre:"Torta Chocolates",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 16-min.png",Categoria:"Buttercream"},
    {Id:7,Nombre:"Torta Fiesta",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 2-min.png",Categoria:"Buttercream"},
    {Id:8,Nombre:"Torta Doctora",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 3-min.png",Categoria:"Buttercream"},
    {Id:9,Nombre:"Torta Harry Potter",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 5-min.png",Categoria:"Fondant"},
    {Id:10,Nombre:"Torta Aniversario",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 6-min.png",Categoria:"Buttercream"},
    {Id:11,Nombre:"Torta Primavera",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 7-min.png",Categoria:"Buttercream"},
    {Id:12,Nombre:"Torta Beto",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 8-min.png",Categoria:"Buttercream"},
    {Id:13,Nombre:"Torta Iron Man",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 9-min.png",Categoria:"Buttercream"},
    {Id:14,Nombre:"Torta Hombre Araña",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla personalizada a peid.",Imagen:"../IMAGES/Catalogo/Torta masa elastica 1-min.png",Categoria:"Fondant"},
    {Id:15,Nombre:"Torta Sonic",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta masa elastica 2-min.png",Categoria:"Fondant"},
    {Id:16,Nombre:"Torta Osos",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta masa elastica 3-min.png",Categoria:"Fondant"},
    {Id:17,Nombre:"Torta Mickey",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta masa elastica 4-min.png",Categoria:"Fondant"},
    {Id:18,Nombre:"Torta Leoncito",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta masa elastica 5-min.png",Categoria:"Fondant"},
    {Id:19,Nombre:"Torta Constructor",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta masa elastica 6-min.png",Categoria:"Fondant"},
    {Id:20,Nombre:"Bocaditos",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Bocaditos 1-min.png",Categoria:"Catering"},
    {Id:21,Nombre:"Bocaditos Dulces",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Bocaditos 2.png",Categoria:"Catering"},
    {Id:22,Nombre:"Cupcake Anirversario",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Bocaditos 3-min.png",Categoria:"Catering"},
    {Id:23,Nombre:"Torta Iron Man",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Cupcakes 1-min.png",Categoria:"CupCakes"},
    {Id:24,Nombre:"Torta Iron Man",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Cupcakes 2-min.png",Categoria:"CupCakes"},
    {Id:25,Nombre:"Torta Iron Man",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Cupcakes 3-min.png",Categoria:"CupCakes"},
    {Id:26,Nombre:"Torta Iron Man",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Tortas temáticas en masa dulce-min.png",Categoria:"Buttercream"},
    {Id:27,Nombre:"Torta Iron Man",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream-min.png",Categoria:"Buttercream"}
]

export const getCatalogo = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(catalogo)
        },2000)
    })
}