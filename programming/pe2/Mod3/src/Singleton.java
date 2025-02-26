public class Singleton {
    // Private static variable to hold the single instance
    private static Singleton singleInstance = null;

    // Private constructor to prevent instantiation
    private Singleton() {
        // Print a message indicating the creation of the instance
        System.out.println("Singleton instance created.");
    }

    // Public static method to get the single instance of the class
    public static Singleton getInstance() {
        // If the single instance is null, create a new instance
        if (singleInstance == null) {
            singleInstance = new Singleton();
        }
        // Return the single instance
        return singleInstance;
    }
