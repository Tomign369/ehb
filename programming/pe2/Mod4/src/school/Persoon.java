package school;

public class Persoon {
    private String voornaam;
    private String achternaam;
    private String email;
    private Adres adres;

    public Persoon(String Voornaam, String Achternaam, String Email, Adres adres){
        this.voornaam = Voornaam;
        this.achternaam = Achternaam;
        this.email = Email;
        this.adres = adres;
    }

    //getters
    public String getVoornaam() {
        return voornaam;
    }

    public String getAchternaam() {
        return achternaam;
    }

    public String getEmail() {
        return email;
    }

    public Adres getAdres() {
        return adres;
    }

    //setters

    public void setVoornaam(String voornaam) {
        voornaam = voornaam;
    }

    public void setAchternaam(String achternaam) {
        achternaam = achternaam;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAdres(Adres adres) {
        this.adres = adres;
    }

    @Override
    public String toString(){
        return voornaam + " " + achternaam +
                (email != null && !email.isEmpty() ? " " + email : "") +
                (adres != null ? " " + adres.toString() : "").trim();

    }
}
