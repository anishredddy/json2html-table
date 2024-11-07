// json2html.js
export default function json2html(data) {
  // Start with the table and add data-user attribute
  let html = '<table data-user="anishreddy56789@gmail.com"><thead><tr>';

  // Get all unique column headers from the data
  const headers = new Set();
  data.forEach((row) => Object.keys(row).forEach((key) => headers.add(key)));

  // Create header row
  headers.forEach((header) => (html += `<th>${header}</th>`));
  html += "</tr></thead><tbody>";

  // Create rows
  data.forEach((row) => {
    html += "<tr>";
    headers.forEach((header) => (html += `<td>${row[header] || ""}</td>`));
    html += "</tr>";
  });

  // Close table
  html += "</tbody></table>";
  return html;
}
