
function completeTask(button) {
      
      alert("Board Update Successfully");

      
      let currentCount = document.getElementById("currentCount");
      let completedCount = document.getElementById("completedCount");

    
      currentCount.textContent = Math.max(0, parseInt(currentCount.textContent) - 1);
      completedCount.textContent = parseInt(completedCount.textContent) + 1;

      const text = document.getElementById("text-container-1").innerHTML;
      
      
     

      
      const container = document.getElementById('completed-list')
      const p = document.createElement('p')
      p.innerText =`You have completed the task ${text} at 11:59
      `
      container.appendChild(p)


      button.disabled = true;
      button.textContent = "Completed";
  }

  document.getElementById('clear-btn').addEventListener('click', () =>{
      document.getElementById("completed-list").innerHTML = "";
  })
