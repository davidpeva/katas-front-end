//CLASE DEL 08-06-22

//REPETIR LA ULTIMA MEDIA HORA DE ESTA CLASE ESTUVO DURA
 
import React, { Component } from 'react'
import InputValue from '../components/InputValue'
import Button from '../components/Button'
import logo from '../logo.svg'
import './TodosScreen.css'

export default class TodosScreen extends Component {
    state ={
            //este es el arreglo donde van a estar todos los todos
            todos:[],
            //este es donde se va a contener el texto antes de pasar al arreglo
            newTodo:''
        }
        //aca voy a coger lo que el usuario ibgresa y lo voy a mandar al state
    setNewTodo = (todo) => {
        //aca le mando todo el objeto pero con el spread operator le digo q coja solo el new todo y le mande el todo
        this.setState({...this.state, newTodo: todo})
    }
        //funcion para agregar el nuevo todo q cree a la lista osea al arreglo todos del state
        //el prevent default es para q no refresque la pantalla cuando le doy add siempre los botones por defecto tienen refesch  
        //EXTRA => INVESTIGAR COMO FUNCIONA LA ACTUALIZACION DE UN STATE EN REACT al hacer la funcion asincrona me limpia el input cada vez q le doy enter
    addTodoIntoList = async (e) => {
        e.preventDefault()
        //el objeto que estoy agregando lleva dos propiedades el id y el task
        //cada vez q agrege uno el id va a ser diferente por el length
        //el task me agrega uno nuevo la tarea
        //es agregar un obketo y es como si fuera key=id y value=task
        await this.setState({...this.state, todos: [...this.state.todos, {id: this.state.todos.length, task: this.state.newTodo}]})
        this.setState({...this.state, newTodo: ''})
    }

    //extra => INVESTIGAR EL METODO FILTER
    removeFromList = (id) => {
        const filteredTodos = this.state.todos.filter(todo => todo.id !== id)
        this.setState({...this.state, todos: filteredTodos})
    }

    render() {
        return (
            //className app app header las traje desde el css de todosScreen.css que el react ya me las dio
            <div className='App App-header'>
                <h1>Todo App</h1>
                <img src={logo} className='App-logo' alt='react-logo'></img>
                <form>
                    <InputValue
                        title='Add new todo'
                        value={this.state.newTodo}
                        //el set value me coge la funcion setNewTodo
                        setValue={this.setNewTodo}
                    />
                    <Button
                        //al hacer el click ya tengo el evento y no me refresca pantalla
                        handleClick={(e) => this.addTodoIntoList(e)}
                        title='Add'
                        type='submit'
                    />
                </form>
                {
                    //arriba tengo los curly braces para que jsx sepa q es una expresion de js porq si no no funciona lo que neceisto que cree
                    this.state.todos.map(todo => (
                        //aca el key es una propiedad unica es como un identificador para div q creo
                        //al hacer el todo arriba un objeyo cada uno con un id unico lo puedo usar unicamente cada uno
                        <div key={todo.id} className='d-flex justify-content-between mt-4'>
                            <p>{todo.task}</p>
                            <button onClick={() => this.removeFromList(todo.id)}>x</button>
                        </div>
                        //arriba en el boton llamo la funcion remove
                    ))
                }

            </div>
        )
    }
}
