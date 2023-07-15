// Async function to fecth data
const fetchData = async () => {
  // Store response from fetch request from server in a varfiable
  const response = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
  // Use the JS json method to parse json response into a JS object
  const record = await response.json();
  // Create HTML content from parsed response (i.e. record)
  document.getElementById("date").innerHTML = record.data[0].date;
  document.getElementById("areaName").innerHTML = record.data[0].areaName;
  document.getElementById("latestBy").innerHTML = record.data[0].latestBy;
  document.getElementById("deathNew").innerHTML = record.data[0].deathNew;
};

fetchData();