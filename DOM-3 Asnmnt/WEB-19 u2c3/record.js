// fill in javascript code here

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form');
    var tbody = document.querySelector('tbody');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var name = document.getElementById('name').value;
      var employeeID = document.getElementById('employeeID').value;
      var department = document.getElementById('department').value;
      var exp = parseInt(document.getElementById('exp').value);
      var email = document.getElementById('email').value;
      var mbl = document.getElementById('mbl').value;
  
      var role;
      if (exp > 5) {
        role = 'Senior';
      } else if (exp >= 2 && exp <= 5) {
        role = 'Junior';
      } else {
        role = 'Fresher';
      }
  
      var row = document.createElement('tr');
      row.innerHTML = `
        <td>${name}</td>
        <td>${employeeID}</td>
        <td>${department}</td>
        <td>${exp}</td>
        <td>${email}</td>
        <td>${mbl}</td>
        <td>${role}</td>
        <td><button class="delete-btn">Delete</button></td>
      `;
  
      tbody.appendChild(row);
  
      form.reset();
    });
  
    tbody.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-btn')) {
        var row = event.target.parentElement.parentElement;
        row.remove();
      }
    });
  });
  