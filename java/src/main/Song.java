package main;

public class Song {
    private String title;
    private String Artist;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArtist() {
        return Artist;
    }

    public void setArtist(String artist) {
        Artist = artist;
    }
    public void play(Song a){
        a.setTitle("hahah");
        System.out.println(title+" "+Artist);
    }
}
