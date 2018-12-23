$(function() {
    $('#Date').datepicker();
    $('#Time').timepicker();
    $("#Color").spectrum({
        color: "#007bff"
    });

    $(document).ready(function () {
        let data, grid, dialog;
        data = [
            { 'ID': 1, 'Title': 'Meet Gabriel', 'Date': '12/25/2018', 'Time': '11:00' },
            { 'ID': 2, 'Title': 'Buy Grcoery', 'Date': '12/28/2018', 'Time': '12:26' },
            { 'ID': 3, 'Title': 'Pay Bill', 'Date': '11/12/2018', 'Time': '07:00' },
        ];
        grid = $('#grid').grid({
            primaryKey: 'ID',
            dataSource: data,
            uiLibrary: 'bootstrap4',
            columns: [
                { field: 'ID',  title: 'ID', width: 56, sortable: true },
                { field: 'Title', title: 'Title', sortable: true },
                { field: 'Date', title: 'Date', sortable: true },
                { field: 'Time', title: 'Time', sortable: true },
                { field: 'Edit', width: 70, tmpl: '<i class="far fa-edit"></i>', align: 'center', events: { 'click': Edit } },
                { field: 'Delete', width: 80, tmpl: '<i class="far fa-trash-alt"></i>', align: 'center', events: { 'click': Delete } }
            ],
            pager: { limit: 10, sizes: [10, 20, 50, 100] }
        });
        dialog = $('#dialog').dialog({
            autoOpen: false,
            resizable: false,
            uiLibrary: 'bootstrap4',
            iconsLibrary: 'fontawesome',
            modal: true,
            width: 360
        });
        function Edit(e) {
            $('#ID').val(e.data.id);
            $('#Title').val(e.data.record.Title);
            $('#Date').val(e.data.record.Date);
            dialog.open('Edit Player');
        }
        function Delete(e) {
            if (confirm('Are you sure?')) {
                grid.removeRow(e.data.id);
            }
        }
        function Save() {
            if ($('#ID').val()) {
                let id = parseInt($('#ID').val());
                grid.updateRow(id, { 'ID': id, 'Title': $('#Title').val(), 'Date': $('#Date').val() });
            } else {
                grid.addRow({ 'ID': grid.count(true) + 1, 'Title': $('#Title').val(), 'Date': $('#Date').val(), 'Time': $('#Time').val() });
                let id = grid.count(true);
                let color = $("#Color").spectrum("get");
                color = color.toHexString();    
                $('#Title').val('');
                $('#Date').val('');
                $('#Time').val('');
                $('[data-position = ' + id + ']').css("background-color",  color);
                console.log(data );
            }
            // dialog.close();
        }
        // $('#btnAdd').on('click', function () {
        //     $('#ID').val('');
        //     $('#Title').val('');
        //     $('#Date').val('');
        //     dialog.open('Add Player');
        // });
        $('#btnSave').on('click', Save);
        $('#btnCancel').on('click', function () {
            dialog.close();
        });
        
        $('#btnSearch').on('click', function () {
            grid.reload({ page: 1, Name: $('#txtTitle').val(), Date: $('#txtDate').val() });
        });

        $('#btnClear').on('click', function () {
            $('#txtTitle').val('');
            $('#txtDate').val('');
            grid.reload({ page: 1, Name: $('#txtTitle').val(), Date: $('#txtDate').val() });
        });
    });
   

});
