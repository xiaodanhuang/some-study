package main;

public class Animal {
    private String name;
    private String pic;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }
    public void sleep(){
        System.out.println("lay down");
    }

}
