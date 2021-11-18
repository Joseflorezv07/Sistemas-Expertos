$(function(){
    $("[data-toogle='tooltip']").tooltip();
    $("[data-toogle='popover']").popover();
    $('.carousel').carousel({
       interval:3000     
   });
   $('#contacto1').on('show.bs.modal', function(e){
    console.log('El modal se esta mostrando');
    $('#cotizarBtn').removeClass('btn-outline-success');
    $('#cotizarBtn').addClass('btn-primary');
    $('#cotizarBtn').prop('disabled',true);
   }); 
   $('#contacto1').on('shown.bs.modal', function(e){
    console.log('El modal se esta mostró');
   }); 
   $('#contacto1').on('hide.bs.modal', function(e){
    console.log('El modal se esta ocultando');
   }); 
   $('#contacto1').on('hidden.bs.modal', function(e){
    console.log('El modal se esta ocultó');
    $('#cotizarBtn').prop('disabled',true);
   }); 
   });

   