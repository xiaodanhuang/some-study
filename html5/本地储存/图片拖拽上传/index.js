var dropBox;
window.onload=function(){
 dropBox=document.getElementById('dropbox');
 dropBox.ondragenter=ignoreDrag;
 dropBox.ondragover=ignoreDrag;
 dropBox.ondrop=drop;

}
function ignoreDrag(e) {
    e.stopPropagation();
    e.preventDefault();
}
function drop(e){
    e.stopPropagation();
    e.preventDefault();
    var files = e.dataTransfer.files;
    processFile(files);
}
function processFile(files){
 var file=files[0];
 var reader=new FileReader();
 reader.onload=function(){
     console.log(this.result);
  dropBox.style.backgroundImage="url('"+this.result+"')";
 };
 reader.readAsDataURL(file);
}