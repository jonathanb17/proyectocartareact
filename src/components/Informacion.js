import React, { useState, useEffect } from 'react'

const Informacion = () => {

    // Estados
    const [search, setSearch] = useState()
    const [datos, setDatos] = useState([]);

    // estados de inputs
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState(0)

    // consulta a rest api
    const info = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setDatos(data)
    }

    const eliminar = (id) => {
        setDatos(datos.filter(use => use.id !== id));
        console.log('user deleted..');
        console.log(datos);
    }

    const editarInfo = (e) => {
        alert("informacion editada")
        e.preventDefault();
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        console.log(name, username, phone);

        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify({
                name, username, phone
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        const data = await res.json();
        // console.log(data);
        setDatos([...datos, data])
        console.log(datos);

        // resetiamos el estado
        setName("")
        setUsername("")
        setPhone(0)
    }

    // efecto
    useEffect(() => {
        info()
    }, [])


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form className="mt-3" onSubmit={handelSubmit}>
                            <h1 style={{ display: 'flex', alignItems: 'flex-start' }}>Agregar Productos</h1>
                            <select
                                id=""
                                className="form-control"
                                name="nombre"
                                value={name}
                                onChange={e => setName(e.target.value)}>
                                {
                                    datos.map((op) => {
                                        return (
                                            <option>{op.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <br />
                            <input type="text"
                                className="form-control"
                                placeholder="nombre producto"
                                name="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            /><br />
                            <input type="number"
                                className="form-control"
                                placeholder="phone"
                                name="phone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            /><br />
                            <input type="file" className="form-control" name="" id="" /><br />
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
                        <table className="table">

                            <thead>
                                <tr>
                                    <th scope="col">codigo</th>
                                    <th scope="col">categoria</th>
                                    <th scope="col">nombre  y detalles</th>
                                    <th scope="col">precio unidad</th>
                                    <th>Delete</th>
                                    <th><button className="btn btn-light">Edit</button> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datos
                                        .filter((row) =>
                                            !search || row.name.toLowerCase().includes(search)
                                            ||
                                            !search || row.username.toLowerCase().includes(search)
                                            ||
                                            !search || row.phone.toLowerCase().includes(search)

                                        ).map((w, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index}</td>
                                                    <td>{w.name}</td>
                                                    <td>{w.username}</td>
                                                    <td>{w.phone}</td>
                                                    <td className="btn btn-danger bg-danger mt-2" onClick={() => eliminar(w.id)}>Delete</td>
                                                    <td><button onClick={editarInfo} className="btn btn-light">Edit</button></td>
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

export default Informacion
