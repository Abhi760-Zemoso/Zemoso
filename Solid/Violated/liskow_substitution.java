//Liskow Substitution
abstract public class Student{
    abstract public void addBook();
    abstract public boolean checkLimit();
}
public class UGStudent extends Student{
    private String name;
    private String Id;
    private ArrayList<Book> Books;
    private int Limit=4;
    //getters and setters  

    public void addBook(){

        Book b=new Book();
        //get details of book and set in b add it to Books
    }

    public boolean checkLimit(){
        //code
    }
}

public class PGStudent extends Student{
    
    private String name;
    private String Id;
    private ArrayList<Book> Books;
   
    //getters and setters  

    public void addBook(){

        Book b=new Book();
        //get details of book and set in b add it to Books
    }

    public boolean checkLimit(){
        //not neede as there is no need limit for PG Students
    }

}
