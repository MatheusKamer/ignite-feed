export function Post() {
  return(
    <article>
      <header>
        <div>
          <img
            src="https://github.com/MatheusKamer.png"
            className="w-16 h-16 rounded-lg outline outline-green-500 border-4 border-gray-800"
          />

          <div>
            <strong>Matheus Kamer</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="">Publicado há 1h</time>
      </header>
    </article>
  )
}
