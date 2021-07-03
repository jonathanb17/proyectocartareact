import React from 'react'
// { useEffect, useState } 

const Usuarios = () => {

    // const [usuarios, setUsuarios] = useState([])

    // // consulta a rest api
    // const infoUsuarios = async () => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const data = await res.json();
    //     setUsuarios(data)
    // }


    // useEffect(() => {
    //     infoUsuarios();
    // }, [])


    const datosUsuarios = ["USUARIO", "NOMBRE", "APELLIDO", "NEGOCIO", "TELEFONO", "DOMICILIO", "CONTRASEÑA", "REPETIRCONTRASEÑA"];

    const datosUsuariosinfo = ["Leanne Graham", "Ervin Howell", " Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich", "Mrs. Dennis Schulist", " Kurtis Weissnat", " Kurtis Weissnat"];


    return (
        <div>
            <h1 style={{ display: 'flex', alignItems: 'flex-start' }}>Modificar Usuario</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-3" >
                        <table className="table">

                            <tbody>
                                <tr>
                                    {
                                        datosUsuarios.map((du) => {
                                            return (
                                                <div>
                                                    <tr>{du}:</tr><br />
                                                </div>
                                            )
                                        })
                                    }


                                    <th scope="row" style={{ borderTop: 'none', borderBottom: 'none' }}></th>
                                    {
                                        datosUsuariosinfo.map((usuario) => {
                                            return (
                                                <div>
                                                    <tr style={{ borderTop: 'none', borderBottom: 'none' }}>{usuario}</tr><br />
                                                </div>
                                            )
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table >
                        <button className="btn btn-outline-success form-control">Editar</button>
                    </div>
                    <div className="col-md-6">
                        <form action="" className="mt-3">
                            <input type="text" className="form-control" placeholder="usuario" /><br />
                            <input type="text" className="form-control" placeholder="nombre" /><br />
                            <input type="text" className="form-control" placeholder="apellido" /><br />
                            <input type="text" className="form-control" placeholder="negocio" /><br />
                            <input type="text" className="form-control" placeholder="telefono" /><br />
                            <input type="text" className="form-control" placeholder="domicilio" /><br />
                            <input type="paswoord" className="form-control" placeholder="contraseña" /><br />
                            <input type="password" className="form-control mt-2" placeholder="repetir contraseña" /><br /><br />
                            <button className="form-control btn btn-outline-primary">Actualizar</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Usuarios
