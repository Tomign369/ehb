public class Zwembad extends Cirkel {
    private Cirkel reservoir;
    private Cirkel pad;
    private double prijsPad;
    private double prijsOmheining;

    //constructors
    public Zwembad(double straalZwembad, double breedtePad, double prijsPad, double prijsOmheining) {
        this.reservoir = new Cirkel(straalZwembad);
        this.pad = new Cirkel(breedtePad);
        this.prijsPad = prijsPad;
        this.prijsOmheining = prijsOmheining;
    }

    //methods
    //bereken prijs pad
    public double berekenPrijsPad(){
        double oppervlatePad = pad.berekenOppervlakte() - reservoir.berekenOppervlakte();
        return oppervlatePad * prijsPad;
    }

    //bereken prijs omheining
    public double berekenPrijsOmheining(){
        double omtrekOmheining = pad.berekenOmtrek();
        return omtrekOmheining * prijsOmheining;
    }

    //bereken totale prijs
    public double berekenTotalePrijs(){
        return berekenPrijsPad() + berekenPrijsOmheining();
    }

    //Getters

    public Cirkel getReservoir() {
        return reservoir;
    }
    public Cirkel getPad() {
        return pad;
    }
    public double getPrijsPad() {
        return prijsPad;
    }
}


