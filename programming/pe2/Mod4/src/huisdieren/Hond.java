package huisdieren;

public class Hond extends Huisdier {
    private String stamboom;

    public Hond(int leeftijd, String naam, int gewicht, String stamboom) {
        super(leeftijd, naam, gewicht);
        this.stamboom = stamboom;
    }

    //getters
    public String getStamboom(){
        return stamboom;
    }
    //setters
    public void setStamboom(String stamboom){
        this.stamboom = stamboom;
    }

    @Override
    public String toString(){
        return "Hond: " + super.toString() + ", stamboom: " + stamboom;
    }
}