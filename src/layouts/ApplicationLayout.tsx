export const ApplicationLayout = ({ children }) => {
  return (
    <>
      <header>Header</header>

      <section>{children}</section>

      <footer>Footer</footer>
    </>
  )
}
