public class Car {
    private String make;
    private String model;
    private int year;

    public Car(String make, String model, int year) {
        this.make = (make == null || make.isEmpty()) ? "Unkown Make" : make;
        this.model = (model == null || model.isEmpty()) ? "Unkown Model" : model;
        this.year = (year < 0) ? 2000 : year;
    }

    //getters

    public int getYear() {
        return year;
    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    //setters

    public void setYear(int year) {
        this.year = year;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public void setModel(String model) {
        this.model = model;
    }
}