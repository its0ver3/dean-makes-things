import Image from "next/image";

const projects = [
  {
    date: "2026",
    title: "Small Hours",
    description:
      "An AI research companion that turns a folder of half-finished thoughts into a useful morning brief.",
    meta: "prototype · notes coming soon",
  },
  {
    date: "2026",
    title: "Plainspoken",
    description:
      "A writing tool that removes fog from business documents without sanding off the writer’s voice.",
    meta: "working demo",
  },
  {
    date: "2025",
    title: "The Useful Internet",
    description:
      "A personal search index for the small, durable websites I actually want to find again.",
    meta: "weekend build",
  },
];

const writing = [
  ["08/26", "What I learned building an AI tool I needed myself"],
  ["07/26", "Software should explain itself"],
  ["06/26", "A small argument for making small things"],
  ["04/26", "The gap between a good demo and a useful product"],
  ["02/26", "Notes from fifty conversations with AI"],
];

const books = [
  ["The Beginning of Infinity", "David Deutsch", "Changed how I think about progress."],
  ["Working Backwards", "Colin Bryar & Bill Carr", "The clearest book I know on product discipline."],
  ["The Creative Act", "Rick Rubin", "Less a manual than a permission slip."],
  ["The Death and Life of Great American Cities", "Jane Jacobs", "A masterclass in paying attention."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Dean, back to top">
          Dean
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">projects</a>
          <a href="#writing">writing</a>
          <a href="#about">about</a>
          <a href="mailto:hello@example.com">email</a>
        </nav>
      </header>

      <div id="top" className="intro">
        <div className="intro-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" /> Currently building in
            Vancouver
          </p>
          <h1>I build useful things with AI, then write down what I learn.</h1>
          <p className="lede">
            I’m Dean — a product-minded builder interested in practical AI, clear
            writing, and software that respects the person using it.
          </p>
          <p className="aside">
            This site is my public workbench: part résumé, part notebook, and part
            answer to “what have you been up to?”
          </p>
        </div>
        <figure className="portrait">
          <Image
            src="/dean-profile-photo.png"
            alt="A pencil portrait of Dean"
            width={1092}
            height={1648}
            priority
          />
          <figcaption>Me, approximately.</figcaption>
        </figure>
      </div>

      <section id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <h2 id="projects-title">Selected projects</h2>
          <span>things I’ve made</span>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <time>{project.date}</time>
              <div>
                <h3>
                  <a href="#contact">{project.title}</a>
                </h3>
                <p>{project.description}</p>
                <small>{project.meta}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="writing" aria-labelledby="writing-title">
        <div className="section-heading">
          <h2 id="writing-title">Recent writing</h2>
          <a href="#writing">all notes →</a>
        </div>
        <ol className="writing-list">
          {writing.map(([date, title]) => (
            <li key={title}>
              <time>{date}</time>
              <a href="#contact">{title}</a>
            </li>
          ))}
        </ol>
      </section>

      <section id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <h2 id="about-title">Work, briefly</h2>
          <span>the résumé bit</span>
        </div>
        <div className="timeline">
          <div className="timeline-row">
            <p className="timeline-date">2024—now</p>
            <div>
              <h3>Independent builder</h3>
              <p>Prototyping AI products, advising small teams, and learning in public.</p>
            </div>
          </div>
          <div className="timeline-row">
            <p className="timeline-date">2021—24</p>
            <div>
              <h3>Product lead · Good Company</h3>
              <p>Led a small team from an awkward first version to a product people recommended.</p>
            </div>
          </div>
          <div className="timeline-row">
            <p className="timeline-date">Before that</p>
            <div>
              <h3>A useful assortment of jobs</h3>
              <p>Operations, strategy, customer research, and occasionally fixing the printer.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="books" aria-labelledby="books-title">
        <div className="section-heading">
          <h2 id="books-title">Books I keep recommending</h2>
          <span>not a ranking</span>
        </div>
        <ul className="book-list">
          {books.map(([title, author, note]) => (
            <li key={title}>
              <p>
                <cite>{title}</cite> <span>— {author}</span>
              </p>
              <small>{note}</small>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="contact" aria-labelledby="contact-title">
        <p className="kicker">Now</p>
        <h2 id="contact-title">I’m looking for one good problem to obsess over.</h2>
        <p>
          If you’re building something thoughtful with AI — or you just want to
          trade book recommendations — <a href="mailto:hello@example.com">say hello</a>.
          I read every email.
        </p>
      </section>

      <footer>
        <p>© 2026 Dean</p>
        <p>
          No newsletter popup. No tracking pixel. <a href="#top">Back to top ↑</a>
        </p>
      </footer>
    </main>
  );
}
