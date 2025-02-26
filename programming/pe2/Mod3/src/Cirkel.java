public class Cirkel {
    public String kleur;
    public double straal;

    public Cirkel(){
        this.kleur = "Wit";
        this.straal = 0;
    }

    public Cirkel(String kleur) {
        this.straal = 0;
        this.kleur = kleur;
    }

    public Cirkel(double straal){
        this.straal = straal;
        this.kleur = "wit";
    }

    public Cirkel(String kleur, double straal){
        this.straal = straal;
        this.kleur = kleur;
    }

    public void setKleur(String kleur) {
        this.kleur = kleur;
    }

    public void setStraal(double straal) {
        this.straal = straal;
    }

    public String getKleur() {
        return kleur;
    }

    public double getStraal() {
        return straal;
    }

    public void printCirkel() {
        System.out.println("kleur: " + this.straal);
        System.out.println("straal: " + this.straal);
    }

    public double geefOmtrek(){
        return 2 * Math.PI * this.straal;
    }

    public double geefOppervlakte(){
        return this.straal * this.straal * Math.PI;
    }

}