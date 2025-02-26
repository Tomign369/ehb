package school;

public class Main {
    public static void main(String[] args) {
        Adres adresTom = new Adres("Kerkstraat", 7, "B402", 2000, "Maaseik");
        Specialisatie specialisatieTom = new Specialisatie();
        specialisatieTom.addSpecialisatie("Wiskunde");
        Student studentTom = new Student("tom", "Ignoul", "tom@email.com", adresTom, 1234, specialisatieTom);

        // Print the student details to check
        System.out.println(studentTom);
    }
}

