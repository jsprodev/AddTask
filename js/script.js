
$(function() {

  $('[data-toggle="tooltip"]').tooltip();
  
  let tasks = [];
  let id = 0;
  
  $('#btnSave').on('click', function(){
    if(!$('#title').val() == '') {
      let title = $('#title').val();
      let date = $('#date').val();
      let time = $('#time').val();
      id = id + 1;
      let obj = {"id": id, "title": title, "date": date, "time": time};
      tasks.push(obj);
      let html = '<div class="col-sm-4" id="task-%id%">' +
                    '<div class="card">' +
                      '<div class="card-header">' +
                        '<a class="e-title" data-type="text">' + title + '</a><span class="float-right"><a class="task-actions" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fas fa-pen-fancy task-actions-edit"></i></a><a class="task-actions" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fas fa-trash task-actions-delete"></i></a></span>' +
                      '</div>' +
                      '<ul class="list-group list-group-flush">' +
                        '<li class="list-group-item"><a class="e-date" data-type="combodate" data-format="DD-MMM-YYYY" data-template="DD MMM YYYY">' + date + '</a></li>' +
                        '<li class="list-group-item"><a class="e-time" data-type="combodate" data-format="hh:mm a" data-template="hh mm a">' + time + '</a></li>' +
                      '</ul>' +
                    '</div>' +
                  '</div>';
      let newHtml = html.replace('%id%', id);
      // $('#taskListing').append(newHtml);
      document.querySelector('#taskListing').insertAdjacentHTML('beforeend', newHtml);
      $('#title').val('');
      console.log(tasks);
    } else {
      alert('Title is required');
    }
    });
                 
    document.querySelector('#taskListing').addEventListener('click', function(e) {
      if (event.target.classList.contains('task-actions-delete')) {
        
      }
    });

    document.querySelector('#taskListing').addEventListener('click', function(e) {
      if (e.target.classList.contains('task-actions-edit')) {
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
    });

    $(function(){
      $('#date').combodate({
        minYear: 2010,
        maxYear: 2030,
        firstItem: 'name'
      });    
    });

    $(function(){
      $('.e-date').combodate({
        minYear: 2010,
        maxYear: 2030,
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
