
$(function() {

  $('[data-toggle="tooltip"]').tooltip();
  $.fn.editable.defaults.mode = 'inline';
  
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
      let html = '<div class="col-sm-4">' +
                    '<div class="card" id="task-' + id +'">' +
                      '<div class="card-header">' +
                        '<a class="e-title e-editable" data-type="text" data-pk="' + id + '" >' + title + '</a>' +
                          '<span class="float-right">' +
                            '<a class="task-actions inline-edit" data-id="' + id + '" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fas fa-pen-fancy task-actions-edit"></i></a>' +
                            '<a class="task-actions task-actions-delete" data-id="' + id + '" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fas fa-trash"></i></a>' +
                          '</span>' +
                      '</div>' +
                      '<ul class="list-group list-group-flush">' +
                        '<li class="list-group-item"><a class="e-date e-editable" data-type="combodate" data-format="DD-MMM-YYYY" data-template="DD MMM YYYY">' + date + '</a></li>' +
                        '<li class="list-group-item"><a class="e-time e-editable" data-type="combodate" data-format="hh:mm a" data-template="hh mm a">' + time + '</a></li>' +
                      '</ul>' +
                    '</div>' +
                  '</div>';
      
      newHtml = html;
      // $('#taskListing').append(newHtml);
      document.querySelector('#taskListing').insertAdjacentHTML('beforeend', newHtml);
      $('#title').val('');
      console.log('saved: ', tasks);
    } else {
      alert('Title is required');
    }
    });
     
    // delete task
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

    // make tasks editable 
    $('body').on('click', '.inline-edit', function(e){ 
      
      var id = $(this).data('id');

      $('#task-' + id + ' .e-editable').each((i, el) => {
        if($(el).hasClass('editable')){
          $(el).toggleClass('editable editable-click');
          $(el).editable('destroy');
          return;
        }

        $(el).editable();
      });
    });

    function updateTaskArray(id) {
      let title = $('.e-title').val();
      let date = $('.e-date').val();
      let time = $('.e-time').val();
      console.log(id + ' ' + title + '' + date + ' ' + time)
    }

    // document.querySelector('.editable-submit').addEventListener('click', function(e) {

    // });

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
