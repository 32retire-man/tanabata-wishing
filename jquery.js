jQuery(function ($) {
  const $title = $('.header-title');
  let wish;
  const answer1 = "金持ち";
  const answer2 = ["結婚", "恋人", "彼氏", "彼女"];
  const answer3 = ["支出", "貯め", "貯金"];
  const answer4 = ["稼", "かせぐ", "かせげ", "かせぎ", "副業"];
  const answer5 = ["投資", "増や", "株", "資産運用"];
  const answer6 = ["使う力", "つかう力", "浪費"];
  const answer7 = ["守る", "まもる"];
  const answer8 = ["億万長者", "爆益", "不労所得"];
  const answer9 = ["なりたい", "したい", "ますように"];

  // 見た目にこだわったあたり
  setTimeout(function () {
    $title.fadeIn();
  }, 0);

  setTimeout(function () {
    $('#telling').html(
      `あなたの願い事を書いて送ってください。<br>
      リベ大的に何かテキトーに回答します。<br><br>`
    );
    $('.orientation').fadeIn();
  }, 100);

  $('#first-button').click(function () {
    wish = document.getElementById("id_wish").value;
    if (wish == '') {
      $('#error').css('display', 'block');
    } else {
      setTimeout(function () {
        $('.orientation').fadeOut();
      }, 200);

      setTimeout(function () {
        result();
      }, 600);
    }
  });

  //結果
  function result() {
    if (wish.match(answer1)) {
      setTimeout(function () {
        $('.content').html(`【あなたの願い事：${wish}】`).fadeIn();
        $('.result-wrapper1').fadeIn();
      }, 800);    
    } else if (
      wish.match(answer2[0]) || 
      wish.match(answer2[1]) || 
      wish.match(answer2[2]) || 
      wish.match(answer2[3])) {
      setTimeout(function () {
        $('.content').html(`【あなたの願い事：${wish}】`).fadeIn();
        $('.result-wrapper2').fadeIn();
      }, 800);    
    } else if (
      wish.match(answer3[0]) || 
      wish.match(answer3[1]) || 
      wish.match(answer3[2])) {
      setTimeout(function () {
        $('.content').html(`【あなたの願い事：${wish}】`).fadeIn();
        $('.result-wrapper3').fadeIn();
      }, 800);    
    } else if (
      wish.match(answer4[0]) || 
      wish.match(answer4[1]) || 
      wish.match(answer4[2]) || 
      wish.match(answer4[3]) || 
      wish.match(answer4[4])) {
      setTimeout(function () {
        $('.content').html(`【あなたの願い事：${wish}】`).fadeIn();
        $('.result-wrapper4').fadeIn();
      }, 800);    
    } else if (
      wish.match(answer5[0]) || 
      wish.match(answer5[1]) || 
      wish.match(answer5[2]) || 
      wish.match(answer5[3])) {
      setTimeout(function () {
        $('.content').html(`【あなたの願い事：${wish}】`).fadeIn();
        $('.result-wrapper5').fadeIn();
      }, 800);    
    } else if (
      wish.match(answer6[0]) || 
      wish.match(answer6[1]) || 
      wish.match(answer6[2])) {
      setTimeout(function () {
        $('.content').html(`【あなたの願い事：${wish}】`).fadeIn();
        $('.result-wrapper6').fadeIn();
      }, 800);    
    } else if (
      wish.match(answer7[0]) || 
      wish.match(answer7[1])) {
      setTimeout(function () {
        $('.content').html(`【あなたの願い事：${wish}】`).fadeIn();
        $('.result-wrapper7').fadeIn();
      }, 800);    
    } else if (
      wish.match(answer8[0]) || 
      wish.match(answer8[1]) || 
      wish.match(answer8[2])) {
      setTimeout(function () {
        $('.content').html(`【あなたの願い事：${wish}】`).fadeIn();
        $('.result-wrapper8').fadeIn();
      }, 800);    
    } else if (
      wish.match(answer9[0]) || 
      wish.match(answer9[1]) || 
      wish.match(answer9[2])) {
      setTimeout(function () {
        $('.content').html(`【あなたの願い事：${wish}】`).fadeIn();
        $('.result-wrapper9').fadeIn();
      }, 800);    
    } else {
      setTimeout(function () {
        $('.content').html(`【あなたの願い事：${wish}】`).fadeIn();
        $('.result-wrapper').fadeIn();
        $('.restart').fadeIn();
      }, 800);    
    };
  }

});