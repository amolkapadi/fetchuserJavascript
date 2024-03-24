document.addEventListener('DOMContentLoaded', function () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('user-container');
        data.forEach(user => {
          const card = createUserCard(user);
          container.appendChild(card);
        });
      })
      .catch(error => console.log('Error fetching users:', error));
  
    function createUserCard(user) {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const name = document.createElement('h3');
      name.textContent = user.name;
  
      const username = document.createElement('p');
      username.textContent = `Username: ${user.username}`;
  
      const email = document.createElement('p');
      email.classList.add('email');
      email.textContent = `Email: ${user.email}`;
  
      card.appendChild(name);
      card.appendChild(username);
      card.appendChild(email);
  
      return card;
    }
  });
  