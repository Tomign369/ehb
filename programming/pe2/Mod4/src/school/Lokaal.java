package school;

public class Lokaal extends Adres {
    private String gebouw;
    private int verdieping;
    private int lokaalnr;

    public Lokaal(String gebouw, int verdieping, int lokaalnr,
                  String straatnaam, int huisnummer, String bus, int postcode,
                  String woonplaats){
        super(straatnaam, huisnummer, bus, postcode, woonplaats);
        this.gebouw = gebouw;
        this.verdieping = verdieping;
        this.lokaalnr = lokaalnr;
    }

    public void setGebouw(String gebouw) {
        this.gebouw = gebouw;
    }

    public void setLokaalnr(int lokaalnr) {
        this.lokaalnr = lokaalnr;
    }

    public void setVerdieping(int verdieping) {
        this.verdieping = verdieping;
    }

    public int getLokaalnr() {
        return lokaalnr;
    }

    public String getGebouw() {
        return gebouw;
    }

    public int getVerdieping() {
        return verdieping;
    }

    @Override
    public String toString() {
        return super.toString() +
                "gebouw: " + gebouw +
                "lokaal: " + lokaalnr +
                " verdieping: " + verdieping;
    }
}
