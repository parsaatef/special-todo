import React from 'react';
import { CustomInput } from 'reactstrap';
import { getTodoStatuses } from '../../../helper/general';
export interface Props {
    updateStatus: (status: string) => void;
}

const TodoStatusFilter: React.FC<Props> = (props) => {

    const { updateStatus } = props;

    const [value, setStatus] = React.useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const val = e.target.value;

        setStatus(val);

        updateStatus(val);

    };

    return (
        <section data-test="component-todo-status-filter">
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
        </section>
    )
};

export default TodoStatusFilter;