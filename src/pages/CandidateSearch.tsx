import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import plus from '../assets/plus.png'
import minus from '../assets/minus.webp'

const styles = {
  card: {
  borderRadius: '3%',
  backgroundColor: 'black',
  border: '1px solid white',
  inlineSize: '250px',
  width: '250px'
  },
  h2: {
    paddingLeft: '10px',
  },
  p: {
    paddingLeft: '10px',
  },
  pic: {
    borderRadius: '3% 3% 0px 0px',
    width: '250px'
  },
  container: {
    display: 'inline-flex',
    marginBottom: '1em'
  },
  iplus: {
    width: '65px',
    height: '65px',
    marginLeft: '5em',
    marginTop: '50%',
    cursor: 'pointer',
  },
  iminus: {
    height: '65px',
    width: '65px',
    marginRight: '5em',
    marginTop: '50%',
    cursor: 'pointer',
  },
}

const data = await searchGithub();
const usr = await searchGithubUser(data[0].login)

const CandidateSearch = () => {
  const [user, _setUser] = useState(usr)

  // useEffect(() => {
  //   const getUser = async () => {
  //     const users = await searchGithub()
  //     const userData = await searchGithubUser(users[0].login)
  //     setUser(userData)
  //   }
  //   getUser()
  // }, [])

const plushandle = (usr:any) => {
  let candidates = JSON.parse(localStorage.getItem('users') || '[]');
  candidates.push(usr.login);
  localStorage.setItem('users', JSON.stringify(candidates));
  
}

  return (
    <>
      <h1>CandidateSearch</h1>
      <div style={styles.container}>
        <img className='minus' style={styles.iminus} src={minus} alt="" />
        <div style={styles.card}>
          <img style={styles.pic} src={user.avatar_url} alt="user profile pictrue" />
          <h2 style={styles.h2}>{user.login}</h2>
          <p style={styles.p}>Location: {user.location}</p>
          <p style={styles.p}>Email: {user.email}</p>
          <p style={styles.p}>Company: {user.company}</p>
          <p style={styles.p}>Bio: {user.bio}</p>
        </div>
        <img className='plus' style={styles.iplus} src={plus} alt="" />
      </div>
    </>
  );
};

export default CandidateSearch;
