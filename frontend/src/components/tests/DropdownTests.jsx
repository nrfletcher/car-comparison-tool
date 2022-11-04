import React from 'react'
import axios from "axios";

async function getAllCars() {
    let result = await axios.get("http://localhost:8080/carapp/cars");
    console.log(result.data);
}

async function getCarById(id) {
    let result = await axios.get("http://localhost:8080/carapp/cars/" + id);
    console.log(result.data);
}

async function getCarsByMake(make) {
    let result = await axios.get("http://localhost:8080/carapp/cars/make/" + make);
    console.log(result.data);
}

const DropdownTest = (props) => {
    return (
      <div>
          <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.type}
            </a>
            <ul class="dropdown-menu">
                <li><a className="dropdown-item" 
                        onClick={getAllCars}>All Cars</a></li>
                <li><a className="dropdown-item"
                        onClick={(e) => getCarById(3)} >By Id</a></li>
                <li><a className="dropdown-item"
                        onClick={(e) => getCarsByMake("Nissan")} >By Make</a></li>
            </ul>
        </div>
      </div>
    )
}
