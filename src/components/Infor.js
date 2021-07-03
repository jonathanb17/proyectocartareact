import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Infor = () => {

    // estado del la rest-api
    const [datos, setDatos] = useState([]);
    const [search, setSearch] = useState()
    //  estados de los input
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [id, setId] = useState(0)
    const [avatar, setAvatar] = useState("")


    const infoRest = async () => {
        const res = await axios.get('https://reqres.in/api/users');
        const q = await res.data.data;
        console.log(q);
        setDatos(q)
    }

    useEffect(() => {
        infoRest()
    }, [])


    // const handleFile = (e) => {
    //     setAvatar(e.target.files[0])
    // }


    const handelSubmit = async (e) => {
        e.preventDefault();
        console.log(first_name, last_name, id, avatar);

        if (avatar !== null) {

            const res = await fetch("https://reqres.in/api/users", {
                method: 'POST',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    first_name, last_name, id, avatar
                })
            })

            const info = await res.json()
            datos.push(info);
            console.log(datos);

        } else {
            if (avatar === null) {
                alert("no hay archivos ni fotos")
            }
        }

        // resetiamos el estado
        setFirst_name("")
        setLast_name("")
        setAvatar("")
        setId(0)

    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 style={{ display: 'flex', alignItems: 'flex-start' }}>Agregar Productos</h1>
                        <form action="" onSubmit={handelSubmit} className="mt-4">

                            <select
                                id=""
                                className="form-control form-selec"
                                name="nombre"
                                value={first_name}
                                onChange={e => setFirst_name(e.target.value)}
                            >
                                <option value="">seleccionar Categoria</option>
                                {
                                    datos.map((op) => {
                                        <h1>hola</h1>
                                        return (

                                            <>
                                                <option>{op.first_name}</option>
                                            </>
                                        )
                                    })
                                }
                            </select><br />

                            <input
                                type="text"
                                className="form-control"
                                name="last_name"
                                value={last_name}
                                onChange={e => setLast_name(e.target.value)}
                                placeholder="nombre y detalles"
                            /><br />
                            <input type="text"
                                className="form-control"
                                placeholder="ruta imagen"
                                name="avatar"
                                value={avatar}
                                onChange={e => setAvatar(e.target.value)}
                                id="" /><br />
                            <input type="number"
                                className="form-control"
                                placeholder="precio unidad"
                                name="id"
                                value={id}
                                onChange={e => setId(e.target.value)}
                            /><br />
                            <button className="btn btn-outline-primary form-control">Enviar Datos</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group mt-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Buscar Producto"
                                aria-label="Buscar Producto"
                                aria-describedby="basic-addon2"
                                search={search}
                                setSearch={setSearch}
                                name="input"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                            <div class="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">Buscar</button>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">codigo</th>
                                    <th scope="col">categoria</th>
                                    <th scope="col">nombre  y detalles</th>
                                    <th scope="col">Imagen</th>
                                    <th scope="col">precio unidad</th>
                                    <th><button className="btn btn-light">Delete</button> </th>
                                    <th><button className="btn btn-light">Edit</button> </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    datos.filter((row) =>
                                        !search || row.first_name.toLowerCase().includes(search)
                                        ||
                                        !search || row.last_name.toLowerCase().includes(search)
                                    )

                                        .map((d, i) => {
                                            return (

                                                <tr key={i}>
                                                    <td>{i}</td>
                                                    <td>{d.first_name}</td>
                                                    <td>{d.last_name}</td>
                                                    <td><img src={d.avatar} alt="" width="70px" height="70px" /></td>
                                                    <td>{d.id}</td>
                                                    <td><button className="btn btn-light">Delete</button> </td>
                                                    <td><button className="btn btn-light">Edit</button> </td>
                                                </tr>

                                            )
                                        })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infor
