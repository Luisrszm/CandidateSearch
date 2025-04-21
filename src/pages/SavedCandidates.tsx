import Candidate from '../interfaces/Candidate.interface.tsx';
import minus from '../assets/minus.webp';

const styles = {
  simg : {
  height: '45px',
  width: '45px',
  margin: '30%',
  cursor: 'pointer',
  },
  profilePic : {
    height: '100%',
    width: '100%',
  },
}

const SavedCandidates = () => {
  // const users: Array<Candidate> = [{
  //   avatar_url: "https://avatars.githubusercontent.com/u/45809889?v=4",
  //   login: 'luis',
  //   company: 'instagram',
  //   location: 'mty',
  //   email: 'test@gmail.com',
  //   bio: 'hola',
  // },
  //   {
  //     avatar_url: plus,
  //     login: 'dan',
  //     company: 'facebook',
  //     location: 'nuevo',
  //     email: 'cap@gmail.com',
  //     bio: 'mundo',
  //   }]
  const users: Array<Candidate> = JSON.parse(localStorage.getItem('users') || '[]')
  const clearStorage = () => {
    localStorage.clear()
    location.reload();
  };

  const removeRow = (e): void => {
    const target = e.target.closest('tr')
    const name = target.children[1].innerText
    const usrs = users.filter((user) => user.login !== name)
    localStorage.setItem('users', JSON.stringify(usrs))
    target.remove()
  };

  return (
    <>
      <h1>Potential Candidates</h1>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) =>
            <tr key={user.login}>
              <td><img style={styles.profilePic} alt='' src={user.avatar_url} /></td>
              <td>{user.login}</td>
              <td>{user.location}</td>
              <td>{user.email}</td>
              <td>{user.company}</td>
              <td>{user.bio}</td>
              <td ><img onClick={removeRow} style={styles.simg} src={minus} alt="" /></td>
            </tr>
          )}
        </tbody>
      </table>
      <button type="button" onClick={clearStorage}>Clear candidates list</button>
    </>
  );
};

export default SavedCandidates;
