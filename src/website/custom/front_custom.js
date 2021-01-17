var proceed_err = "Please fill all the fields properly"
// var jsonData = '<?php echo $jsonData;?>';
$("body").on("click", "#loginSubmit", function (e) {
    var user_login = $("#user_login");
    user_login.validate({
        ignore: [],
        rules: {
            email: {
                required: true,
                email: true,
                maxlength: 100
            },
            password: {
                required: true,
                maxlength: 100
            },
        },
    });
    toastr.remove();
    
    if (user_login.valid() === false) {
        toastr.error(proceed_err);
        return false;
    }

    var _that = $(this),
        form = _that.closest('form'),
        formData = new FormData(form[0])

    $.ajax({
        type: "POST",
        url: "/signupValid",
        headers: { "device-id":"ffff",
            "device-token":"fsdgg",
            "device-type":3,
            timezone:"2002-12-12" },
        data: formData, //only input
        processData: false,
        contentType: false,
        dataType: "JSON",
        beforeSend: function () {
            // show_loader();
        },
        complete: function () {
            // hide_loader();
        },
        success: function (data, textStatus, jqXHR) {
            console.log(data)
            if (data.status == "success") {
                toastr.success("Logged in successfully, redirecting....");
                window.setTimeout(function () {
                    window.location.href = '/profile';
                }, 1000);
            } else {
                toastr.error(data.msg);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error(jqXHR.responseJSON.message);

        }
    });
});



//signup 

$("body").on("click", "#userSignupSubmit", function (e) {
    var user_signup = $("#user_signup");
    user_signup.validate({
        ignore: [],
        rules: {
            full_name: {
                required: true,
                maxlength: 100
            },
            email: {
                required: true,
                email: true,
                maxlength: 100
            },
            password: {
                required: true,
                maxlength: 100
            },
            confirm_password: {
                required: true,
                maxlength: 100,
                equalTo : "#password"
            },
        },
    });

    toastr.remove();
    
    if (user_signup.valid() === false) {
        toastr.error(proceed_err);
        return false;
    }

    var _that = $(this),
        form = _that.closest('form'),
        formData = new FormData(form[0])

    $.ajax({
        type: "POST",
        url: "/userSignupValid",
        headers: { "device-id":"ffff",
            "device-token":"fsdgg",
            "device-type":3,
            timezone:"2002-12-12" },
        data: formData, //only input
        processData: false,
        contentType: false,
        dataType: "JSON",
        beforeSend: function () {
            // show_loader();
        },
        complete: function () {
            // hide_loader();
        },
        success: function (data, textStatus, jqXHR) {
            
            if (data.status == "success") {
                toastr.success("Signup successfully, redirecting....");
                window.setTimeout(function () {
                    window.location.href = '/profile';
                }, 1000);
            } else {
                toastr.error(data.msg);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error(jqXHR.responseJSON.message);

        }
    });
});

//school signup

$("body").on("click", "#expertSignup", function (e) {
    
    var expert_signup = $("#expert_signup");
    expert_signup.validate({
        ignore: [],
        rules: {
            full_name: {
                required: true,
                maxlength: 100
            },
            email: {
                required: true,
                email: true,
                maxlength: 100
            },
            password: {
                required: true,
                maxlength: 100
            },
            confirm_password: {
                required: true,
                maxlength: 100,
                equalTo : "#password"
            },
        },
    });

    toastr.remove();
    
    if (expert_signup.valid() === false) {
        toastr.error(proceed_err);
        return false;
    }

    var _that = $(this),
        form = _that.closest('form'),
        formData = new FormData(form[0])
    console.log('kfkj',formData)
    $.ajax({
        type: "POST",
        url: "/userSignupValid",
        headers: { "device-id":"ffff",
            "device-token":"fsdgg",
            "device-type":3,
            timezone:"2002-12-12" },
        data: formData, //only input
        processData: false,
        contentType: false,
        dataType: "JSON",
        beforeSend: function () {
            // show_loader();
        },
        complete: function () {
            // hide_loader();
        },
        success: function (data, textStatus, jqXHR) {
            
            if (data.status == "success") {
                toastr.success("Signup successfully, redirecting....");
                window.setTimeout(function () {
                    window.location.href = '/profile';
                }, 1000);
            } else {
                toastr.error(data.msg);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error(jqXHR.responseJSON.message);

        }
    });
});

//expert signup

$("body").on("click", "#expertSignup1", function (e) {
    
    var expert_signup = $("#expert_signup1");
    expert_signup.validate({
        ignore: [],
        rules: {
            full_name: {
                required: true,
                maxlength: 100
            },
            email: {
                required: true,
                email: true,
                maxlength: 100
            },
            password: {
                required: true,
                maxlength: 100
            },
            confirm_password: {
                required: true,
                maxlength: 100,
                equalTo : "#password"
            },
        },
    });

    toastr.remove();
    
    if (expert_signup.valid() === false) {
        toastr.error(proceed_err);
        return false;
    }

    var _that = $(this),
        form = _that.closest('form'),
        formData = new FormData(form[0])
    console.log('kfkj',formData)
    $.ajax({
        type: "POST",
        url: "/userSignupValid",
        headers: { "device-id":"ffff",
            "device-token":"fsdgg",
            "device-type":3,
            timezone:"2002-12-12" },
        data: formData, //only input
        processData: false,
        contentType: false,
        dataType: "JSON",
        beforeSend: function () {
            // show_loader();
        },
        complete: function () {
            // hide_loader();
        },
        success: function (data, textStatus, jqXHR) {
            
            if (data.status == "success") {
                toastr.success("Signup successfully, redirecting....");
                window.setTimeout(function () {
                    window.location.href = '/profile';
                }, 1000);
            } else {
                toastr.error(data.msg);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error(jqXHR.responseJSON.message);

        }
    });
});

function scroll_to_class_study(element_class, removed_height) {
    var scroll_to = $(element_class).offset().top - removed_height;
    if($(window).scrollTop() != scroll_to) {
        $('.form-wizard').stop().animate({scrollTop: scroll_to}, 0);
    }
}

function bar_progress_study(progress_line_object, direction) {
    var number_of_steps = progress_line_object.data('number-of-steps');
    var now_value = progress_line_object.data('now-value');
    var new_value = 0;
    if(direction == 'right') {
        new_value = now_value + ( 100 / number_of_steps );
    }
    else if(direction == 'left') {
        new_value = now_value - ( 100 / number_of_steps );
    }
    progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

//signup school validation

$("body").on("click", "#experNext", function (e) {
    var user_signup = $("#expert_signup");
    user_signup.validate({
        ignore: [],
        rules: {
            full_name: {
                required: true,
                maxlength: 100
            },
            email: {
                required: true,
                email: true,
                maxlength: 100
            },
            password: {
                required: true,
                maxlength: 100
            },
            confirm_password: {
                required: true,
                maxlength: 100,
                equalTo : "#password_expert"
            },
            bio: {
                required: true,
            },
            dial_code: {
                required: true,
            },
            country_code: {
                required: true,
            },
            contact_number: {
                required: true,
            }
        },
    });

    toastr.remove();
    
    if (user_signup.valid() === false) {
        toastr.error(proceed_err);
        return false;
    }

    var _that = $(this),
        form = _that.closest('form'),
        formData = new FormData(form[0])

    $.ajax({
        type: "POST",
        url: "/signupValidation",
        headers: { "device-id":"ffff",
            "device-token":"fsdgg",
            "device-type":3,
            timezone:"2002-12-12" },
        data: formData, //only input
        processData: false,
        contentType: false,
        dataType: "JSON",
        beforeSend: function () {
            // show_loader();
        },
        complete: function () {
            // hide_loader();
        },
        success: function (data, textStatus, jqXHR) {
            
            if (data.status == "success") {
                console.log('first',data)
                var parent_fieldset = $(_that).parents('fieldset');
                var next_step = true;
                // navigation steps / progress steps
                var current_active_step = $(_that).parents('.form-wizard').find('.form-wizard-step.active');
                var progress_line = $(_that).parents('.form-wizard').find('.form-wizard-progress-line');
                console.log('second',current_active_step)
                
                // fields validation
                parent_fieldset.find('.required').each(function() {
                    if( $(_that).val() == "" ) {
                        $(_that).addClass('input-error');
                        next_step = false;
                    }
                    else {
                        $(_that).removeClass('input-error');
                    }
                });
                // fields validation
                console.log('third',parent_fieldset)
                if( next_step ) {
                console.log('fourth',next_step)

                    parent_fieldset.fadeOut(400, function() {
                        // change icons
                        console.log('fifth',current_active_step)

                        current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                        // progress bar
                        bar_progress_study(progress_line, 'right');
                        // show next step
                        $(this).next().fadeIn();
                        // scroll window to beginning of the form
                        console.log('sixth',current_active_step)
                        scroll_to_class_study( $('.form-wizard'), 20 );
                    });
                }
            } else {
                toastr.error(data.msg);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error(jqXHR.responseJSON.message);

        }
    });
});

//signup expert validation

$("body").on("click", "#experNext1", function (e) {
    var user_signup = $("#expert_signup1");
    user_signup.validate({
        ignore: [],
        rules: {
            full_name: {
                required: true,
                maxlength: 100
            },
            email: {
                required: true,
                email: true,
                maxlength: 100
            },
            password: {
                required: true,
                maxlength: 100
            },
            confirm_password: {
                required: true,
                maxlength: 100,
                equalTo : "#password_expert1"
            },
            bio: {
                required: true,
            },
            dial_code: {
                required: true,
            },
            country_code: {
                required: true,
            },
            contact_number: {
                required: true,
            }
        },
    });

    toastr.remove();
    
    if (user_signup.valid() === false) {
        toastr.error(proceed_err);
        return false;
    }

    var _that = $(this),
        form = _that.closest('form'),
        formData = new FormData(form[0])

    $.ajax({
        type: "POST",
        url: "/signupValidation",
        headers: { "device-id":"ffff",
            "device-token":"fsdgg",
            "device-type":3,
            timezone:"2002-12-12" },
        data: formData, //only input
        processData: false,
        contentType: false,
        dataType: "JSON",
        beforeSend: function () {
            // show_loader();
        },
        complete: function () {
            // hide_loader();
        },
        success: function (data, textStatus, jqXHR) {
            
            if (data.status == "success") {
                console.log('first',data)
                var parent_fieldset = $(_that).parents('fieldset');
                var next_step = true;
                // navigation steps / progress steps
                var current_active_step = $(_that).parents('.form-wizard').find('.form-wizard-step.active');
                var progress_line = $(_that).parents('.form-wizard').find('.form-wizard-progress-line');
                console.log('second',current_active_step)
                
                // fields validation
                parent_fieldset.find('.required').each(function() {
                    if( $(_that).val() == "" ) {
                        $(_that).addClass('input-error');
                        next_step = false;
                    }
                    else {
                        $(_that).removeClass('input-error');
                    }
                });
                // fields validation
                console.log('third',parent_fieldset)
                if( next_step ) {
                console.log('fourth',next_step)

                    parent_fieldset.fadeOut(400, function() {
                        // change icons
                        console.log('fifth',current_active_step)

                        current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                        // progress bar
                        bar_progress_study(progress_line, 'right');
                        // show next step
                        $(this).next().fadeIn();
                        // scroll window to beginning of the form
                        console.log('sixth',current_active_step)
                        scroll_to_class_study( $('.form-wizard'), 20 );
                    });
                }
            } else {
                toastr.error(data.msg);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error(jqXHR.responseJSON.message);

        }
    });
});



//logout
$("body").on("click", "#logout", function (e) {
    toastr.remove();
    var formData = {}
    $.ajax({
        type: "POST",
        url: "/logout",
        headers: { "device-id":"ffff",
            "device-token":"fsdgg",
            "device-type":3,
            timezone:"2002-12-12" },
        data: formData, //only input
        processData: false,
        contentType: false,
        dataType: "JSON",
        beforeSend: function () {
            // show_loader();
        },
        complete: function () {
            // hide_loader();
        },
        success: function (data, textStatus, jqXHR) {
            if (data.status == "success") {
                toastr.success("Logout in successfully, redirecting....");
                window.setTimeout(function () {
                    location.reload();
                }, 1000);
            } else {
                toastr.error(data.msg);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error(jqXHR.responseJSON.message);

        }
    });
});
 
function schoolCategory(event){
    var categoryId = event.target.value;
    var id = event.target.id;
    
    $(".selectCat").parent().css({"color": "red", "border": "2px solid red"});
    $.ajax({
        type: "POST",
        url: "/getSubcategory",
        data: {"categoryId":categoryId}, //only input
        // processData: false,
        // contentType: false,
        cache:false,
        dataType: "JSON",
        beforeSend: function () {
            // show_loader();
        },
        complete: function () {
            // hide_loader();
        },
        success: function (data, textStatus, jqXHR) {
            
            if (data.status == "success") { 
                var res = data.data;
                
                var html = '';
                    res.map((value)=>{
                        html+=`<option value="`+value.categoryID+`">`+value.name+`</option>`
                    })
                   console.log(html);
                // $("#"+id).parent().next().remove()   
                // $("#"+id).parent().next().children().hasClass('bootMultiselect').html(html)
                console.log($("#"+id).parent().next().find('.bootMultiselect').html(html))

            } else {
                toastr.error(data.msg);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            toastr.error(jqXHR.responseJSON.message);

        }
    });
};
var n = 1;
function addCatBlock(event){
    var id = event.target.id;
    var html = `<div class="catBox">
    <div class="form-group">
         <label class="inputLabel">Category</label>
          <select class="form-control ">
            <option>Select Category</option>
            <option value="AK">Canada immigration</option>
            <option value="HI">UK immigration</option>
            <option value="HI">etc</option>
        </select>
    </div>
    <div class="form-group">
         <label class="inputLabel">Sub Category</label>
          <select class="form-control bootMultiselect" multiple="multiple">
            <!-- <option>Select Sub Category</option> -->
            <option value="AK">Canada immigration</option>
            <option value="HI">UK immigration</option>
            <option value="HI">etc</option>
        </select>
    </div>
    <div class="catRemove">
        <a href="javascript:void(0)" class="removeCat" id="removeCat" onclick="removeCatBlock(event)">Remove</a>
    </div>
</div>`
    console.log($("#"+id).parent().prev().append(html))
}

function addCatBlockExpert(event){
    var id = event.target.id;
    var html = `<div class="catBox">
    <div class="form-group">
         <label class="inputLabel">Category</label>
          <select class="form-control ">
            <option>Select Category</option>
            <option value="AK">Canada immigration</option>
            <option value="HI">UK immigration</option>
            <option value="HI">etc</option>
        </select>
    </div>
    <div class="form-group">
         <label class="inputLabel">Sub Category</label>
          <select class="form-control bootMultiselect" multiple="multiple">
            <!-- <option>Select Sub Category</option> -->
            <option value="AK">Canada immigration</option>
            <option value="HI">UK immigration</option>
            <option value="HI">etc</option>
        </select>
    </div>
    <div class="catRemove">
        <a href="javascript:void(0)" class="removeCat" id="removeCatExpert" onclick="removeCatBlock(event)">Remove</a>
    </div>
</div>`
    console.log($("#"+id).parent().prev().append(html))
}

function removeCatBlock(event){
    var id = event.target.id;
    console.log($("#"+id).parent().parent().remove())
}