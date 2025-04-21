import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import plus from '../assets/plus.png'
import minus from '../assets/minus.webp'
import Candidate from "../interfaces/Candidate.interface.tsx";

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

// const data = await searchGithub();
// const usr: Candidate = await searchGithubUser(data[0].login)

const CandidateSearch = () => {
  const [user, setUser] = useState({
    avatar_url: 'https://media.giphy.com/media/MydKZ8HdiPWALc0Lqf/giphy.gif?cid=ecf05e47sblx51cpzw98z4w1pwxrcy8rwjvjyfakd0dlzjf5&ep=v1_gifs_search&rid=giphy.gif&ct=g'
  })

  const getUser = async () => {
    const users = await searchGithub()
    const usr = await searchGithubUser(users[0].login)
    console.log(usr)
    setUser(usr)
  }

   useEffect(() => {
     getUser()
   }, [])

const plushandle = (usr) => {
  const candidates: Candidate[] = JSON.parse(localStorage.getItem('users') || '[]');
  candidates.push({
    avatar_url: usr.avatar_url,
    login: usr.login,
    location: usr.location,
    email: usr.email,
    company: usr.company,
    bio: usr.bio,
  });
  localStorage.setItem('users', JSON.stringify(candidates));
  console.log(candidates);
  getUser();
};

    const clearStorage = () => {
  localStorage.clear()
};

  return (
    <>
      <h1>CandidateSearch</h1>
      <div style={styles.container}>
        <img onClick={() => getUser()} className='minus' style={styles.iminus} src={minus} alt="" />
        <div style={styles.card}>
          <img style={styles.pic} src={user.avatar_url} alt="user profile pictrue" />
          <h2 style={styles.h2}>{user.login}</h2>
          <p style={styles.p}>Location: {user.location}</p>
          <p style={styles.p}>Email: {user.email}</p>
          <p style={styles.p}>Company: {user.company}</p>
          <p style={styles.p}>Bio: {user.bio}</p>
        </div>
        <img onClick={() => plushandle(user)} className='plus' style={styles.iplus} src={plus} alt="" />
      </div>
      <button type="button" onClick={clearStorage}>Clear candidates list</button>
    </>
  );
};

export default CandidateSearch;
