import  { useState } from 'react';
import EmployeeList from './EmployeeList';
import TeamList from './TeamList';

const employees = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 24 },
  { id: 3, name: 'Charlie', age: 28 },
  { id: 4, name: 'David', age: 35 },
  { id: 5, name: 'Eve', age: 29 },
];

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const addMember = (employee) => {
    setTeamMembers([...teamMembers, employee]);
  };

  const removeMember = (id) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  const averageAge = () => {
    if (teamMembers.length === 0) return 0;
    const totalAge = teamMembers.reduce((sum, member) => sum + member.age, 0);
    return (totalAge / teamMembers.length).toFixed(2);
  };

  return (
    <div className="flex justify-between p-4">
      <EmployeeList employees={employees} addMember={addMember} teamMembers={teamMembers} />
      <TeamList teamMembers={teamMembers} removeMember={removeMember} averageAge={averageAge()} />
    </div>
  );
}

export default App;
