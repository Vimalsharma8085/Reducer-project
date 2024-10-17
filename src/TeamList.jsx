

const TeamList = ({ teamMembers, removeMember, averageAge }) => {
  const sortedMembers = [...teamMembers].sort((a, b) => a.age - b.age);

  return (
    <div className="w-1/2 border p-4">
      <h2 className="text-lg font-bold">Team Members</h2>
      <ul>
        {sortedMembers.map((member) => (
          <li key={member.id} className="flex justify-between items-center">
            <span>{member.name} (Age: {member.age})</span>
            <button
              onClick={() => removeMember(member.id)}
              className="ml-2 p-1 bg-red-500 text-white rounded"
            >
              REMOVE
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <span className="font-bold">Average Age: {averageAge}</span>
      </div>
      <button
        onClick={() => sortedMembers.sort((a, b) => a.age - b.age)}
        className="mt-2 p-1 bg-green-500 text-white rounded"
      >
        SORT BY AGE
      </button>
    </div>
  );
};

export default TeamList;
