package huisdieren;

public class Huisdier {
    private String naam;
    private int leeftijd;
    private int gewicht;



    public Huisdier(int leeftijd, String naam, int gewicht) {
        this.leeftijd = leeftijd;
        this.naam = naam;
        this.gewicht = gewicht;
    }

    //getters

    public String getNaam() {
        return naam;
    }
    public String getGewicht() {
        return naam;
    }

    public int getLeeftijd() {
        return leeftijd;
    }

    //setters

    public void setLeeftijd(int leeftijd) {
        this.leeftijd = leeftijd;
    }
    public void setNaam(String naam) {
        this.naam = naam;
    }
    public void setGewicht(int gewicht) {
        this.gewicht = gewicht;

    }

    @Override
    public String toString() {
        return "leeftijd: " + leeftijd + ", naam: " + naam + ", gewicht: " + gewicht +"kg";
    }
}