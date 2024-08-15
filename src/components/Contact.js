import React from 'react'

function Contact() {
  return (
    <div id='contact'>
      <h1>Contact US</h1>
      <form action="">
        <input type='text' placeholder='Full Name' required />
        <input type='email' placeholder='xyz@gmail.com' required />
        <textarea name="message" id="" placeholder='Write Here...............'></textarea>
        <input type="submit" value='Send' />
      </form>
    </div>
  )
}

export default Contact
