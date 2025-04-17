const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: '120%',
  },
}

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav style={styles.nav}>
      <a href="/">Home</a>
      <a href="/SavedCandidates">Candidates</a>
    </nav>
  )
};

export default Nav;
