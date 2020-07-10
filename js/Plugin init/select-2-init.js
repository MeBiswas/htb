// Select 2 Initialization
$("#interest").select2({
  placeholder: "Choose Your Interest",
  closeOnSelect: false
});

$("#editProfileInterest").select2({
  placeholder: "Choose Your Interest",
  closeOnSelect: false
});

$("#hobby").select2({
  placeholder: "Choose Your Hobby",
  closeOnSelect: false
});

$("#editProfileHobby").select2({
  placeholder: "Choose Your Hobby",
  closeOnSelect: false
});

$("#settings-opt1").select2({
  placeholder: "Choose Continent",
  closeOnSelect: false
});

$("#settings-opt2").select2({
  placeholder: "Choose Country",
  closeOnSelect: false
});

$("#settings-opt3").select2({
  placeholder: "Choose City",
  closeOnSelect: false
});

$("#settings-opt4").select2({
  placeholder: "Choose Gender",
  closeOnSelect: false
});

$("#settings-opt5").select2({
  placeholder: "Choose Hobbies",
  closeOnSelect: false
});

$("#settings-opt6").select2({
  placeholder: "Choose Interests",
  closeOnSelect: false
});

$("#settings-opt7").select2({
  placeholder: "Choose Education",
  closeOnSelect: false
});

$("#promo-site-user-op1").select2({
  placeholder: "Choose Continent",
  closeOnSelect: false
});

$("#promo-site-user-op2").select2({
  placeholder: "Choose Country",
  closeOnSelect: false
});

$("#promo-site-user-op3").select2({
  placeholder: "Choose City",
  closeOnSelect: false
});

$("#promo-site-user-op4").select2({
  placeholder: "Choose Gender",
  closeOnSelect: false
});

$("#promo-site-user-op5").select2({
  placeholder: "Choose Hobbies",
  closeOnSelect: false
});

$("#promo-site-user-op6").select2({
  placeholder: "Choose Interests",
  closeOnSelect: false
});

$("#promo-site-user-op7").select2({
  placeholder: "Choose Education",
  closeOnSelect: false
});


$(document).on('keyup',function(e){
  if(e.keyCode === 27){
    $("#interest").select2("close");
    $("#hobby").select2("close");
  }
}) 
// Select2 Collapsible Groups 
let optgroupState = {};
$("body").on('click', '.select2-container--open .select2-results__group', function() {
  $(this).siblings().toggle();
  let id = $(this).closest('.select2-results__options').attr('id');
  let index = $('.select2-results__group').index(this);
  optgroupState[id][index] = !optgroupState[id][index];
})

$('#select-test').on('select2:open', function() {
  $('.select2-dropdown--below').css('opacity', 0);
  setTimeout(() => {
    let groups = $('.select2-container--open .select2-results__group');
    let id = $('.select2-results__options').attr('id');
    if (!optgroupState[id]) {
      optgroupState[id] = {};
    }
    $.each(groups, (index, v) => {
      optgroupState[id][index] = optgroupState[id][index] || false;
      optgroupState[id][index] ? $(v).siblings().show() : $(v).siblings().hide();
    })
    $('.select2-dropdown--below').css('opacity', 1);
  }, 0);
})
// Customizing Select2 Dropdown for + and - icons
$(document).ready(function(){
  $(document).on('click','.select2-selection',function(){
    $( ".select2-results__group" ).each(function(i,e) {
      $( this ).html('Group '+(i+1)+' <span><i class="fas fa-minus"></i></span>');
    });
  });
  $(document).on('click','.select2-results__group',function(){
    // $('.select2-results__group').find('.fa-plus').each(function(){
    //     $(this).toggleClass('fa-minus');
    // })
    $(this).find('i').toggleClass('fa-minus fa-plus');
  });
});