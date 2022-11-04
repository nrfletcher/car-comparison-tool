import React from 'react'

function CarInfoTest() {
  return (
    <div>
        <ul class="list-group">
            <li class="list-group-item" 
                style={{width: 300, textAlign: "left"}}>Make: <span style={{textAlign: "right", color: "blue"}}>Nissan</span></li>
            <li class="list-group-item" 
                style={{width: 300, textAlign: "left"}}>Model: <span style={{textAlign: "right", color: "blue"}}>Altima SE 2011</span></li>
            <li class="list-group-item" 
                style={{width: 300, textAlign: "left"}}>Horsepower: <span style={{textAlign: "right", color: "blue"}}>230</span></li>
            <li class="list-group-item" 
                style={{width: 300, textAlign: "left"}}>MSRP: <span style={{textAlign: "right", color: "blue"}}>$35,000</span></li>
        </ul>
    </div>
  )
}