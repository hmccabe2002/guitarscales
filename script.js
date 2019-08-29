$('.A, .As, .B, .C, .Cs, .D, .Ds, .E, .F, .Fs, .G, .Gs').hide();

$.getJSON("https://api.myjson.com/bins/non2t.json", function(data) {
  $('.main-btn').on("click", function () {
    $('#total-scale-men').empty()
    console.log("emptied total-scale-men");
    $('.gcMen ul li button').css({'border' : '1px #666 solid',
   'color' : '#666'})
    $('.scales-men').hide()
    $('.scales-men').fadeIn()
    $(this).css({'border' : '1px #cc4c4c solid',
   'color' : '#cc4c4c'})
        var scale = $(this).data('scale')
        $.each(data,function(i,data){
            if (scale == data.root) {
                $('#total-scale-men').append('<button class="scale-btn" data-css="'+ data.CSS +'">' + data.scale + '</button>');
            }
        });
    
        $('.scale-btn').on("click", function () {
    $('.nt').hide()
    $('.scales-men').hide()
    $('.gcMen ul li button').css({'border' : '1px #666 solid','color' : '#666'})
      
      var css = $(this).data('css')
      $.each(data,function(i,data){
        var notes = ['.'+data.noteClass_1,
                     '.'+data.noteClass_2,
                     '.'+data.noteClass_3,
                     '.'+data.noteClass_4,
                     '.'+data.noteClass_5,
                     '.'+data.noteClass_6,
                     '.'+data.noteClass_7,
                     '.'+data.noteClass_8]
      if (css == data.CSS) {
      $('#test').html(notes)
        $('#inf div:nth-child(1)').text(data.root)
        $('#inf div:nth-child(2)').text(data.scale)
        $('#inf div:nth-child(3)').text(data.structure)

        for(var i = 0; i < notes.length; i++)
        $(notes[i]).fadeIn();
      }
      });
  })
    
    })
});