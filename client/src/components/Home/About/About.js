import { StyledAbout } from './About.styled'
import { Link } from 'react-router-dom'

function About() {
  return (
    <StyledAbout>
      <p>
        <span>Word Game DB</span> is a read-only REST API built with the MERN
        stack (MongoDB, Express, React, and Node.js). It is intended to be used
        for educational purposes by anyone who would like to practice their
        coding skills by building a word game that incorporates an API.
      </p>
      <p>
        I was inspired to create <span>Word Game DB</span> while building a{' '}
        <a
          href="https://github.com/LucasSilbernagel/hangman"
          target="_blank"
          rel="noopener noreferrer"
        >
          hangman game
        </a>{' '}
        with Vanilla JavaScript in the summer of 2020. I wanted to incorporate
        an API, but couldn&apos;t find one that satisfied my requirements.{' '}
        <span>Word Game DB</span> meets those needs by returning a list of
        nouns, each of them associated with a category. For more information,
        please check out the <Link to="/endpoints">endpoints</Link>.
      </p>
      <p>
        If you notice any technical issues with the API, or if you have any
        questions, comments, or suggestions, please{' '}
        <Link to="/contact">contact me</Link>.
      </p>
      <p>
        If you would like to build your own REST API, you are welcome to{' '}
        <a
          href="https://github.com/LucasSilbernagel/word-game-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          clone my repository
        </a>{' '}
        to use as a starting point.
      </p>
    </StyledAbout>
  )
}

export default About
