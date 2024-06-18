import * as React from "react"
import Layout from "../components/layout";
import beachImage from "../images/beach-concept.jpg"
import JournalSVG from "../assets/journal.svg"
import MailSVG from "../assets/mail.svg"








export default function Home() {
  return (
    <Layout>
      <div className="navbar-container debug2">
        <div className="navbar ">
          <div className="logo-container">
            <h3>JASON BUNCE</h3>
            <div className="circle"></div>
          </div>
          <button className="CTA">
            <MailSVG className="mail-svg" />
            <h4>GET IN TOUCH</h4>
          </button>
        </div>
      </div>
      <div className="image-container debug">
        <div className="background-image" style={{ backgroundImage: `url(${beachImage})` }}>
          <JournalSVG className="journal-svg debug2" />
        </div>
      </div>
      Hello World
      hello more world
      again, with the ello world
      <h2>Hi</h2>
      <h1>Hi</h1>
      <h3>Hi</h3>
      <h4>Hi</h4>
      <h5>Hi</h5>
      <h6>Hi</h6>
      <h1>Hello again</h1>
      <h2>Hello again</h2>
      <h3>Hello again</h3>
      <h4>Hello again</h4>
      <h5>Hello again</h5>
      <h6>Hello again</h6>
  

    </Layout>
  );
}