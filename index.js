// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
function  IsArray( param) {
    if (param instanceof  Array){
        console.log("这是数组！");
    }
}

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
function multiplyByTwo(arr) {
     arr = arr.map(function (a) {
         return a*2;
     })
    return arr;
}

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
// TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
function  outputString(arr) {
    var arr1 = arr.join(' ');
    var arr2 = arr.join('+');
    var arr3 = arr.join(',');
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
}

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function sortArrayDesc(arr) {
    var num = 0;
    for (var i = 0;i<arr.length;i++){
        for (var j = 0;j<arr.length-i;j++){
            if (arr[j]<arr[j+1]){
                num=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=num;
            }
        }
    }
    return arr;
}

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function  getMaxCountOfChar(arr) {
    let obj = {};
    for (let i in arr){
             if (obj[arr[i]]){
                 obj[arr[i]]++;
             }else{
                 obj[arr[i]]=1;
             }
    }
    let keyArray = Object.keys(obj);
    let valueArray= Object.values(obj); // 获取所有value返回数组
    let maxVal = Math.max.apply(Math,valueArray);//最大频率值
    console.log(keyArray[valueArray.indexOf(maxVal)]+":"+maxVal);
}