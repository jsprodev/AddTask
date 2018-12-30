$(function () {

  $('#btnSave').on('click', function(){
    let title = $('#title').val();
    let date = $('#date').val();
    let time = $('#time').val();
    $('#taskListing').append('<li><span><a id="e-title" data-type="text">' + title + '</a></span>' + '</li>');
    $('#taskListing').append('<li><span><a id="e-date"  data-type="date">' + date + '</a></span>' + '</li>');
    $('#taskListing').append('<li><span><a id="e-time" data-type="time">' + time + '</a></span>' + '</li>');

    $('#e-title').editable({
      mode: 'inline'
    });

    $('#e-date').editable({
      mode: 'inline'
    });

    $('#e-time').editable({
      mode: 'inline'
    });

  });

  $('#dob').editable({
    mode: 'inline',
    format: 'YYYY-MM-DD',    
    viewformat: 'DD.MM.YYYY',    
    template: 'D / MMMM / YYYY',    
    combodate: {
            minYear: 2000,
            maxYear: 2030,
            minuteStep: 1
       }
  });
  


});
