studentarray=[]
function submit(){
    var student1=document.getElementById("input1").value
    var student2=document.getElementById("input2").value
    var student3=document.getElementById("input3").value
    var student4=document.getElementById("input4").value
    studentarray.push(student1)
    studentarray.push(student2)
    studentarray.push(student3)
    studentarray.push(student4)
    document.getElementById("output").innerHTML=studentarray
    document.getElementById("submitbutton").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sort() {
    studentarray.sort();
    document.getElementById("output").innerHTML=studentarray;
}