$("document").ready(function(){
  getData();
});
function getData(){
  $.get("data.txt", successFn);
}
function successFn(result){
  consol.log("resultados");
  $("#ajaxContent").append (result)
}
function errorFn(xhr, status, strErr){
  consol.log("error");
};
