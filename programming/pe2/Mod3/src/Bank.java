public class Bank {
    private double saldo;

    public Bank(){
        this.saldo = 0;
    }

    public Bank(double invoerSaldo){
        if(invoerSaldo < 0){
            this.saldo = 0;
        }else{
            this.saldo = invoerSaldo;
        }
    }

    private void setSaldo(double Saldo) {
        this.saldo = saldo;
    }

    public double getSaldo() {
        return this.saldo;
    }

    public void storten(double geldStorten) {
        this.saldo += geldStorten;
    }

    public double afhalen(double geldAfhalen) {
        if((this.saldo - geldAfhalen) < -1000) {
            System.out.println("Afhaallimiet bereikt, Saldo ontoereikend.");
            return this.saldo;
        }
        this.saldo -= geldAfhalen;
        return this.saldo;
    }
}
