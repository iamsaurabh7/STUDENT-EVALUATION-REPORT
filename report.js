let form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  console.log("Form submitted");

  // Fetch input values from input fields
  let std_image = form.image.value;
  let std_name = form.name.value;
  let std_batch = form.batch.value;
  let std_dsa = form.dsa.value;
  let std_skillathon = form.cs.value;
  let std_coding = form.coding.value;

  // Fetch the table body
  let tbody = document.querySelector("tbody");

  // Create a row to insert data
  let tr_std = document.createElement("tr");

  // Create cells for the row
  let td_image = document.createElement("td");
  let td_name = document.createElement("td");
  let td_batch = document.createElement("td");
  let td_dsa = document.createElement("td");
  let td_cs = document.createElement("td");
  let td_coding = document.createElement("td");
  let td_percentage = document.createElement("td");
  let td_status = document.createElement("td");
  let td_delete = document.createElement("td");

  let profile_pic = document.createElement("img");
  profile_pic.setAttribute("src", std_image);

  td_image.append(profile_pic);
  td_name.append(std_name);
  td_batch.append(std_batch);
  td_dsa.append(std_dsa);
  td_cs.append(std_skillathon);
  td_coding.append(std_coding);
  td_percentage.append(
    calculatePercentage(std_dsa, std_skillathon, std_coding)
  );
  td_status.append(
    getStatus(calculatePercentage(std_dsa, std_skillathon, std_coding))
  );

  function calculatePercentage(dsa, cs, coding) {
    return eval((parseInt(dsa) + parseInt(cs) + parseInt(coding)) / 3);
  }

  function getStatus(perc) {
    if (perc >= 50) {
      return "Regular";
    } else {
      td_status.style.backgroundColor = "red";
      return "Async";
    }
  }

  td_delete.style.backgroundColor = "red";
  td_delete.style.cursor = "pointer";
  td_delete.innerText = "delete";

  td_delete.addEventListener("click", deleteRow);
  function deleteRow(event) {
    let row = event.target.parentNode;
    row.parentNode.removeChild(row);
  }

  tr_std.append(
    td_image,
    td_name,
    td_batch,
    td_dsa,
    td_cs,
    td_coding,
    td_percentage,
    td_status,
    td_delete
  );
  tbody.append(tr_std);

  form.reset();
  // return false;
}
