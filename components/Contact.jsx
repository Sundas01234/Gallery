import React from "react";

function Contact() {
 
 
  return (
    <div>
      
      <form action="/api/contactdata" method="post">
  <label for="first">First name:</label>
  <input type="text" id="first" name="first" />
  <label for="last">Last name:</label>
  <input type="text" id="last" name="last" />
  <button type="submit">Submit</button>
</form>
      
    </div>
  );
}

export default Contact;
