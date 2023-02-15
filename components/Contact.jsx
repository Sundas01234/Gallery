import React from "react";

function Contact() {
  return (
    <div>
      <form action="/api/contactdata" method="post">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
