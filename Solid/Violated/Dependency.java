public class Student{
    private String name;
    private String Id;
    private ArrayList<Book> Books;
    private int Limit=4;
    //getters and setters  

    //Dependancy Inversion
    public void addBook(){

        Book b=new Book();
        //get details of book and set in b add it to Books
    }

    public boolean checkLimit(){
        //code
    }
}

