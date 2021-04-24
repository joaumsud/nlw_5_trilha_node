import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";


http.listen(3333, () => console.log("Server is running on  port 3333"));
//app.listen(3333, () => console.log("Server is running on  port 3333"));

/**
Aprendendo sobre rotas, não necessário mais após a utilização do arquivo routes.ts
app.get("/", (request, response) => {
    return response.json({
        message: "Olá NLW 05!"
    });
});
app.post("/", (request, response) => {
    return response.json({
        message: "Usuário salvo com sucesso!"
    })

});*/



