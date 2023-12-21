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
        <div className="h-8 w-8 relative">
            <Image 
                src={matchingSVGPath}
                layout="fill"
                alt={techStack}
                loading="lazy"
            />
        </div>
    )
}