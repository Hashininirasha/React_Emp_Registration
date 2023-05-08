import React, { useState } from 'react';

type Department = {
  id: number;
  name: string;
};

type Props = {
  departments: Department[];
  value: number | null;
  onChange: (value: number) => void;
};

const DepartmentDropdown: React.FC<Props> = ({ departments, value, onChange }) => {
  const [inputValue, setInputValue] = useState('');
  const filteredDepartments = departments.filter((department) =>
    department.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  
  const Department = [
    { id: 1, name: 'Sales' },
    { id: 2, name: 'Marketing' },
    { id: 3, name: 'Finance' },
  ]


  return (

    <div style={{ height: '20px',  paddingLeft: '15px', margin: '5px'}}>

<input
  list="Department"
  onChange={(e) => {
    const selectedDepartment = Department.find((d) => d.name === e.target.value);
    if (selectedDepartment && selectedDepartment.id) {
      onChange(selectedDepartment.id);
    }
  }}
/>
<datalist id="Department">
  {filteredDepartments.map((department) => (
    <option key={department.id} value={department.name} />
  ))}
</datalist>

    </div>

  );

        };
export default DepartmentDropdown;
