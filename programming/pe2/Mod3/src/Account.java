public class Account {
    private float balance;
    private String accountNumber;

    public Account(String accountNumber, float balance) {
        if (accountNumber != null && !accountNumber.isEmpty()) {
            this.accountNumber = accountNumber;
        } else {
            System.err.println("Invalid");
            return;
        }

        if (balance >= 0) {
            this.balance = balance;
        } else {
            System.err.println("balance can not be negative");
            return;
        }
    }

    // Getters
    public String getAccountNumber() {
        return accountNumber;
    }

    public double getBalance() {
        return balance;
    }
}