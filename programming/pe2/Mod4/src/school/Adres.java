package school;

public class Adres {
    private String straatnaam;
    private int huisnummer;
    private String bus;
    private int postcode;
    private String woonplaats;

    public Adres(){
        this.straatnaam = "";
        this.huisnummer = 0;
        this.bus = "";
        this.postcode = 0;
        this.woonplaats = "";
    }

    public Adres(String straatnaam, int huisnummer, String bus, int postcode, String woonplaats){
        this.straatnaam = straatnaam;
        this.huisnummer = huisnummer;
        this.bus = bus;
        this.postcode = postcode;
        this.woonplaats = woonplaats;
    }

    public void setStraatnaam(String straatnaam) {
        this.straatnaam = straatnaam;
    }

    public String getStraatnaam() {
        return straatnaam;
    }

    public void setHuisnummer(int huisnummer) {
        this.huisnummer = huisnummer;
    }

    public int getHuisnummer() {
        return huisnummer;
    }

    public void setBus(String bus) {
        this.bus = bus;
    }

    public String getBus() {
        return bus;
    }

    public void setPostcode(int postcode) {
        if (Integer.toString(postcode).length() != 4) {
            this.postcode = 9999;
        }else {
            this.postcode = postcode;
        }
    }

    public int getPostcode() {
        return postcode;
    }

    public void setWoonplaats(String woonplaats) {
        this.woonplaats = woonplaats;
    }

    public String getWoonplaats() {
        return woonplaats;
    }

    @Override
    public String toString(){
        return straatnaam + " " + huisnummer +
                (bus != null && !bus.isEmpty() ? " " + bus : "") +
                ", " + postcode + " " + woonplaats;

    }
}
