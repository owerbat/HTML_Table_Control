function create_table() {
    if (document.querySelector("table") != null) {
        alert("The table already exists");
        return;
    }

    var body = document.querySelector("body");
    var table = document.createElement("table");
    table.setAttribute("border", "1px");
    
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var text = document.createTextNode("0 - 0");
    td.appendChild(text);
    tr.appendChild(td);
    table.appendChild(tr);
    body.appendChild(table);
}


function delete_table() {
    var table = document.querySelector("table");
    if (table == null) {
        alert("There is nothing to delete");
        return;
    }

    var body = document.querySelector("body");
    body.removeChild(table);
}


function add_row() {
    var table = document.querySelector("table");
    if (table == null) {
        alert("Create table first");
        return;
    }

    var rows_number = table.rows.length;
    var cols_number = table.rows[0].cells.length;
    
    var tr = document.createElement("tr");
    for (var i = 0; i < cols_number; i++) {
        var text = document.createTextNode(rows_number + " - " + i);
        var td = document.createElement("td");
        td.appendChild(text);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}


function add_column() {
    var table = document.querySelector("table");
    if (table == null) {
        alert("Create table first");
        return;
    }

    var rows_number = table.rows.length;
    var cols_number = table.rows[0].cells.length;

    for (var i = 0; i < rows_number; i++) {
        var text = document.createTextNode(i + " - " + cols_number);
        var td = document.createElement("td");
        td.appendChild(text);
        table.rows[i].appendChild(td);
    }
}
