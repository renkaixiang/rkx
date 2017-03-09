
$(function() {
	var arr=0;
	var brr=10;
	$.ajax({
		type: "post",
		url: "http://192.168.1.105/studentAddmin/student_list.php",
		async: true,
		data: {},
		dataType: 'jsonp',
		jsonp: 'callback',
		jsonpCallback: "success_jsonpCallback",
		success: function(data) {
			//debugger;//断点
			for(var i = arr; i < brr; i++) {
				var html = ''
				html = '<ul class="ul">' + '<li>' + data[i].student_id + '</li>' + '<li>' + data[i].phone + '</li>' + '<li>' + data[i].class + '</li>' + '<li>' + data[i].chinese_score + '</li>' + '<li>' + data[i].math_score + '</li>' + '<li>' + data[i].english_score + '</li>' + '</ul>';
				$(".libiao").append(html);
				
			}
			$(".bottom").click(function(){
				
				
				
				if (brr>=data.length) {
					brr=data.length;
				}else{
					arr+=10;
					brr+=10;
				}
				$(".ul").remove()	
				for(var i = arr; i < brr; i++) {
				var html = ''
				html = '<ul class="ul">' + '<li>' + data[i].student_id + '</li>' + '<li>' + data[i].phone + '</li>' + '<li>' + data[i].class + '</li>' + '<li>' + data[i].chinese_score + '</li>' + '<li>' + data[i].math_score + '</li>' + '<li>' + data[i].english_score + '</li>' + '</ul>';
			$(".libiao").append(html);	
			
				}
				
			})
			$(".top").click(function(){
				
				arr-=10;
				brr-=10;
				if (brr<=0) {
					brr=10;
					arr=0;
					return;
				}
				$(".ul").remove()
				for(var i = arr; i < brr; i++) {
				var html = ''
				html = '<ul class="ul">' + '<li>' + data[i].student_id + '</li>' + '<li>' + data[i].phone + '</li>' + '<li>' + data[i].class + '</li>' + '<li>' + data[i].chinese_score + '</li>' + '<li>' + data[i].math_score + '</li>' + '<li>' + data[i].english_score + '</li>' + '</ul>';
				$(".libiao").append(html);
				
				}
			})
		},
		error: function(d) {

		}
	});

})

$(function() {

		$(".button-2").click(function() {
			var sjh = $("#sousuo").val();
			$.ajax({
				type: "post",
				url: "http://192.168.1.105/studentAddmin/student_search.php",
				async: true,
				data: {
					"phone": $("#sousuo").val()
				},
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback: "success_jsonpCallback",
				success: function(data) {
					if(sjh == "") {
						return
					} else {
						$('.ul').remove();
						for(var i = 0; i < data.length; i++) {
							var html = ''
							html = '<ul class="ul">' + '<li>' + data[i].student_id + '</li>' + '<li>' + data[i].phone + '</li>' + '<li>' + data[i].class + '</li>' + '<li>' + data[i].chinese_score + '</li>' + '<li>' + data[i].math_score + '</li>' + '<li>' + data[i].english_score + '</li>' + '</ul>';

							$(".libiao").append(html)
						}
						$("#sousuo").val() = ""
					}
				}

			});
		})
	})
	//添加
$(function() {

	$(".button").click(function() {

		$.ajax({
			type: "post",
			url: "http://192.168.1.105/studentAddmin/student_add.php",
			async: true,
			data: {
				"phone": $("#dhh").val(),
				"class": $("#bj").val(),
				"chinese_score": $("#ywcj").val(),
				"math_score": $("#sxcj").val(),
				"english_score": $("#yycj").val()
			},
			dataType: 'jsonp',
			jsonp: 'callback',
			jsonpCallback: "success_jsonpCallback",
			success: function(data) {
				//debugger
				if (data.msg="seccess") {
					$(".kuang").css("display","block")
					$(".kuang").children().html("添加成功")
				} else{
					$(".kuang").css("display","block")
					$(".kuang").children().html("添加失败")
				}
				$("body").click(function(){
					window.location.href="index.html"
				})
			}

		});
	}) 
	
})