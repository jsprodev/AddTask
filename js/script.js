$(function () {

  $('#btnSave').on('click', function(){
    let title = $('#title').val();
    let date = $('#date').val();
    let time = $('#time').val();
    $('#taskListing').append('<li><span><a id="e-title" data-type="text">' + title + '</a></span>' + '</li>');
    $('#taskListing').append('<li><span><a id="e-date" data-type="combodate" data-format="DD-MMM-YYYY" data-template="DD MMM YYYY">' + date + '</a></span>' + '</li>');
    $('#taskListing').append('<li><span><a id="e-time" data-type="combodate" data-format="hh:mm a" data-template="hhmma">' + time + '</a></span>' + '</li>');

    // <a href="#" id="dob" data-type="combodate" data-value="1984-05-15" data-format="YYYY-MM-DD" data-viewformat="DD/MM/YYYY" data-template="D / MMM / YYYY" data-pk="1" data-title="Select Date of birth" class="editable editable-click editable-open" data-original-title="" title="">15/05/1984</a>

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

  $(function(){
    $('#date').combodate({
      minYear: 2010,
      maxYear: 2020,
      firstItem: 'name'
    });    
  });

  $(function(){
    $('#time').combodate({
        firstItem: 'name', //show 'hour' and 'minute' string at first item of dropdown
        minuteStep: 10,
    });  
  });
  


});
