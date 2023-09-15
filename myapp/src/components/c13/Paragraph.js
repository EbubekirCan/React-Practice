import React from 'react'
import data from "./data"
import "./text.css"

const Paragraph = () => {
  return (
    <section className='section-center'>
        <h3>HOW MANY PARAGRAPHS</h3>
        <form >
            <label htmlFor="text">Paragraphs</label>
            <input type="number" id='text' />
            <button className='btn'>Generate</button>
            <button className='btn'>Clear</button>


        </form>

    </section>
  )
}

export default Paragraph