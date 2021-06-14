//Interface segregated
public interface DisplayBook{
    void displayBook();
}
public interface DisplayStudent{
    void displayStudent();
}


public class DisplayStudentDetails implements Display{
    public void displayStudent(){
        //code
    }
}

public class DisplayBookDetails implements Display{
    public void displayBook(){
        //code
    }
}