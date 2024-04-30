import React from "react"
import "./style.css"
import ReactDOM from "react-dom/client"
import pic3 from "./assest/images/three.jpeg"

const root = ReactDOM.createRoot(document.getElementById("root"))


function Numberone() {
  return (
    <div className="shuu">
      <img src={pic3} alt="images" />
      <p>Cutedog</p>
    </div>

  )
}

function Numbertwo() {
  return (
    <div  className="shuu">
      <img src={pic3} alt="images" />
      <p>Smalldog</p>
    </div>
  )
}

function Numberthree() {
  return (
    <div  className="shuu">
      <img src={pic3} alt="images" />
      <p>Somedog</p>
    </div>
  )
}

function Numberfour() {
  return (
    <div className="shuu">
      <img src={pic3} alt="images" />
      <p>doggy</p>
    </div>
  )
}

function Numberfive() {
  return (
    <div className="shuu">
      <img src={pic3} alt="images" />
      <p>smartdog</p>
    </div>
  )
}

function Numbersix() {
  return (
    <div className="shuu">
      <img src={pic3} alt="images" />
      <p>littledog</p>
    </div>
  )
}




root.render(<div className="clr">
  <Numberone></Numberone>
  <Numbertwo></Numbertwo>
  <Numberthree></Numberthree>
  <Numberfour></Numberfour>
  <Numberfive></Numberfive>
  <Numbersix></Numbersix>
</div>)