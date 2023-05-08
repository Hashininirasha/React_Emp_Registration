import { useState } from 'react';
import './AddEmployee.style.css';
import { IEmployee } from './Employee.type';
import DepartmentDropdown from './DepartmentDropdown';

type Department = {
id:Number
  name: string;
};

const Department = [
  { id: 1, name: 'Sales' },
  { id: 2, name: 'Marketing' },
  { id: 3, name: 'Finance' },
]

type AddEmployeeProps = {
    onBackBtnClickHdn: () => void;
    onSubmitClickedHdn: (data: IEmployee) => void;
}

export default function AddEmployee(props: AddEmployeeProps) {
    const { onBackBtnClickHdn, onSubmitClickedHdn } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [departmentId, setDepartmentId] = useState('');


    const onFirstChangeHdn = (e: any) => {
        setFirstName(e.target.value);
    }

    const onLastChangeHdn = (e: any) => {
        setLastName(e.target.value);
    }

    const onEmailChangeHdn = (e: any) => {
        setEmail(e.target.value);
    }

  

    const onSubmitBtnClickedHdn = (e: any) => {
        e.preventDefault();
        const data: IEmployee = {
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName: lastName,
            email: email,
           departmentId: Number(departmentId)
        }
        onSubmitClickedHdn(data);
        onBackBtnClickHdn();
    }

    return (
        <div className='form-container'>
            <div>
                <h3>Add Employee Form</h3>
            </div>
            <form onSubmit={onSubmitBtnClickedHdn}>
                <div>
                    <label>First Name : </label>
                    <input type="text" value={firstName} onChange={onFirstChangeHdn} pattern="[A-Za-z]+" required />
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type="text" value={lastName} onChange={onLastChangeHdn} pattern="[A-Za-z]+" required />
                </div>
                <div>
                    <label>Email Add : </label>
                    <input type="text" value={email} onChange={onEmailChangeHdn} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required />
                </div>
                <div>
                    <label>Department Add : </label>
                    <div>
        <label htmlFor="department"> </label>
        <DepartmentDropdown
         departments={Department}
          value={Number(departmentId)}
          onChange={(value) => setDepartmentId(value.toString())
            
        }
          
        />
        
      </div>
      <br></br>
                    {/* <DepartmentDropdown value={Number(departmentId)} onChange={dropdownChangeHdn} departments={}/> */}
                </div>
                <div>
                    <input type="button" value="back" onClick={onBackBtnClickHdn} style={{ backgroundColor: '#6495ED', color: 'white',}} />
                   
                    <input type="submit" value="Add Employee" style={{ backgroundColor: '#6495ED', color: 'white'}}/>
                </div>
            </form>
        </div>
    )
}
