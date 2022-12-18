import React from 'react'
import { Link } from 'react-router-dom'

function Shared({ele}) {
    return (
        <div>
            <Link to={"/Details/"+ele.id}>
                <div className="game rounded-3">
                    <div className="imges">
                        <img src={ele.thumbnail} className="w-100 rounded-3" alt="" />
                    </div>
                    <div className="title d-flex p-3 pb-0 justify-content-between">
                        <h4>{ele.title.split(" ").splice(0, 3).join(" ")}</h4>
                        <span className='badge badge-ftg d-flex align-items-center bg-info'>Free</span>
                    </div>
                    <p className='p-3 pb-0'>{ele.short_description.split(" ").splice(0, 3).join(" ")}...</p>
                    <div className="d-flex justify-content-between">
                        <i className='fas fa-plus-square p-3'></i>
                        <div className="p-3 d-flex justify-content-end">
                            <span className=' me-3 badge bg-secondary'>{ele.genre}</span>
                            <i className='fab fa-windows text-muted stretched-link position-relative'></i>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Shared