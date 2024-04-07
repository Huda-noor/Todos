import inquirer from "inquirer";
import chalk from "chalk";

console.log("welcome to Todo list");


// 1st we create todos array

let todos : string[] = ["Foundation", "Blush", "Contour", "Concealer"]

// 2nd we create function
// and then we use operations

async function createTodo (array:string[]) {

    do{
        let answer = await inquirer.prompt({
            type : "list",
            message : "\n select an operation",
            name : "select",
            prefix : "", 
            choices : ["Add","Update","View","Delete","Exit"]
        })
        if (answer.select == "Add"){
            let addTodo = await inquirer.prompt({
                type : "input",
                message : "\n add item in todo ",
                name : "todo",
            });
        
            array.push(addTodo.todo)
            console.log(array);
            
        }
        if (answer.select == "Update"){
            let Updatetodo = await inquirer.prompt({
                type : "list",
                message : "\n select item for update ",
                name : "todo",
                choices : todos.map(item => item),
            })
            let addTodo = await inquirer.prompt({
                type : "input",
                message : "\n add item in todo ",
                name : "todo",
            });
        
            let newTodo = todos.filter(val => val !== Updatetodo.todo)
            todos = [... newTodo,addTodo.todo]
            console.log(todos);
            
        }
        
        if (answer.select == "View"){
        
            console.log(todos);
            
        }
        if (answer.select == "Delete"){
            let Deletetodo = await inquirer.prompt({
                type : "list",
                message : "\n select item for update ",
                name : "todo",
                choices : todos.map(item => item),
            })
            let newTodo = todos.filter(val => val !== Deletetodo.todo)
            todos = [...newTodo]
            console.log(todos);
            
        }

      }while(true)
}
createTodo(todos)