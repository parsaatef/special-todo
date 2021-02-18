import React from 'react';
import { Col, CustomInput, FormGroup, Label } from 'reactstrap';
import { TodoStatus } from 'types/todo';
import { getTodoStatuses } from '../../../helper/general';
export interface Props {
    updateStatus: (status: TodoStatus) => void;
    status: TodoStatus;
}

const TodoStatusFilter: React.FC<Props> = (props) => {

    const { updateStatus, status = TodoStatus.ALL } = props;

    const [value, setStatus] = React.useState<TodoStatus>(status);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const val = e.target.value as TodoStatus;

        setStatus(val);

        updateStatus(val);

    };

    return (
        <section data-test="component-todo-status-filter">
            <FormGroup row>
                <Label className="col-3 col-form-label really-small-col">Completed:</Label>
                <Col className="col-9 really-small-col">
                    <CustomInput 
                        data-test="todo-status-select" 
                        type="select" 
                        id="todoStatusSelect"
                        onChange={handleChange}
                        value={value}
                    >
                        {getTodoStatuses.map((option, index) => (
                            <option key={option.value + index} value={option.value}>
                                {option.text}
                            </option>    
                        ))}
                    </CustomInput>
                </Col>
            </FormGroup>
        </section>
    )
};

export default TodoStatusFilter;