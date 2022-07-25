import React from 'react'


function Projects() {
  return (
    <>
      <div className='projects-container'>
        Ongoing projects:
      </div>
      <div className='projects-container'>
      <div className="image-container">
        <img src="#" alt="lemon" />
      </div>

      <div className="content">
        <div className="heading">
          <h2 className="heading__title">
            Content <span className="next-line">cards title</span>
          </h2>
          <h3 className="heading__subtitle">Card subtitle</h3>
        </div>

        <div className="details">
          <p className="details__text">
            Lorem ipsum dolor sit amet, consect etur adipi scing elit
            <span className="next-line">sed do eiusmod tempor</span>
          </p>
          <button className="details__btn">Tertiary Button</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Projects