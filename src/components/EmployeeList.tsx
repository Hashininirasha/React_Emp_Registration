import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeList.style.css";
import EmployeeModal from "./EmployeeModal";



type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd} = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

  const viewEmployee = (data: IEmployee) => {
    setDataToShow(data);
    setShowModal(true);
  };


  
  const onCloseModal = () => setShowModal(false);

  return (
    <div>
      <article>
        <h3 className="list-header">Employee List</h3>
        <br></br>
      </article>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Action</th>
        </tr>

        {list.map((employee) => {
    let departmentName = "";
    switch (employee.departmentId) {
      case 1:
        departmentName = "Sales";
        break;
      case 2:
        departmentName = "Marketing";
        break;
      case 3:
        departmentName = "Finance";
        break;
      default:
        departmentName = employee.departmentId ? employee.departmentId.toString() : '';
        
        break;
    }
    
       
          return (
            <tr key={employee.id}>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.email}</td>
              <td>{departmentName} </td>
              
              
              <td>
                <div>
                  {/* <input
                    type="button"
                    value="View"
                    onClick={() => viewEmployee(employee)}
                  /> */}
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(employee)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      {showModal && dataToShow !== null && (
        <EmployeeModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default EmployeeList;