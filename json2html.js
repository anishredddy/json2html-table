export default function json2html(data) {
  const headers = ["Name", "Age", "Gender"];
  const tableHeader = headers.map(header => `<th>${header}</th>`).join("");
  const rows = data.map(row => {
    const cells = headers.map(header => `<td>${row[header] || ""}</td>`).join("");
    return `<tr>${cells}</tr>`;
  }).join("");

  return `<table data-user="anishreddy56789@gmail.com">
    <thead><tr>${tableHeader}</tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}
