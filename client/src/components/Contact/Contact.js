import { StyledContact } from './Contact.styled';
import { StyledForm } from '../Form.styled';
import { StyledButton } from '../Button.styled';

function Contact() {
  return (
    <main>
      <StyledContact className="wrapper">
        <p>Are you having technical issues with Word Game DB? Do you have questions about implementation? Suggestions for new categories or words? Other ideas for improvement? Feel free to email me directly at <span>hello@lucassilbernagel.com</span> or use the form below!</p>

        <StyledForm action="https://formspree.io/f/xoqpywlq" method="POST">
          <label htmlFor="name" className="sr-only">Your name</label>
          <input id="name" name="name" required type="text" placeholder="Your name" />

          <label htmlFor="email" className="sr-only">Your email</label>
          <input id="email" name="email" required type="email" placeholder="Your email" />

          <label htmlFor="message" className="sr-only">Your message</label>
          <textarea name="message" id="message" required placeholder="Your message"></textarea>

          <StyledButton type="submit">Send</StyledButton>
        </StyledForm>
      </StyledContact>
    </main>
  )
}

export default Contact;