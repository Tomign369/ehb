public class Student {

        int studentId;
        String studentName;
        String grade;


    public Student() {
        this(0, "unknown", "unknown");
    }

    public Student(int studentId, String studentName, String grade) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.grade = grade;
    }

    public void printStudent(){
        System.out.println(this.studentId);
        System.out.println(this.studentName);
        System.out.println(this.grade);
    }

}