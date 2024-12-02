import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class MyServlet extends HttpServlet {

  public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
    
    // Get the session object
    HttpSession session = request.getSession();
    
    // Check if this is a new session
    boolean isNewSession = session.isNew();
    
    // If this is a new session, set a counter to 1
    if (isNewSession) {
      session.setAttribute("counter", 1);
    }
    
    // If this is not a new session, increment the counter
    else {
      int counter = (int) session.getAttribute("counter");
      session.setAttribute("counter", counter + 1);
    }
    
    // Write the response
    response.setContentType("text/html");
    PrintWriter out = response.getWriter();
    out.println("<html><body>");
    out.println("<h1>Session Example</h1>");
    out.println("<p>This is " + (isNewSession ? "a new" : "an existing") + " session.</p>");
    out.println("<p>The session counter is " + session.getAttribute("counter") + ".</p>");
    out.println("</body></html>");
  }
}
