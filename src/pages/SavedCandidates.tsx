import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const users: Array<Candidate> = [] 
  return (
    <>
      <h1>Potential Candidates</h1>

      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Location</th>
          <th>Email</th>
          <th>Company</th>
          <th>Bio</th>
          <th>Reject</th>
        </tr>
          {users}
      </table>
    </>
  );
};

export default SavedCandidates;
