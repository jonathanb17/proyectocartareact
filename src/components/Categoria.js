import React, { useEffect, useState } from 'react'


const Categoria = () => {


    const [categoria, setCategoria] = useState([])

    // consulta a rest api
    const infoCategoria = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setCategoria(data)
    }


    useEffect(() => {
        infoCategoria();
    }, [])




    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 style={{ display: 'flex', alignItems: 'flex-start' }}>Agregar categoria</h1>
                        <div className="input-group mt-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Crear Categoria"
                                aria-label="Crear Categoria"
                                aria-describedby="basic-addon2"
                            />
                            <div class="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">crear</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">

                        <table className="ml-5">
                            {
                                categoria.map((cate, i) => {
                                    return (
                                        <>
                                            <tbody className="">
                                                <tr key={i}>
                                                    <td>{cate.name}</td>
                                                    <td><button className="btn btn-outline-secondary ml-5">editar</button></td>
                                                    <td><button className="btn btn-outline-danger ml-3">delete</button></td>
                                                </tr>
                                            </tbody>
                                        </>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categoria


