
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
    $('#taskListing').append('<div class="col-sm-3">' +
                                '<div class="card">' +
                                  '<div class="card-header">' +
                                    '<a class="e-title" data-type="text">' + title + '</a><span class="tasks-actions float-right"><a class=" task-actions-edit" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fas fa-pen-fancy"></i></a> <a id="del" class="task-actions-delete" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fas fa-trash"></i></a></span>' +
                                  '</div>' +
                                  '<ul class="list-group list-group-flush">' +
                                    '<li class="list-group-item"><a class="e-date" data-type="combodate" data-format="DD-MMM-YYYY" data-template="DD MMM YYYY">' + date + '</a></li>' +
                                    '<li class="list-group-item"><a class="e-time" data-type="combodate" data-format="hh:mm a" data-template="hhmma">' + time + '</a></li>' +
                                  '</ul>' +
                                '</div>' +
                              '</div>');


    });
                 
    
    let del = document.getElementsByClassName('task-actions-delete')
    var myFunction = function() {
      alert('hi');
   };
    for (let i = 0; i < del.length; i++) {
      del[i].addEventListener('click', myFunction, false);
    }

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
