import { IEmployee } from './Employee.type';
import './EmployeeModal.style.css';

type EmployeeModalProps = {
    onClose: () => void
    data: IEmployee
}

export default function EmployeeModal(props: EmployeeModalProps) {
    const { onClose, data } = props;
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div>
                    <h3>Employee Data</h3>
                    <div>
                        <div>
                            <label>First Name : {data.firstName}</label>
                        </div>
                        <div>
                            <label>Last Name : {data.lastName}</label>
                        </div>
                        <div>
                            <label>Email Add : {data.email}</label>
                        </div>
                        <div>
                            <label> Add : {data.departmentId}</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
