abstract public class Student{
    abstract public void addBook(Book b);

}
public class UGStudent extends Student{
    private String name;
    private String Id;
    private ArrayList<Book> Books;
    private int Limit=4;

    //getters and setters  

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

    //getters and setters  

    public void addBook(Book b){
        //add b to Books
    }
    //getter and setter
}
