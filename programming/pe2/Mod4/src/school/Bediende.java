package school;

public class Bediende extends Personeelslid {
    public Bediende(String voornaam, String achternaam, String email, Adres adres, Lokaal lokaal) {
        super(voornaam, achternaam, email, adres, lokaal);
    }

    public void addStudentToLijst(StudentenLijst studentenLijst, String student) {
        studentenLijst.internalAddStudent(student);
    }

    public void removeStudentFromLijst(StudentenLijst studentenLijst, String student) {
        studentenLijst.internalRemoveStudent(student);
    }
}
