public class Adres {
    String straatnaam;
    int huisnummer;
    String bus;
    int postcode;
    String woonplaats;

    public Adres(){
        this.straatnaam = null;
        this.huisnummer = 0;
        this.bus = null;
        this.postcode = 0;
        this.woonplaats = null;
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

    public class PrintAdres {
        public void print() {
            System.out.println("Straatnaam: " + Adres.this.straatnaam);
            System.out.println("Huisnummer: " + Adres.this.huisnummer);
            System.out.println("Bus: " + Adres.this.bus);
            System.out.println("Postcode: " + Adres.this.postcode);
            System.out.println("Woonplaats: " + Adres.this.woonplaats);
        }
    }
}
