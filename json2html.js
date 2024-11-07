export default function json2html(data) {
    // Extract all unique keys (columns) from the data
    const columns = Array.from(new Set(data.flatMap(Object.keys)));
  
    // Start building the HTML table string with data-user attribute
    let html = `<table data-user="anishreddy56789@gmail.com">`;
    
    // Add table header
    html += `<thead><tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr></thead>`;
    
    // Add table rows
    html += `<tbody>`;
    data.forEach(row => {
      html += `<tr>${columns.map(col => `<td>${row[col] || ''}</td>`).join('')}</tr>`;
    });
    html += `</tbody></table>`;
    
    return html;
  }
