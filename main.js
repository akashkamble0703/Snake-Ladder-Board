var board = {
    createBoard: function(dimension) {
        if (!dimension || isNaN(dimension) || !parseInt(dimension, 10)) {
            return false;
        } else {
            dimension = typeof dimension === 'string' ? parseInt(dimension, 10) : dimension;
            var table = document.createElement('table'),
                tbody = document.createElement('tbody'),
                row = document.createElement('tr'),
                cell = document.createElement('td'),
                rowClone,
                cellClone;
            table.appendChild(tbody);
            for (var r = 0; r < dimension; r++) {
                rowClone = row.cloneNode(true);
                tbody.appendChild(rowClone);
                for (var c = 0; c < dimension; c++) {
                    cellClone = cell.cloneNode(true);
                    rowClone.appendChild(cellClone);
                }
            }
            document.body.appendChild(table);
            board.enumerateBoard(table);
        }
    },




};

board.createBoard(10);