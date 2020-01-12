/*
  常用的数据类型
 */
main(){

  //string类型
  String str1='hello';
  var str2='world';
  print("$str1 $str2");

  //number类型 int double
  int number1=1;
  double number2=2;
  double number3=number2-number1;
  print("$number1 $number2");

  //bool类型
  bool flag=true;
  print(flag);

  //list类型
  var arr1=[1,2,3];
  var arr2=new List();
  var arr3=new List<String>();
  arr2.add("张三");
  arr2.add(1);
  arr3.add("张三");
  arr3.add("李四");
  print(arr1);
  print(arr2);

  //map类型
  var map1={
    "name":"danhuang",
    "age":20
  };
  var map2=new Map();
  map2["name"]='李四';

  //is类型判断
  if(map1 is String){
    print("string");
  }else{
    print("another");
  }

}