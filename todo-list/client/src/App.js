import { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import Table from "./components/Table";

function App() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const baseUrl = 'http://localhost:3030/jsonstore';

    useEffect(() => {

        fetch(baseUrl + '/todos')
            .then(res => res.json())
            .then(data => {
                setTodos(Object.values(data));
                setIsLoading(false);
            })
            .catch(err => alert(err));

    }, []);

    // TODO: fix ids
    const onTodoAdd = () => {

        const lastId = todos[todos.length - 1]._id;
        const text = prompt('Task:');
        const newTask = { _id: 'todo_' + (Number(lastId.split('_')[1]) + 1), text, isCompleted: false };


        setTodos(state => [newTask, ...state])
    }

    const toggleTodoStatus = (id) => {
        setTodos(state => state.map(t => t._id === id ? ({ ...t, isCompleted: !t.isCompleted }) : t))
    }

    return (
        <div>
            <Header />

            <main className="main">


                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <div className="add-btn-container">
                        <button className="btn" onClick={onTodoAdd}>+ Add new Todo</button>
                    </div>

                    <div className="table-wrapper">


                        {/* <Spinner /> */}
                        {isLoading
                            ? <Spinner />
                            :
                            <Table todos={todos} toggleTodoStatus={toggleTodoStatus} />}



                    </div>


                </section>
            </main>

            <Footer />
        </div>

    );
}



export default App;
