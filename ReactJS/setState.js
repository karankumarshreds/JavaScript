changeValue(id) {
    
    // make a new reference array
    const newTodo = this.state.todos.map((each) => {
        if(each.id == id) {
            return {...todo, title: 'new title'} //this makes a new array 
        }
        return todo;
    })

    this.setState({
        todos: newTodo
    });
}
