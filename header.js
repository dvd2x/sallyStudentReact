"use strict";

console.log("Header.js is running");

function Header(props) {
  return (
    <header role="header">
      <h1>{props.name} Resume</h1>
      <address>111 Fun St, Detroit, MI 11111</address>
      <p>
        phone (555) 555-1212, email me:
        <a href="mailto:Sally@yahoo.com">{props.name} </a>, See my:
        <a href="https://play.google.com/store/apps/details?id=com.duolingo">
          Portfolio
        </a>
      </p>
      <h2 class="center">Software Engineer</h2>
    </header>
  );
}

export default Header;
