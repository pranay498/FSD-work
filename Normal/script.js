function addTodo() {
      const input = document.getElementById('todo-input');
      const todoText = input.value.trim();
      if (todoText === '') {
        alert('Please enter a task!');
        return;
      }

      const ul = document.getElementById('todo-list');
      const li = document.createElement('li');

      const taskText = document.createElement('span');
      taskText.textContent = todoText;

      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('task-buttons');

      const tickBtn = document.createElement('button');
      tickBtn.textContent = '✅';
      tickBtn.classList.add('tick');
      tickBtn.onclick = () => {
        li.classList.toggle('completed');
      };

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '🗑️';
      deleteBtn.classList.add('delete');
      deleteBtn.onclick = () => {
        ul.removeChild(li);
      };

      buttonContainer.appendChild(tickBtn);
      buttonContainer.appendChild(deleteBtn);

      li.appendChild(taskText);
      li.appendChild(buttonContainer);

      ul.appendChild(li);

      input.value = '';
      input.focus();
    }

