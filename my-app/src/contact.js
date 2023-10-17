import { Link } from "react-router-dom";


function Contact() {

  return (
    
    <div>
<Link to='/' >home</Link>   

      <h2>Contact Us</h2>
      <p>
        If you have any questions or feedback, please feel free to reach out to
        us. We'd love to hear from you!
      </p>
      <div>
        <h3>Contact Information</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div>
        <h3>Contact Form</h3>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
