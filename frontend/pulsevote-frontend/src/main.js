import './style.css'

document.querySelector('#app').innerHTML = `
  <h2>Welcome to PulseVote</h2>
  <p id="message">Loading...</p>
`;

fetch("http://localhost:5000/test")
  .then(res => res.json())
  .then(data => {
    document.getElementById("message").textContent = data.message;
  })
  .catch(() => {
    document.getElementById("message").textContent = "Error fetching API";
  });
