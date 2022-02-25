let filter = document.querySelector('#task_filter');
filter.addEventListener('keyup', filterTask);
// Filter Task
function filterTask(e) {
      let text = e.target.value.toLowerCase();

      document.querySelectorAll('li').forEach(task => {
            //console.log(task.firstElementChild.textContent)
            let item = task.firstElementChild.textContent;

            if (item.toLowerCase().indexOf(text) != -1) {
                  task.style.display = 'block';
            } else {
                  task.style.display = 'none';
            }
      });
}