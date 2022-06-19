const catalogo = [
    {Id:'1',Nombre:"Torta Iron Man",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 10-min.png",Categoria:"Buttercream", Stock:5},
    {Id:'2',Nombre:"Torta El Cap",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 11-min.png",Categoria:"Buttercream", Stock:15},
    {Id:'3',Nombre:"Torta Betty",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 13-min.png",Categoria:"Buttercream", Stock:25},
    {Id:'4',Nombre:"Torta de Rey",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 14-min.png",Categoria:"Buttercream", Stock:5},
    {Id:'5',Nombre:"Torta Mafalda",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 15-min.png",Categoria:"Buttercream", Stock:6},
    {Id:'6',Nombre:"Torta Chocolates",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 16-min.png",Categoria:"Buttercream", Stock:5},
    {Id:'7',Nombre:"Torta Fiesta",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 2-min.png",Categoria:"Buttercream", Stock:55},
    {Id:'8',Nombre:"Torta Doctora",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 3-min.png",Categoria:"Buttercream", Stock:1},
    {Id:'9',Nombre:"Torta Harry Potter",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 5-min.png",Categoria:"Fondant", Stock:35},
    {Id:'10',Nombre:"Torta Aniversario",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 6-min.png",Categoria:"Buttercream", Stock:55},
    {Id:'11',Nombre:"Torta Primavera",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 7-min.png",Categoria:"Buttercream", Stock:4},
    {Id:'12',Nombre:"Torta Beto",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 8-min.png",Categoria:"Buttercream", Stock:8},
    {Id:'13',Nombre:"Torta Iron Man",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream 9-min.png",Categoria:"Buttercream", Stock:9},
    {Id:'14',Nombre:"Torta Hombre Araña",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla personalizada a peid.",Imagen:"../IMAGES/Catalogo/Torta masa elastica 1-min.png",Categoria:"Fondant", Stock:15},
    {Id:'15',Nombre:"Torta Sonic",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta masa elastica 2-min.png",Categoria:"Fondant", Stock:4},
    {Id:'16',Nombre:"Torta Osos",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta masa elastica 3-min.png",Categoria:"Fondant", Stock:2},
    {Id:'17',Nombre:"Torta Mickey",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta masa elastica 4-min.png",Categoria:"Fondant", Stock:1},
    {Id:'18',Nombre:"Torta Leoncito",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta masa elastica 5-min.png",Categoria:"Fondant", Stock:6},
    {Id:'19',Nombre:"Torta Constructor",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta masa elastica 6-min.png",Categoria:"Fondant", Stock:5},
    {Id:'20',Nombre:"Bocaditos",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Bocaditos 1-min.png",Categoria:"Catering", Stock:5},
    {Id:'21',Nombre:"Bocaditos Dulces",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Bocaditos 2.png",Categoria:"Catering", Stock:7},
    {Id:'22',Nombre:"Cupcake Anirversario",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Bocaditos 3-min.png",Categoria:"Catering", Stock:5},
    {Id:'23',Nombre:"Torta Iron Man",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Cupcakes 1-min.png",Categoria:"CupCakes", Stock:5},
    {Id:'24',Nombre:"Torta Iron Man",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Cupcakes 2-min.png",Categoria:"CupCakes", Stock:5},
    {Id:'25',Nombre:"Torta Iron Man",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Cupcakes 3-min.png",Categoria:"CupCakes", Stock:5},
    {Id:'26',Nombre:"Torta Iron Man",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Tortas temáticas en masa dulce-min.png",Categoria:"Buttercream", Stock:5},
    {Id:'27',Nombre:"Torta Iron Man",Precio:100,Descripcion:"Torta bañada en chocolate sabor a vainilla",Imagen:"../IMAGES/Catalogo/Torta buttercream-min.png",Categoria:"Buttercream", Stock:5}
]

export const getCatalogo = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(catalogo)
        },500)
    })
}

export const getCatalogoByCategoria = (CategoriaId) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(catalogo.filter(cat => cat.Categoria === CategoriaId))
        },500)
    })
}

export const getCatalogoById = (id) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(catalogo.find(catal => catal.Id === id))
        },1000)
    })
}