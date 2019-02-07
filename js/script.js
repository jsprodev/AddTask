
$(function() {

  // initialize date
  $('#date').combodate({
    minYear: 2019,
    maxYear: 2025,
    firstItem: 'name'
  });    

  // initialize time
  $('#time').combodate({
      firstItem: 'name', //show 'hour' and 'minute' string at first item of dropdown
      minuteStep: 10,
  });
    
  $('[data-toggle="tooltip"]').tooltip();
  $.fn.editable.defaults.mode = 'inline';

  // initialize color picker
  $("#color").spectrum({
    preferredFormat:'rgb',
    showAlpha: true,
    showInput: true
  });
  
  let tasks = [];
  let id = 0;
  
  $('#btnSave').on('click', function(){
    if(!$('#title').val() == '') {
      let title = $('#title').val();
      let date = $('#date').val();
      let time = $('#time').val();
      let color = $('#color').val();
      console.log(color);
      id = id + 1;
      let obj = {"id": id, "title": title, "date": date, "time": time, "color": color};
      tasks.push(obj);
      let html = '<div class="col-sm-4">' +
                    '<div class="card" id="task-' + id +'"  style="background-color: ' + color + ' ">' +
                      '<div class="card-header">' +
                        '<a class="e-title e-editable" data-type="text" data-pk="' + id + '" >' + title + '</a>' +
                          '<span class="float-right">' +
                            '<a class="task-actions inline-edit" data-id="' + id + '" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fas fa-pen-fancy task-actions-edit"></i></a>' +
                            '<a class="task-actions task-actions-delete" data-id="' + id + '" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fas fa-trash"></i></a>' +
                          '</span>' +
                      '</div>' +
                      '<ul class="list-group list-group-flush">' +
                        '<li class="list-group-item"><a class="e-date e-editable" data-type="combodate" data-format="DD-MMM-YYYY" data-template="DDMMMYYYY" >' + date + '</a></li>' +
                        '<li class="list-group-item"><a class="e-time e-editable" data-type="combodate" data-format="hh:mm a" data-template="hh mm a">' + time + '</a></li>' +
                      '</ul>' +
                    '</div>' +
                  '</div>';
      
      // $('#taskListing').append(newHtml);
      document.querySelector('#taskListing').insertAdjacentHTML('beforeend', html);
      $('#title').val('');
      console.log('saved: ', tasks);
    } else {
      alert('Title is required');
    }
    });
     
    // delete task javascript approach
    document.querySelector('#taskListing').addEventListener('click', function(e) {
      if (event.target.classList.contains('task-actions-delete')) {
        let element, parent, elementID, ids, index;
        element = event.target.parentNode.parentNode.parentNode.parentNode;
        parent = element.parentNode;
        parent.parentNode.removeChild(parent);
        element = element.id;
        element = element.split('-');
        elementID = parseInt(element[1]);
        ids = tasks.map(function(current) {
          return current.id; 
        });
        index = ids.indexOf(elementID);
        if (index !== -1) {
          tasks.splice(index, 1);
        }
        console.log(tasks);
      }
    });

    // make tasks editable jquery approach
    $('body').on('click', '.inline-edit', function(e) {
      let id = $(this).data('id');
      $('#task-' + id + ' .e-editable').each(function(i, el) { 
        if($(el).hasClass('editable') && $(el).hasClass('editable-click')) {
          $(el).removeClass('editable editable-click');
          $(el).editable('destroy');
        } else {
          if($(el).hasClass('e-date')) {
            $(el).editable({
              format: 'DD-MMM-YYYY',    
              viewformat: 'DD-MMM-YYYY',    
              template: 'DD/MMM/YYYY',    
              combodate: {
                minYear: 2019,
                maxYear: 2025,
                firstItem: 'name'
              }
            });
          }
          $(el).editable();
        }
      });
    });

})