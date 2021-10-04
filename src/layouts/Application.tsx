export default function Application({ children }) {
  return (
    <>
      <header>
        Header
      </header>

      <section>
        {children}
      </section>

      <footer>
        Footer
      </footer>
    </>
  )
}
