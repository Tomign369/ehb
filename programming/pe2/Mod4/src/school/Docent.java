package school;

public class Docent extends Personeelslid {
    private Specialisatie specialisatie;

    public Docent(String voornaam, String achternaam, String email,
                  Adres adres, Lokaal lokaal, Specialisatie specialisatie) {
        super(voornaam, achternaam, email, adres, lokaal);
        this.specialisatie = specialisatie;
    }

    public Specialisatie getSpecialisatie(){
        return specialisatie;
    }
    public void setSpecialisatie(Specialisatie specialisatie){
        this.specialisatie = specialisatie;
    }

    @Override
    public String toString() {
        return super.toString() + "Docent specialisatie=" + specialisatie;
    }
}
