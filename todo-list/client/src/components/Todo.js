export default function Todo({
    _id,
    text,
    isCompleted,
    toggleTodoStatus,
}) {
    return (
        <tr className={`${isCompleted ? 'todo is-completed' : 'todo'}`}>
            <td>{text}</td>
            <td>{isCompleted ? "Completed." : "Not yet completed."}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => toggleTodoStatus(_id)}>Change status</button>
            </td>
        </tr>
    );
}