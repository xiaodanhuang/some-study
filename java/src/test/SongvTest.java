package test;
import main.Song;
public class SongvTest {
   public static void main(String[] args){
       Song song1= new Song();
       song1.play(song1);
       song1.setTitle("who am i");
       song1.setArtist("zico");
       song1.play(song1);
       System.out.println(song1.getTitle());
   }


}
