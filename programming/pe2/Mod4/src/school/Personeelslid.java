package school;

public class Personeelslid extends Persoon{
    private Lokaal lokaal;

    public Personeelslid(String voornaam, String achternaam, String Email, Adres adres, Lokaal lokaal) {
        super(voornaam, achternaam, Email, adres);
        this.lokaal = lokaal;

    }

    public void setLokaal(Lokaal lokaal) {
        this.lokaal = lokaal;
    }
    public Lokaal getLokaal() {
        return lokaal;
    }

    @Override
    public String toString() {
        return super.toString() +
        "lokaal: " + this.lokaal;
        }
}
