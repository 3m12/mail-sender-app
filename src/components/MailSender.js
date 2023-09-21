import { Component } from "react";
import emailjs from "@emailjs/browser";
import "./MailSender.css";

class MailSender extends Component {
    constructor(props) {
        super(props);
        this.state = {
          to: "",
          subject: "",
          body: "",
        };
      }
    
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
    
        const { name, email, message } = this.state;
    
        emailjs
          .send(
            "your_service_id",
            "your_template_id",
            {
              name,
              email,
              message,
            },
            "your_user_id"
          )
          .then((response) => {
            console.log("Email has been sent!", response);
            this.setState({ name: "", email: "", message: "" });
          })
          .catch((error) => {
            console.log("An erorr occurred while sending email:", error);
          });
      };

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit.bind(this)}>
            <h2>mail sender app</h2>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="name"
            required
          />{" "}
          <br />
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="email"
            required
          />{" "}
          <br />
          <textarea
            type="text"
            name="message"
            value={message}
            onChange={this.handleChange}
            placeholder="message"
            required /> <br />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
export default MailSender;
