package school;

import java.util.ArrayList;

public class StudentenLijst {
    private ArrayList<String> studenten;

    public StudentenLijst() {
        studenten = new ArrayList<>();
    }

    public void internalAddStudent(String student) {
        if (!studenten.contains(student)) {
            studenten.add(student);
        }else{
            throw new IllegalArgumentException("Student " + student + " already exists");
        }
    }

    void internalRemoveStudent(String student) {
        if (studenten.contains(student)) {
            studenten.remove(student);
        } else {
            throw new IllegalArgumentException("Student " + student + " does not exist");
        }
    }

    public ArrayList<String> getStudenten(){
        return new ArrayList<>(studenten);
    }

    @Override
    public String toString() {
        return "Studentenlijst: " + studenten;
    }
}
