import React from 'react';
import "../Homestyles.css"
const About = ({heading}) => {

  return (
    <>
      <h1 className='Heading'>{heading}</h1>
      <section className="about">
        <img src={require("../../../Assets/spaceimg.jpg")} alt="" />
        <div className="content">
          <h2>Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vel?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, laudantium.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nisi?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quos?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, ducimus.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, aut.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, autem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quisquam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto perferendis non minima totam velit corporis quia accusamus provident
            recusandae repellat.</p>
        </div>
      </section>
    </>
  )
}

export default About