public class Auto {
    private double brandstofTank;
    private double kilometerTeller;
    private double verbruik; // verbruik in liters per kilometer

    public Auto() {
        this(0.0, 0.0, 0.0);
    }

    public Auto(double brandstofTank, double kilometerTeller, double verbruik) {
        this.brandstofTank = brandstofTank;
        this.kilometerTeller = kilometerTeller;
        this.verbruik = verbruik;
    }

    // Method om de tank te vullen
    public void vulTank() {
        this.brandstofTank = 50.0;
    }

    // Methode om het aantal afgelegde kilometers te berekenen
    public double aantalKM(double afstand) {
        afstand = Math.abs(afstand);
        // Eerst berekenen we wat de mogelijke afstand is
        double mogelijkeAfstand = this.brandstofTank / this.verbruik;

        if (afstand > mogelijkeAfstand) {
            this.kilometerTeller += mogelijkeAfstand;
            this.brandstofTank = 0.0;
            return mogelijkeAfstand;
        } else {
            this.kilometerTeller += afstand;
            this.brandstofTank -= afstand * this.verbruik;
            return afstand;
        }
    }

    // Getters
    public double getBrandstofTank() {
        return brandstofTank;
    }

    public double getKilometerTeller() {
        return kilometerTeller;
    }

    public double getVerbruik() {
        return verbruik;
    }

    // Setters
    public void setBrandstofTank(double brandstofTank) {
        this.brandstofTank = brandstofTank;
    }

    public void setKilometerTeller(double kilometerTeller) {
        this.kilometerTeller = kilometerTeller;
    }

    public void setVerbruik(double verbruik) {
        this.verbruik = verbruik;
    }
}
