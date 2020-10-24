import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

public class CreateDir {

    //command: fp-new-project

    static String projName;
    static String dir;

    public static void main(final String[] args) throws IOException {

        getDir();
        getName();
        createFolder();
    }

    public static void createFolder() throws IOException {

        File theDir = new File(dir + "\\" + projName);

        File src = new File(dir + "\\" + projName + "\\src");

        File app = new File(dir + "\\" + projName + "\\src\\app");

        File assets = new File(dir + "\\" + projName + "\\src\\assets");

        System.out.println("Creating directory: " + projName);
        boolean result = false;

        try {
            theDir.mkdir();
            src.mkdir();
            app.mkdir();
            assets.mkdir();
            result = true;
        } catch (final SecurityException se) {
            // handle it
        }
        if (result) {
            System.out.println("DIR created");
        }

    }

    public static void getName() throws IOException {

        File theDir;
        BufferedReader reader =  new BufferedReader(new InputStreamReader(System.in)); 
 
        do { 
        
            System.out.println("Select name: ");
            projName = reader.readLine();
            
            theDir = new File(dir + "\\" + projName);

            if (theDir.exists()) {
                System.out.println("This file already exists. Try another name."); 
            }
        
        } while (theDir.exists());
    }

    public static void getDir() {

        dir = System.getProperty("user.dir");
        
    }
}
