let categorias = [
    {
        id: 1, 
        nombre: "plasticos",
        descripcion: "todo lo relacinado con platico"
    },
    {
        id: 2, 
        nombre: "herraminetas",
        descripcion: "todo lo relacinado con platico"
    }
];

export const mostrarCategoria = (req, res) => {
    res.status(200).json(categorias);
};

export const buscarCategoria = (req, res) => {
    const catID = parseInt(req.params.id)
    const categoria = categorias.find(cat => cat.id === catID)

    if (!categoria) {
        return res.status(404).json({
            error: "categoria no encontrada"
        });
    }
    res.status(200).json(categoria);
};

export const crearCategoria = (req, res) => {
    const nuevaCategoria = {
        ...req.body,
        id: categorias.length + 1
    };


    console.log(typeof nuevaCategoria);

    categorias.push(nuevaCategoria);

    res.status(201).json({
        mensaje: "categoria creada correctamente",
        datos: nuevaCategoria
    });
};

export const actualizarCategoria = (req, res) => {
    const catID = parseInt(req.params.id);
    const categoria = categorias.findIndex(cat => cat.id === catID);
    categorias[categoria] = {
        ...categorias[categoria],
        ...req.body
    };

    if (categoria === -1){
        res.status(404).json({error : "categoria no encontrada"});
    };

    res.json(categorias[categoria]);
};

export const eliminarCategoria = (req, res) => {
    const catID = parseInt(req.params.id);
    const categoria = categorias.findIndex(cat => cat.id === catID);

    if (categoria === -1){
        res.status(404).json({error : "categoria no encontrada"});
    };

    categorias.splice(categoria, 1);
    res.status(204);
};