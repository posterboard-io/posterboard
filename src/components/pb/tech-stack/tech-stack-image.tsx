import Image from "next/image"
import { Terminal } from "lucide-react"
import PythonImage from "~/../public/svg/langs/python.svg"
import TypeScriptImage from "~/../public/svg/langs/typescript.svg"
import JavaScriptImage from "~/../public/svg/langs/javascript.svg"
import cImage from "~/../public/svg/langs/c.svg"
import cPlusPlusImage from "~/../public/svg/langs/c++.svg"
import JavaImage from "~/../public/svg/langs/java.svg"
import CSSImage from "~/../public/svg/langs/css.svg"
import goImage from "~/../public/svg/langs/go.svg"
import nodeJSImage from "~/../public/svg/langs/nodejs.svg"
import kotlinImage from "~/../public/svg/langs/kotlin.svg"
import scalaImage from "~/../public/svg/langs/scala.svg"
import htmlImage from "~/../public/svg/langs/html.svg"
import csharpImage from "~/../public/svg/langs/csharp.svg"
import rustImage from "~/../public/svg/langs/rust.svg"
import rubyImage from "~/../public/svg/langs/ruby.svg"
import dartImage from "~/../public/svg/langs/dart.svg"
import phpImage from "~/../public/svg/langs/php.svg"
import swiftImage from "~/../public/svg/langs/swift.svg"
import zigImage from "~/../public/svg/langs/zig.svg"
import luaImage from "~/../public/svg/langs/lua.svg"
import elixirImage from "~/../public/svg/langs/elixir.svg"
import haskellImage from "~/../public/svg/langs/haskell.svg"
import rImage from "~/../public/svg/langs/r.svg"
import objcImage from "~/../public/svg/langs/objc.svg"
import vueImage from "~/../public/svg/frameworks/vue.svg"
import svelteImage from "~/../public/svg/frameworks/svelte.svg"
import djangoImage from "~/../public/svg/frameworks/django.svg"
import springImage from "~/../public/svg/frameworks/spring.svg"
import expoImage from "~/../public/svg/frameworks/expo.svg"
import laravelImage from "~/../public/svg/frameworks/laravel.svg"
import fastapiImage from "~/../public/svg/frameworks/fastapi.svg"
import phoenixImage from "~/../public/svg/frameworks/phoenix.svg"
import aspnetImage from "~/../public/svg/frameworks/net.svg"
import perlImage from "~/../public/svg/langs/perl.svg"

import mariadbImage from "~/../public/svg/dbs/mariadb.svg"
import mongodbImage from "~/../public/svg/dbs/mongodb.svg"
import postgresImage from "~/../public/svg/dbs/postgresql.svg"
import cassandraImage from "~/../public/svg/dbs/cassandra.svg"
import mysqlImage from "~/../public/svg/dbs/mysql.svg"
import redisImage from "~/../public/svg/dbs/redis.svg"
import oracleImage from "~/../public/svg/dbs/oracle.svg"

import awsImage from "~/../public/svg/infra/aws.svg"
import azureImage from "~/../public/svg/infra/azure.svg"
import googleCloudImage from "~/../public/svg/infra/gcp.svg"

import reactImage from "~/../public/svg/frameworks/react.svg"
import angularImage from "~/../public/svg/frameworks/angular.svg"

