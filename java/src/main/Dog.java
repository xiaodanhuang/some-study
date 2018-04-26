package main;
import main.Animal;

public class Dog extends  Animal  {
    private int age;
    private String name;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void bark(){
        System.out.print("bark bark");
    }
    public void sleep(){
        System.out.println("I wanna sleep");
    }
}
