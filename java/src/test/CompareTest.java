package test;
import main.Dog;


public class CompareTest {
    public static void main (String[] args){
         int a =1,b=1;
         if(a==b){
             System.out.println("a=b");
         }
         String c="danhuang",d="danhuang";
         if(c==d){
             System.out.println("c=d");
         }
         Dog benben=new Dog();
         benben.setName("benben");
         benben.setAge(18);
         Dog dahuang=new Dog();
         dahuang.setName("benben");
         dahuang.setAge(18);
         if(benben.getName().equals(dahuang.getName())){
             System.out.println("benben=dahuang");
         }
         String e= new String("hah"),f="hah";
         if(e==f){
             System.out.println("e=f");
         }
         if(e.equals(f)){
             System.out.println("benben.equals(dahuang)");
         }

    }

}
