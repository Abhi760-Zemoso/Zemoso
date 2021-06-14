abstract class Student{
    abstract public void addBook(Book b);
    abstract public boolean checkLimit();
}

public class UGStudent extends Student{
    private String name;
    private String Id;
    private ArrayList<Book> Books;
    private int Limit=4;
    //getters and setters  

    //Dependancy Inversion
    public void addBook(Book b){
        //add b to Books
    }
    public boolean checkLimit(){
        //code
    }
}


public class PGStudent extends Student{
    private String name;
    private String Id;
    private ArrayList<Book> Books;
    private int Limit=3;
    //getters and setters  

    //Dependancy Inversion
    public void addBook(Book b){
        //add b to Books
    }
    public boolean checkLimit(){
        //code
    }
}

//Open, Closed
public class CheckLimit{
    public boolean check(Student s){
        return s.checkLimit();
    }
}