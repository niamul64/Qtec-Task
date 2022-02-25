let filter = document.querySelector('#task_filter');
filter.addEventListener('keyup', filterTask);
// Filter Task
function filterTask(e) {
      let text = e.target.value.toLowerCase();
      let boxes = document.querySelectorAll('input[type="checkbox"]');
      let flag = true;
      boxes.forEach(box => {
            if (box.checked == true) {
                  flag = false;
            }
      });

      if (flag == true) {
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
      else {
            document.querySelectorAll('li').forEach(task => {

            });
      }

}


function checkBox() {
      let boxes = document.querySelectorAll('input[type="checkbox"]');
      let ellelements = document.querySelectorAll('li')


      filter.value = ""

      flag_no_box_checked = true;

      boxes.forEach(box => {
            if (box.checked == true) {
                  flag_no_box_checked = false;
                  ellelements.forEach(task => {
                        //console.log(task.children[1].children[1].textContent)

                        //console.log(box.value)
                        if (box.classList.contains('count')) {
                              //console.log(box.value)
                              let elelement_countVlaue = task.children[1].children[1].textContent;

                              if (elelement_countVlaue.toLowerCase().indexOf(box.value) != -1) {
                                    task.style.display = 'block';
                                    ellelements.splice(task, 1);

                              } else {
                                    task.style.display = 'none';
                              }
                        }

                        else if (box.classList.contains('user_name')) {
                              //console.log(box.value)
                              let elelement_Name_Vlaue = task.children[3].children[1].textContent;
                              console.log(elelement_Name_Vlaue)

                              if (elelement_Name_Vlaue.toLowerCase().indexOf(box.value) != -1) {
                                    task.style.display = 'block';
                                    ellelements.splice(task, 1);

                              } else {
                                    task.style.display = 'none';
                              }

                        }
                  });
            }



      });


      if (flag_no_box_checked == true) {
            ellelements.forEach(task => {
                  task.style.display = 'block';
            });
      }


}