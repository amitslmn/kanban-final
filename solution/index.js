

// create elements function ;
function createElement(tagName, children = [], classes = [], attributes = {}) { 
    const el = document.createElement(tagName)
    
    //children 
    for (let child of children){
        if(typeof child === "String"){  // child is a text 
            child = document.createTextNode(child);
        } 
        el.append(child);
    }
    
    // classes
    for (const cls of classes){
        el.classList.add(cls);
    }
    
    //artibutes
    for(const attr in attributes){
        el.setAttribute(attr, attributes[attr])
    }
    
    return el ;
}
// create the kanban elements and push them to the dom ;
function createKanbanElements() {

    const kanBan = document.body;
    const pageTitle = createElement("h1", ["kanban To Do List"],[],{id: "title"});
    const toDo =createElement("section", ["To Do Task",createElement("ul",[],["to-do-tasks"])]
        ,["ToDoTask"]) ;
    const inProgress =createElement("section", ["In Progress",createElement("ul",[],["in-progress-tasks"])]
        ,["InProgress"]) ;
    const done =createElement("section", ["Done",createElement("ul",[],["done-tasks"])]
        ,["Done"]) ;
    // creating input field ;
    const inputToDo = createElement("input",[],[],{id: "add-to-do-task"});
    const inputInProgress = createElement("input",[],[],{id: "add-in-progress-task"});
    const inputDone = createElement("input",[],[],{id: "add-done-task"});
    // creating buttons ;
    const buttonToDo = createElement("button",["Add ➕"],["button"],{id: "submit-add-to-do"});
    const buttonInProgress = createElement("button",["Add ➕"],["button"],{id: "submit-add-in-progress"});
    const buttonDone = createElement("button",["Add ➕"],["button"],{id: "submit-add-done"});
 

    // add to the dom 
    toDo.append(inputToDo,buttonToDo);
    inProgress.append(inputInProgress,buttonInProgress);
    done.append(inputDone,buttonDone);
    
    kanBan.append(pageTitle) ;
    kanBan.append(toDo,inProgress,done);



    
}
createKanbanElements();