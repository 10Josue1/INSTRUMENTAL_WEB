<%-- 
    Document   : contacto.jsp
    Created on : 28/10/2023, 13:45:03
    Author     : samuel
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
        <link href="css/stform.css" rel="stylesheet" type="text/css"/> 
        <title>JSP Page</title>
    </head>
    <body>
        
        
         <!-- FORMULARIO -->
                                <footer class="footer" id="7">
                                    <section class="footer__container container">

                                        <div class="bodyy">

                                            <form class="form" action="https://formspree.io/f/xayazjqq" method="POST">
                                                <div class="form__container">
                                                    <h2 class="form__title">Contáctame</h2>
                                                    <input type="text" class="form__input" placeholder="Nombre" name="name">
                                                    <input type="email" class="form__input" placeholder="Email" name="_replyto">
                                                    <textarea class="form__input form__input--message" placeholder="Mensaje"
                                                              name="message"></textarea>
                                                    <input type="submit" value="Enviar" class="form__cta">
                                                </div>
                                            </form>
                                        </div>
                                    </section>
    </body>
</html>
