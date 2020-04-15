/* eslint-disable no-undef */
//Tracking Information Function Call
$(document).ready(function() {
  $('.orderTkNum').click(function() {
    let num = $('#orderNum').val();
    if (num === '') {
      // eslint-disable-next-line no-alert
      alert('Enter Tracking Number');
      return;
    }
    //Call 17track method
    YQV5.trackSingle({
      YQ_ContainerId: 'pkTk',
      YQ_Height: 560,
      YQ_Fc: '0',
      YQ_Lang: 'en',
      YQ_Num: num
    });
  });
});

//Hover on thumbnails changes images
$(document).ready(function() {
  $('#i1').hover(function() {
    $('#full').attr('src', $(this).attr('src'));
  });
  $('#i2').hover(function() {
    $('#full').attr('src', $(this).attr('src'));
  });
  $('#i3').hover(function() {
    $('#full').attr('src', $(this).attr('src'));
  });
  $('#i4').hover(function() {
    $('#full').attr('src', $(this).attr('src'));
  });
  $('#ap1').hover(function() {
    $('#full5').attr('src', $(this).attr('src'));
  });
  $('#ap2').hover(function() {
    $('#full5').attr('src', $(this).attr('src'));
  });
  $('#ap3').hover(function() {
    $('#full5').attr('src', $(this).attr('src'));
  });

  $('#gf1').hover(function() {
    $('#full4').attr('src', $(this).attr('src'));
  });
  $('#gf2').hover(function() {
    $('#full4').attr('src', $(this).attr('src'));
  });
  $('#gf3').hover(function() {
    $('#full4').attr('src', $(this).attr('src'));
  });
  $('#gf3').hover(function() {
    $('#full4').attr('src', $(this).attr('src'));
  });
  $('#oc1').hover(function() {
    $('#full1').attr('src', $(this).attr('src'));
  });
  $('#oc2').hover(function() {
    $('#full1').attr('src', $(this).attr('src'));
  });
  $('#oc3').hover(function() {
    $('#full1').attr('src', $(this).attr('src'));
  });
  $('#x1').hover(function() {
    $('#fullx').attr('src', $(this).attr('src'));
  });
  $('#x2').hover(function() {
    $('#fullx').attr('src', $(this).attr('src'));
  });
  $('#x3').hover(function() {
    $('#fullx').attr('src', $(this).attr('src'));
  });
  $('#x4').hover(function() {
    $('#fullx').attr('src', $(this).attr('src'));
  });
  $('#s1').hover(function() {
    $('#fulls').attr('src', $(this).attr('src'));
  });
  $('#s2').hover(function() {
    $('#fulls').attr('src', $(this).attr('src'));
  });
  $('#s3').hover(function() {
    $('#fulls').attr('src', $(this).attr('src'));
  });
  $('#mb1').hover(function() {
    $('#full3').attr('src', $(this).attr('src'));
  });
  $('#mb2').hover(function() {
    $('#full3').attr('src', $(this).attr('src'));
  });
  $('#mb3').hover(function() {
    $('#full3').attr('src', $(this).attr('src'));
  });
  $('#bt1').hover(function() {
    $('#full2').attr('src', $(this).attr('src'));
  });
  $('#bt2').hover(function() {
    $('#full2').attr('src', $(this).attr('src'));
  });
  $('#bt3').hover(function() {
    $('#full2').attr('src', $(this).attr('src'));
  });
  $('#rk1').hover(function() {
    $('#full6').attr('src', $(this).attr('src'));
  });
  $('#rk2').hover(function() {
    $('#full6').attr('src', $(this).attr('src'));
  });
  $('#rk3').hover(function() {
    $('#full6').attr('src', $(this).attr('src'));
  });
  $('#so1').hover(function() {
    $('#full7').attr('src', $(this).attr('src'));
  });
  $('#so2').hover(function() {
    $('#full7').attr('src', $(this).attr('src'));
  });
  $('#ps1').hover(function() {
    $('#full9').attr('src', $(this).attr('src'));
  });
  $('#ps2').hover(function() {
    $('#full9').attr('src', $(this).attr('src'));
  });
  $('#ps3').hover(function() {
    $('#full9').attr('src', $(this).attr('src'));
  });
  $('#sw1').hover(function() {
    $('#full8').attr('src', $(this).attr('src'));
  });
  $('#sw2').hover(function() {
    $('#full8').attr('src', $(this).attr('src'));
  });
  $('#sw3').hover(function() {
    $('#full8').attr('src', $(this).attr('src'));
  });
});

