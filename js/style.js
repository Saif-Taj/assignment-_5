// document.getElementById('btn-navbar').addEventListener('click', function () {
//       window.location.href = "/index.html"
// })

// document.getElementById('Center-Banner').addEventListener('click', function () {
//       window.location.href = "/question.html"

// })


function completeTask(button) {
      // Show an alert
      alert("Board Update Successfully");

      // Get current and completed count
      let currentCount = document.getElementById("currentCount");
      let completedCount = document.getElementById("completedCount");

      // Update counts
      currentCount.textContent = Math.max(0, parseInt(currentCount.textContent) - 1);
      completedCount.textContent = parseInt(completedCount.textContent) + 1;

      const text = document.getElementById("text-container-1");
      
      
     

      // Add to the completed tasks list
      const container = document.getElementById('completed-list')
      const p = document.createElement('p')
      p.innerText =`You have completed the task ${text} at 11:59
      `
      container.appendChild(p)


      // Disable the button instead of removing the card
      button.disabled = true;
      button.textContent = "Completed";
  }

  document.getElementById('clear-btn').addEventListener('click', () =>{
      document.getElementById("completed-list").innerHTML = "";
  })
