fetch('/getTodos',
{
    method:"GET",
    headers:{
        "Content-Type":"application/json",
    },
}).then(response=>response.json()).then(response=>{
    buildHtml(response);
});

function buildHtml(data){
    let root = document.getElementById('root');
    let content ='<div class=\"container\">'+buildUser(data.user)+buildTodos(data.todos)+'</div>';

    root.innerHTML =content;
}

function buildUser(user){
    let html = '<div class=\"user-container\"><span>'+user.id+'</span>'+'<span>'+user.name+'</span></div>';
    return html;
}

function buildTodos(todos){
    let html = '<ul class=\"todo-container\">';
    for(let i = 0;i<todos.length;++i){
        let item = todos[i];
        html+='<li class=\"todo-item\">'+'<span>ID:'+item.id+'</span>'+'<span>'+item.name+'</span>'+'</li>';
    }
    html+='</ul>';
    return html;
}