export default function TechStackImage({ techStack }: { techStack: string }) {

    let matchingSVGPath = ""

    if (techStack === "ASP.NET") {
        matchingSVGPath = aspnetImage.src
    }

    if (techStack === "Perl") {
        matchingSVGPath = perlImage.src
    }    

    if (techStack === ".NET") {
        matchingSVGPath = aspnetImage.src
    }

    if (techStack === ".NET Core") {
        matchingSVGPath = aspnetImage.src
    }

    if (techStack === "Phoenix") {
        matchingSVGPath = phoenixImage.src
    }

    if (techStack === "FastAPI") {
        matchingSVGPath = fastapiImage.src
    }

    if (techStack === "Laravel") {
        matchingSVGPath = laravelImage.src
    }

    if (techStack === "Expo") {
        matchingSVGPath = expoImage.src
    }

    if (techStack === "Spring Boot") {
        matchingSVGPath = springImage.src
    }

    if (techStack === "Django") {
        matchingSVGPath = djangoImage.src
    }

    if (techStack === "Svelte") {
        matchingSVGPath = svelteImage.src
    }

    if (techStack === "Vue.js") {
        matchingSVGPath = vueImage.src
    }

    if (techStack === "Zig") {
        matchingSVGPath = zigImage.src
    }

    if (techStack === "Objective-C") {
        matchingSVGPath = objcImage.src
    }

    if (techStack === "Lua") {
        matchingSVGPath = luaImage.src
    }

    if (techStack === "Elixir") {
        matchingSVGPath = elixirImage.src
    }

    if (techStack === "Haskell") {
        matchingSVGPath = haskellImage.src
    }

    if (techStack === "R") {
        matchingSVGPath = rImage.src
    }

    if (techStack === " R ") {
        matchingSVGPath = rImage.src
    }

    if (techStack === "Swift") {
        matchingSVGPath = swiftImage.src
    }

    if (techStack === "PHP") {
        matchingSVGPath = phpImage.src
    }

    if (techStack === "Dart") {
        matchingSVGPath = dartImage.src
    }

    if (techStack === "Ruby") {
        matchingSVGPath = rubyImage.src
    }

    if (techStack === "C#") {
        matchingSVGPath = csharpImage.src
    }

    if (techStack === "Rust") {
        matchingSVGPath = rustImage.src
    }

    if (techStack === "Python") {
        matchingSVGPath = PythonImage.src
    }

    if (techStack === "TypeScript") {
        matchingSVGPath = TypeScriptImage.src
    }

    if (techStack === "JavaScript") {
        matchingSVGPath = JavaScriptImage.src
    }

    if (techStack === " C ") {
        matchingSVGPath = cImage.src
    }

    if (techStack === "C") {
        matchingSVGPath = cImage.src
    }

    if (techStack === "C++") {
        matchingSVGPath = cPlusPlusImage.src
    }

    if (techStack === "Java") {
        matchingSVGPath = JavaImage.src
    }

    if (techStack === "CSS") {
        matchingSVGPath = CSSImage.src
    }

    if (techStack === "Go") {
        matchingSVGPath = goImage.src
    }    

    if (techStack === "Node.js") {
        matchingSVGPath = nodeJSImage.src
    }

    if (techStack === "Kotlin") {
        matchingSVGPath = kotlinImage.src
    }

    if (techStack === "Scala") {
        matchingSVGPath = scalaImage.src
    }

    if (techStack === "HTML") {
        matchingSVGPath = htmlImage.src
    }

    if (techStack === "React") {
        matchingSVGPath = reactImage.src
    }

    if (techStack === "Angular") {
        matchingSVGPath = angularImage.src
    }

    if (techStack === "AWS") {
        matchingSVGPath = awsImage.src
    }

    if (techStack === "Azure") {
        matchingSVGPath = azureImage.src
    }

    if (techStack === "Google Cloud") {
        matchingSVGPath = googleCloudImage.src
    }

    if (techStack === "MongoDB") {
        matchingSVGPath = mongodbImage.src
    }

    if (techStack === "PostgreSQL") {
        matchingSVGPath = postgresImage.src
    }

    if (techStack === "Cassandra") {
        matchingSVGPath = cassandraImage.src
    }

    if (techStack === "MariaDB") {
        matchingSVGPath = mariadbImage.src
    }

    if (techStack === "MySQL") {
        matchingSVGPath = mysqlImage.src
    }

    if (techStack === "Redis") {
        matchingSVGPath = redisImage.src
    }

    if (techStack === "Oracle") {
        matchingSVGPath = oracleImage.src
    }

    if (techStack === "Unknown") {
        return (
            <div className="flex flex-row">
                <Terminal className="mr-2 h-4 w-4 text-orange-500"/>
                <p>{techStack}</p>
            </div>
        )
    }

    return (        
        <div className="h-8 w-8 relative hover:animate-bounce">
            <Image 
                src={matchingSVGPath}
                layout="fill"
                alt={techStack}
                loading="lazy"
            />
        </div>
    )
}