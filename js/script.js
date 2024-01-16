// $("form").validate({
//     rules: {
//         name: {
//             required: true,
//             maxlength: 40,
//             regex: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/i
            
//         },

//         email: {
//             required: true,
//             email: true
//         },

//         message: {
//             required: false
//         }
//     },

//     messages: {
//         name: {
//             required: 'Please input your name here',
//             maxlength: "Your name isn't over 40 aphalbetical",
//             regex: 'Your name must be in 26 alphabetical. For example: Johncena'
//         },

//         email: {
//             required: 'Please input your email here',
//             email: 'Please give us an exactly email '
//         }
//     }
// });

// $.validator.addMethod(
//     "regex",
//     function(value, element, regexp) {
//       var re = new RegExp(regexp);
//       return this.optional(element) || re.test(value);
//     },
//     "Please check your input."
//   );

$("form").validate({
    rules: {
      // simple rule, converted to {required:true}
        name: {
            required: true,
            maxlength: 50,
            regex: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/i

        },

        email: {
            required: true,
            email: true
        },

        // compound rule
        message: {
            required: true
        },
},

    messages: {
        // simple rule, converted to {required:true}
        name: {
          required: 'Vui long nhap Ho va Ten',
          maxlength: 'Vui long nhap khong qua 50 ky tu',
          regex: 'Vui long nhap dung ten cua ban'
        },

        email: {
            required: 'Vui long nhap email cua ban',
            email: 'Vui long nhap dung email. vd: talinhdat03@gmail.com'
        },

        // compound rule
        message: {
          required: 'Vui long nhap noi dung',
        
        }
      }
  });

  $.validator.addMethod(
    "regex",
    function(value, element, regexp) {
      var re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
    },
    "Please check your input."
  );

$('.portfolio button').click(function (e) { 
    e.preventDefault();
    // xoa class active ra khoi button dang active 
    $('button.active').removeClass('active');
    // active button duoc click 
    $(this).addClass('active');
    // Lay gia tri data cua button duoc click 
    // vd: web-design 
    const dataValue = $(this).attr('data');
    // lay 8 cai cot div 
    const allDivs = $('.portfolio > .row > div');
    if(dataValue == 'all')
    {
        // show het 
        allDivs.show();
        // ket thuc function, ket thuc su kien click chuot 
        return;
    }
    // Lay tuong ung voi data 
    // vd: web-design 
    // .portfolio > .row > div[data=web-design]
    const showDivs = $(`.portfolio > .row > div[data=${dataValue}]`);

    // lay nhung div an 
    const hideDivs = allDivs.not(showDivs);
    showDivs.show(); // display: block
    hideDivs.hide(); //display: none 
    
});

// menu xo xuong
// jqScroll 
// window la bien toan cuc co an cua javascript 
$(window).scroll(function () { 
    // // do khoang cach tu top cua cua so trinh duyet so voi top cua trang web 
    // console.log($(window).scrollTop());

    // // do khoang cach tu top cua portfolio so voi top cua trang web 
    // console.log($('#portfolio').offset().top);

    if($(window).scrollTop() >= $('#portfolio').offset().top)
    {
        console.log('Menu xo xuong');
        $('.navbar').addClass('fixed-top');
        $('header').addClass('dummy-padding-top');
    }
    else
    {
        console.log('Menu binh thuong');
        $('.navbar').removeClass('fixed-top');
        $('header').removeClass('dummy-padding-top');
    }
});

