/* var names = ["Aravind", "Surya", "Chandra", "Yeshwanth", "Prashanth", "Shivaji"]
var marks = [
    [100, 95, 85],
    [90, 95, 85],
    [80, 90, 70],
    [90, 70, 75],
    [50, 60, 70],
    [70, 50, 60],
] */

var names=[]
var marks=[]

function readData(){
    names[names.length] = student.value;
    marks[marks.length] = [maths.value, physics.value, chemistry.value];
}

function formTable(data1, data2) {
    if (data1[0] == undefined) return false;

    var nodeRow = document.createElement('tr')

    function ftd(text) {
        var nodeData = document.createElement('td')
        var textNode = document.createTextNode(text);
        nodeData.appendChild(textNode)
        return nodeData
    }
    rowHead = ftd(data1.pop());
    console.log(names)
    nodeRow.appendChild(rowHead);

    for (var i of data2.pop()) {
        nodeRow.appendChild(ftd(i))
    }
    studentMarks.appendChild(nodeRow)

    return formTable(data1, data2)

}
function cleanData(){
    student.value='';
    maths.value='';
    physics.value='';
    chemistry.value='';

}

function sub(){
    readData();
    formTable(names, marks);
    cleanData();
}
