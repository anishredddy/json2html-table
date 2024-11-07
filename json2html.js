// json2html.js
export default function json2html(data) {
    // Collect all unique keys to create the table headers
    const headers = [...new Set(data.flatMap(Object.keys))];
    
    // Start building the HTML string
    let html = <table data-user="anishreddy56789@gmail.com">\n<thead>\n<tr>;
    
    // Add header cells
    headers.forEach(header => {
        html += <th>${header}</th>;
    });
    html += </tr>\n</thead>\n<tbody>\n;

    // Add rows for each object in the data array
    data.forEach(row => {
        html += <tr>;
        headers.forEach(header => {
            html += <td>${row[header] !== undefined ? row[header] : ""}</td>;
        });
        html += </tr>\n;
    });

    // Close the table tags
    html += </tbody>\n</table>;
    
    return html;
}
