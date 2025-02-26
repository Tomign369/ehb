package school;

public class Student extends Persoon {
    private int studentNummer;
    private String specialisatie;

    public Student(String voornaam,
                   String achternaam,
                   String email,
                   Adres adres,
                   int studentNummer,
                   String specialisatie)

    {
    super(voornaam, achternaam, email, adres);
    this.studentNummer = studentNummer;
    this.specialisatie = specialisatie;
    }

    public int getStudentNummer(){
        return studentNummer;
    }
    public String getSpecialisatie(){
        return specialisatie;
    }

    public void setSpecialisatie(String specialisatie) {
        this.specialisatie = specialisatie;
    }
    public void setStudentNummer(int studentNummer){
        this.studentNummer = studentNummer;
    }

    @Override
    public String toString(){
        return super.toString() +
                "StudentNummer: " + studentNummer + "," +
                " specialisatie= " + specialisatie;
    }
}
