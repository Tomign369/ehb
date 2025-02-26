//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

public class Cirkel {
    public String kleur;
    public double straal;

    public Cirkel() {
        this.kleur = "Wit";
        this.straal = (double)0.0F;
    }

    public Cirkel(String kleur) {
        this.straal = (double)0.0F;
        this.kleur = kleur;
    }

    public Cirkel(double straal) {
        this.straal = straal;
        this.kleur = "wit";
    }

    public Cirkel(String kleur, double straal) {
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
        return this.kleur;
    }

    public double getStraal() {
        return this.straal;
    }

    public void printCirkel() {
        System.out.println("kleur: " + this.straal);
        System.out.println("straal: " + this.straal);
    }

    public double berekenOmtrek() {
        return (Math.PI * 2D) * this.straal;
    }

    public double berekenOppervlakte() {
        return this.straal * this.straal * Math.PI;
    }
}

