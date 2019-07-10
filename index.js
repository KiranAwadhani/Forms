function Details(name, addr, phno)
{
    this.name = name;
    this.addr = addr;
    this.phno = phno;
}
function UI() {}

UI.prototype.addDetailsToList = function(details){
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${details.name}</td>
    <td>${details.addr}</td>
    <td>${details.phno}</td>
    <td><a href="#" class="delete">x</a></td>
    `;
    list.appendChild(row);
}

UI.prototype.clearFields = function()
{
    document.querySelector('.name').value = '';
    document.querySelector('.address').value = '';
    document.querySelector('.phno').value = '';

}

/*UI.prototype.clearTasks = function(){
    
document.querySelector('.clear-task').addEventListener('click', function(){
    details.innerHTML = '';
});
}*/

UI.prototype.showAlert = function(messege, className){
    const div = document.createElement('div');
    div.className = 'alert ${className}';
    div.appendChild(document.createTextNode(messege));
    const container = document.querySelector('.container');
    const form = document.querySelector('#form-de');
    container.insertBefore(div,form);
    setTimeout (function(){
        document.querySelector('.alert').remove();
    },3000);
    

}
UI.prototype.deleteDel = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

document.getElementById('form-de').addEventListener('submit', function(e){
    const name = document.querySelector('.name').value,
     addr = document.querySelector('.address').value,
     phno = document.querySelector('.phno').value

     const details = new Details(name, addr, phno);

     const ui = new UI();

     if(name === ''|| addr === ''|| phno === ''){
        ui.showAlert('information missing','error')
     }
     else{

     ui.addDetailsToList(details);
     ui.showAlert('Book Added!', 'success');
     ui.clearFields();

     }
    e.preventDefault();

});

document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteDel(e.target);
    ui.showAlert('detail removed', 'success');
    e.preventDefault();
});

//document.querySelector('.clear-task black btn').addEventListener('click', function(){
//    details.clearfield();
//});

/*const btnn = document.querySelector('.delete');

btnn.addEventListener('click', function(e){
        if(e.target.classList.contains('del-ro')){
        if(confirm('are you sure?')){
        e.target.parentElement.remove();
        }
    }

}*/



/*li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(addsub.value));

  const link = document.createElement('a');
  link.class = 'delete-item secondary-content';
  document.innerHTML = '<i class="fa fa-remove"></i>';

  li.appendChild(link);
  unlist.appendChild(li);*/