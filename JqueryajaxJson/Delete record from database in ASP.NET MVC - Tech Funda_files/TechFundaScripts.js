
function GetSubCatPosts(catId,catSubId,catgry,catSNo)
{if($("#h5"+ catSNo).attr("data-renderSubCat").toString()=="true")
{var reOrder=$("#h5"+ catSNo).attr("data-ReOrder").toLowerCase();$("#tsc"+ catSNo).html('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate tocExpanderS"></span>');$.ajax({type:"POST",url:"/Home/_GetTOCContent",data:{catId:catId,catSubId:catSubId,category:catgry,subCatNumber:catSNo,ReOrder:reOrder},async:true,success:function(data){$("#h5"+ catSNo).after(data);$("#tsc"+ catSNo).html('<span class="glyphicon glyphicon-minus tocExpanderS"></span>');$("#h5"+ catSNo).attr("data-renderSubCat",'false');if(parentPostId.length>0&&parseInt(parentPostId)>0)
{$("#tcp"+ parentPostId).addClass("selectedTocPost");}}});}
else
{ShowSubCatPosts(catSNo,reOrder);}}
function ShowSubCatPosts(scno,t)
{if($("#tsc"+ scno).html()=='<span class="glyphicon glyphicon-plus tocExpanderS"></span>')
{ShowBlock(scno);}else{HideBlock(scno);}}
function ShowBlock(scno){$("#tsc"+ scno).html('<span class="glyphicon glyphicon-minus tocExpanderS"></span>');$("#scatP"+ scno).slideDown();}
function HideBlock(scno){$("#tsc"+ scno).html('<span class="glyphicon glyphicon-plus tocExpanderS"></span>');$("#scatP"+ scno).slideUp();}
function SearchCatPosts(catPmtr){$("#imgWaitCS").show();var searchPostKey=$("#qp").val();$.post("/Home/GetPostsOfCategory/"+ catPmtr+"?q="+ searchPostKey,"",function(data){var output=$("#divTOCForCat");output.empty();$("#lblCnt").text(data.length+" post(s) found.");for(var i=0;i<data.length;i++){var post=data[i];output.append('<li>'+ post.PostLink+"</li>");}
if(searchPostKey.length>0)
{$("#h4TList").html("Search result for: "+ searchPostKey);}
$("#imgWaitCS").hide();});return false;}
function ShowSearchCatPosts(){$("#divCatSearchP").slideToggle();$("#qp").focus();$('html, body').animate({scrollTop:$("#divCatSearchP").offset().top- 200},1000);}