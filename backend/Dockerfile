FROM openjdk:11.0.15-jre

WORKDIR /server

COPY ./nfast/build/libs/nfast-0.0.1-SNAPSHOT.jar server.jar

COPY ./nfast/src/main/resources/server/application.properties application.properties

ENTRYPOINT ["java", "-jar", "server.jar", "-Dspring.config.location=./application.properties"]
