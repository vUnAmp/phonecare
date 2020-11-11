import React from "react"
import Layout from "../components/layout"

import "./termin.scss"
const d = new Date()
const month = d.getMonth()
const day = +d.getDate()
const year = d.getFullYear()
const fullDate = [year, month, day].join("-")
const Termin = () => {
  return (
    <Layout>
      <form action="" className="termin">
        <h2>Termin Buchen</h2>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Phone Number" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Describe about your request"
        ></textarea>

        <input
          type="datetime-local"
          id="meeting-time"
          name="meeting-time"
          // value="2018-06-12T19:30"
          value={`${fullDate}T00:00`}
          onChange={e => {
            console.log(e.target.value)
          }}
          min="2020-06-07T00:00"
          max="2021-10-14T00:00"
        ></input>
        <button>Termin confirm</button>
      </form>
    </Layout>
  )
}

export default Termin
