package test;
import main.Dog;

public class DogTest {
    public static void main(String[] args){
        Dog dog=new Dog();
        dog.setName("wangwang");
        System.out.println(dog.getName());
        dog.bark();
    }
}