$(document).ready(function() {
  $('#orderNo').click(function() {
    $('.orderNoDiv').css('display', 'block');
    $('#radTxt').prop('required', true);
  });
  $('#cmnt').click(function() {
    $('#radTxt').prop('required', false);
    $('.orderNoDiv').css('display', 'none');
  });
  $('#qst').click(function() {
    $('#radTxt').prop('required', false);
    $('.orderNoDiv').css('display', 'none');
  });
});

function openNav() {
  $('.dropdwncontainer').removeClass('drpdwntggl');
  $('#sidebarNav').attr('style', 'width: 300px !important');
}

function closeNav() {
  $('#sidebarNav').attr('style', 'width: 0 !important');
  $('.dropdwncontainer').removeClass('drpdwntggl');
}
$(document).ready(function() {
  $('.drpdwn').click(function() {
    $('.dropdwncontainer').toggleClass('drpdwntggl');
  });
});

$(document).ready(function() {
  if (window.location.hash === '#hp') {
    $('.hp').removeClass('hidden');
    $('.phns').addClass('hidden');
    $('.hm').addClass('hidden');
    $('.lptp').addClass('hidden');
    $('.vgm').addClass('hidden');
  } else if (window.location.hash === '#phns') {
    $('.hp').addClass('hidden');
    $('.phns').removeClass('hidden');
    $('.hm').addClass('hidden');
    $('.lptp').addClass('hidden');
    $('.vgm').addClass('hidden');
  } else if (window.location.hash === '#hm') {
    $('.hp').addClass('hidden');
    $('.phns').addClass('hidden');
    $('.hm').removeClass('hidden');
    $('.lptp').addClass('hidden');
    $('.vgm').addClass('hidden');
  } else if (window.location.hash === '#lptp') {
    $('.hp').addClass('hidden');
    $('.phns').addClass('hidden');
    $('.hm').addClass('hidden');
    $('.lptp').removeClass('hidden');
    $('.vgm').addClass('hidden');
  } else if (window.location.hash === '#vdg') {
    $('.hp').addClass('hidden');
    $('.phns').addClass('hidden');
    $('.hm').addClass('hidden');
    $('.lptp').addClass('hidden');
    $('.vgm').removeClass('hidden');
  }

  $('#phone').click(function() {
    $('.hp').addClass('hidden');
    $('.phns').removeClass('hidden');
    $('.hm').addClass('hidden');
    $('.lptp').addClass('hidden');
    $('.vgm').addClass('hidden');
  });

  $('#home').click(function() {
    $('.hp').addClass('hidden');
    $('.phns').addClass('hidden');
    $('.hm').removeClass('hidden');
    $('.lptp').addClass('hidden');
    $('.vgm').addClass('hidden');
  });

  $('#laptop').click(function() {
    $('.hp').addClass('hidden');
    $('.phns').addClass('hidden');
    $('.hm').addClass('hidden');
    $('.lptp').removeClass('hidden');
    $('.vgm').addClass('hidden');
  });

  $('#vdg').click(function() {
    $('.hp').addClass('hidden');
    $('.phns').addClass('hidden');
    $('.hm').addClass('hidden');
    $('.lptp').addClass('hidden');
    $('.vgm').removeClass('hidden');
  });

  $('#headphones').click(function() {
    $('.hp').removeClass('hidden');
    $('.phns').addClass('hidden');
    $('.hm').addClass('hidden');
    $('.lptp').addClass('hidden');
    $('.vgm').addClass('hidden');
  });

  $('#ps').click(function() {
    $('.hp').addClass('hidden');
    $('.phns').removeClass('hidden');
    $('.hm').addClass('hidden');
    $('.lptp').addClass('hidden');
    $('.vgm').addClass('hidden');
    closeNav();
  });

  $('#hms').click(function() {
    $('.hp').addClass('hidden');
    $('.phns').addClass('hidden');
    $('.hm').removeClass('hidden');
    $('.lptp').addClass('hidden');
    $('.vgm').addClass('hidden');
    closeNav();
  });

  $('#lptps').click(function() {
    $('.hp').addClass('hidden');
    $('.phns').addClass('hidden');
    $('.hm').addClass('hidden');
    $('.lptp').removeClass('hidden');
    $('.vgm').addClass('hidden');
    closeNav();
  });

  $('#vgms').click(function() {
    $('.hp').addClass('hidden');
    $('.phns').addClass('hidden');
    $('.hm').addClass('hidden');
    $('.lptp').addClass('hidden');
    $('.vgm').removeClass('hidden');
    closeNav();
  });
  $('#hps').click(function() {
    $('.hp').removeClass('hidden');
    $('.phns').addClass('hidden');
    $('.hm').addClass('hidden');
    $('.lptp').addClass('hidden');
    $('.vgm').addClass('hidden');
    closeNav();
  });
});
