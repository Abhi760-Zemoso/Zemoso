public class UGStudent{
    private String name;
    private String Id;
    private ArrayList<Book> Books;
    int Limit=4
    //getters and setters  

    public void addBook(){

        Book b=new Book();
        //get details of book and set in b add it to Books
    }

    public boolean checkLimit(){
        //code
    }
}

public class PGStudent{
    private String name;
    private String Id;
    private ArrayList<Book> Books;
    int Limit=2;
    //getters and setters  

    public void addBook(){

        Book b=new Book();
        //get details of book and set in b add it to Books
    }

    public boolean checkLimit(){
        //code
    }
}

//Open, Closed
public class CheckLimit{
    public boolean checkStudent(UGStudent s){
        //code
    }
    public boolean checkPGStudent(PGStudent s){
        //code
    }
}
