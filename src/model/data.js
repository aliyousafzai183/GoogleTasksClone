const data = () => {
    const todos = [
        { title: "Buy groceries", description: "Milk, eggs, bread, and cheese", starred: false, completed: false},
        { title: "Do laundry", description: "Wash and dry clothes, fold and put away", starred: true, completed: false, date: "Thu, Apr 27" },
        { title: "Exercise", starred: false, completed: false, },
        { title: "Read book", description: "Read 1 chapter of 'The Great Gatsby'", starred: true, completed: true, date: "Thu, Apr 27"  }
    ];

    return todos;
}

export default data;