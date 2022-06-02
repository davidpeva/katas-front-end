//CLASE DEL 30-05-22
//VAMOS A CREAR EL PRIMER LOADER PARA TRABAJAR EL HTML

//Al crear el new HtmlWebPack.... y el Minicss se me genera esto automaticamente porq ya lo instale y esta en el package
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//import { ModuleFilenameHelpers } from "webpack";



//LOADERS
//Son unas reglas que le dicen a el WebPack como generar paquetes

module.exports = {
    module : {
        rules : [ 
            //1er Loader
            //ACA SE CARGAN LOS LOADERS A TRAVES DE OBJETOS
            {
                //ESTE SIGNIFICA EN MI SIST DE ARCHIVOS Q VOY A BUSCAR en este caso mis archivos html
                //ESTO ES UNA EXPRESION REGULAR
                test: /\.html$/,
                
                //EL USE ES YA LOS ENCONTRE LOS HTML QUE HAGO CON ELLOS
                //OSEA QUE LOADER VOY A APLICAR
                use : [
                    {
                        loader: "html-loader",
                        //este options son opciones extra para ayudar al loader
                        //el minimize lo que hace es pone el archivo pequeño
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            //2do loader
            {
                //que busque los archivos scss o en los css
                test: /.(scss|css)$/,
                //que hace con ellos
                use: [
                    //si uso varios loader los debo de poner en orden de ejecucion como en css
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    //ACA SE CARGAN LOS PLIGINS DE WEBPACK AL NIVEL DE MODULES DONDE CIERRA EL MODULES
    plugins: [
        //SE CREAN CREANDO INSTANCIAS COMO EN EL POO
        new HtmlWebpackPlugin({
            //Este es donde le digo q coja el primer html la base no importa si tengo mas coge el principal la ruta
            template: "./index.html",
            //este es opcional web paack ya piensa que trabaja desde la carpeta dist y no hay que especificar el nombre
            //ya lo coge automati camente
            //filename: 
        }),
        new MiniCssExtractPlugin({
            //con la sintaxis [name].css webpack me le pone a mis archivos css el nombre q el quiera 
            filename: "[name].css",
            //este me separa el css por pedazos o fragmentos y dependiendo de lo q este viendo solo carga la parte del css q estoy viendo
            chunkFilename: "[id].css"
        })
    ]
}