import { navigate } from "gatsby"
import React, { useState } from "react"
import Layout from "../components/layout"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
    console.log(state)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .then(error => alert(error))
  }

  return (
    <Layout>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/thanks/"
        onSubmit={handleSubmit}
      >
        {/* You still need to add the hidden input with the form name to your JSX form */}
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name
          <input type="text" name="name" id="name" onChange={handleChange} />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" onChange={handleChange} />
        </label>
        <label>
          Subject
          <input
            type="text"
            name="subject"
            id="subject"
            onChange={handleChange}
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            id="message"
            rows="5"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </Layout>
  )
}

export default Contact
