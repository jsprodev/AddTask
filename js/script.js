
$(function(){

  $('[data-toggle="tooltip"]').tooltip();
  
  let tasks = [];
  
  $('#btnSave').on('click', function(){
    let title = $('#title').val();
    let date = $('#date').val();
    let time = $('#time').val();
    let arr = [title, date, time];
    tasks.push(arr);
    console.log(tasks);
    $('#taskListing').append('<div class="col-sm-3 lol">' +
                                '<div class="card">' +
                                  '<div class="card-header">' +
                                    '<a class="e-title" data-type="text">' + title + '</a><span class="task-actions float-right"><a data-toggle="tooltip" data-placement="top" title="Edit"><i class="fas fa-pen-fancy task-actions-edit"></i></a><a data-toggle="tooltip" data-placement="top" title="Delete"><i class="fas fa-trash task-actions-delete"></i></a></span>' +
                                  '</div>' +
                                  '<ul class="list-group list-group-flush">' +
                                    '<li class="list-group-item"><a class="e-date" data-type="combodate" data-format="DD-MMM-YYYY" data-template="DD MMM YYYY">' + date + '</a></li>' +
                                    '<li class="list-group-item"><a class="e-time" data-type="combodate" data-format="hh:mm a" data-template="hhmma">' + time + '</a></li>' +
                                  '</ul>' +
                                '</div>' +
                              '</div>');


    });
                 
    document.querySelector('#taskListing').addEventListener('click', function(event) {
      if (event.target.classList.contains('task-actions-delete')) {
        alert('hi');
        console.log('hi');
      }
    });


  function editable() {
    $('.e-title').editable({
      mode: 'inline'
    });
    $('.e-date').editable({
      mode: 'inline'
    });
    $('.e-time').editable({
      mode: 'inline'
    });
  }

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

})
