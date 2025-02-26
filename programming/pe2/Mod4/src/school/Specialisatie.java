package school;
import java.util.ArrayList;
import java.util.List;

public class Specialisatie {
    private List<String> specialisaties;

    public Specialisatie() {
        this.specialisaties = new ArrayList<>();
        specialisaties.add("Wiskunde");
        specialisaties.add("Informatica");
        specialisaties.add("Natuurkunde");
        specialisaties.add("Scheikunde");
        specialisaties.add("Biologie");
        specialisaties.add("Talen");
        specialisaties.add("Geschiedenis");
        specialisaties.add("Aardrijkskunde");
        specialisaties.add("Lichamelijke Opvoeding");
    }

    public void addSpecialisatie(String specialisatie) {
        if (!specialisaties.contains(specialisatie)) {
            specialisaties.add(specialisatie);
        } else {
            throw new IllegalArgumentException("Specialisatie already exists");
        }
    }

    public void removeSpecialisatie(String specialisatie) {
        if (specialisaties.contains(specialisatie)) {
            specialisaties.remove(specialisatie);
        } else {
            throw new IllegalArgumentException("Specialisatie not found");
        }
    }

    public List<String> getSpecialisaties() {
        return List.copyOf(specialisaties); // Returns an unmodifiable copy
    }

}
