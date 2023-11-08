import React from 'react'
import "./experence.css"
import {BsFillPatchCheckFill} from"react-icons/bs"

const Experence = () => {
  return (
    <section id=' experence'>
      <h5>What skills i have</h5>
      <h2> My Experenece</h2>

      <div className='container experence__container'>
        <div className="experence__frontend">
          <h3>Front End Development</h3>
          <div className="experence__content">
            <article className='experence__deteils'>
              <BsFillPatchCheckFill  className='.experence__details-icons'/>
            <div>
            <h4>HTML</h4>
              <small  className='text-light'>Experenced</small>
            </div>
            </article>
            <article className='experence__deteils'>
              <BsFillPatchCheckFill  className='.experence__details-icons'/>
              <div>
              <h4>CSS</h4>
              <small  className='text-light'>Intermediated</small>
              </div>
            </article>
            <article className='experence__deteils'>
              <BsFillPatchCheckFill className='.experence__details-icons' />
              <div>
              <h4>Javascript</h4>
              <small  className='text-light'>Experenced</small>
              </div>
            </article>
            <article className='experence__deteils'>
              <BsFillPatchCheckFill className='.experence__details-icons' />
              <div>
              <h4>Bootstrap</h4>
              <small  className='text-light'>Experenced</small>
              </div>
            </article>
            <article className='experence__deteils'>
              <BsFillPatchCheckFill  className='.experence__details-icons'/>
              <div>
              <h4>React</h4>
              <small  className='text-light'>Experenced</small>
              </div>
            </article>
            <article className='experence__deteils'>
              <BsFillPatchCheckFill  className='.experence__details-icons'/>
              <div>
              <h4>React-Redux</h4>
              <small  className='text-light'>Experenced</small>
              </div>
            </article>
            <article className='experence__deteils'>
              <BsFillPatchCheckFill  className='.experence__details-icons'/>
              <div>
              <h4>Tailwind CSS</h4>
              <small  className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experence__backend">
        <h3>Back End Development</h3>
          <div className="experence__content">
            <article className='experence__deteils'>
              <BsFillPatchCheckFill className='.experence__details-icons' />
              <div>
              <h4>Java</h4>
              <small  className='text-light'>Experenced</small>
              </div>
            </article>
            <article className='experence__deteils'>
              <BsFillPatchCheckFill className='.experence__details-icons' />
              <div>
              <h4>Node JS</h4>
              <small  className='text-light'>Intermediated</small>
              </div>
            </article>
            <article className='experence__deteils'>
              <BsFillPatchCheckFill  className='.experence__details-icons'/>
             <div>
             <h4>Mongo DB</h4>
              <small  className='text-light'>Experenced</small>
             </div>
            </article>
            <article className='experence__deteils'>
              <BsFillPatchCheckFill className='.experence__details-icons' />
             <div>
             <h4>Express JS</h4>
              <small  className='text-light'>Experenced</small>
             </div>
            </article>
            <article className='experence__deteils'>
              <BsFillPatchCheckFill className='.experence__details-icons' />
             <div>
             <h4> My SQL</h4>
              <small  className='text-light'>Intermediate</small>
             </div>
            </article>
          </div>
        </div>
        </div>
     
    </section>
  )
}

export default Experence