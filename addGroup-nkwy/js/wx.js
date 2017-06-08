//长按微信或者二维码

//$(function(){
//
//	$("#aa").on({
//
//		touchstart: function(e){
//
//			timeOutEvent = setTimeout("longPresstj()",500);
//
//		}
//
//	})
//
//});



function longPress(obj,LinkId){ 
	obj.on({
		touchstart: function(e){
			timeOutEvent = setTimeout("presstj("+LinkId+")",500);
			
		},
		touchmove: function(){  
                    clearTimeout(timeOutEvent);   
                timeOutEvent = 0;   
        },
		touchend: function(){  
            clearTimeout(timeOutEvent);    
            return false;   
        }  
	})
}

function presstj(LinkId){
	var params = { "LinkId": LinkId, "LinkName": "Index", "LinkURL": window.location.href, "PageUrl": "" };
    var url = "http://sasinterface.songyutech.com/Spread/SpreadInsertSq";
	$.ajax({
            url: url,
            type: "get",
            data: params,
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "JsonCallback",
            success: function(data) {
                
            },
            error: function(data) {
                
            }
        });
}

 function longPressByOCPC(obj,LinkId,convert_id){ 
	obj.on({
		touchstart: function(e){
			timeOutEvent = setTimeout("longPresstjByOCPC("+LinkId+","+convert_id+")",500);
			
		},
		touchmove: function(){  
                    clearTimeout(timeOutEvent);   
                timeOutEvent = 0;   
        },
		touchend: function(){  
            clearTimeout(timeOutEvent);    
            return false;   
        }  
	})
}

function longPresstjByOCPC(LinkId,convert_id){
	presstj(LinkId);
	_taq.push({convert_id:convert_id, event_type:"button"})	
}

function getWXInfo(wxNumObj,wxQRCodeUrlObj,LinkId)
{
	var params = { "LinkId": LinkId};
    var url = "http://tginterface.songyutech.com/stif/getwxinfo";
	//var url = "http://localhost:10790/stif/getwxinfo";
	
	$.ajax({
            url: url,
            type: "get",
            data: params,
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "JsonCallback",
            success: function(data) {
                if(data.Code==0 && data.Obj!=null){
					
					wxNumObj.text(data.Obj.WXNum);
					wxQRCodeUrlObj.attr("src",data.Obj.WXQRCodeUrl);
				}

            },
            error: function(data) {
                
            }
        });
}