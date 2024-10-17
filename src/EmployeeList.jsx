

const EmployeeList = ({ employees, addMember, teamMembers }) => {
  return (
    <div className="w-1/2 border p-4">
      <h2 className="text-lg font-bold">Employees</h2>
      <ul>
        {employees.map((employee) => {
          const isInTeam = teamMembers.some((member) => member.id === employee.id);
          return (
            <li key={employee.id} className={`flex justify-between items-center ${isInTeam ? 'text-gray-500' : 'text-black'}`}>
              <span>{employee.name} (Age: {employee.age})</span>
              <button
                onClick={() => addMember(employee)}
                disabled={isInTeam}
                className={`ml-2 p-1 rounded ${isInTeam ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
              >
                {isInTeam ? 'Added' : 'ADD'}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EmployeeList;
