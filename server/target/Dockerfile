# Use the official OpenJDK 17 image as the base image
FROM openjdk:17

# Set the working directory inside the container
WORKDIR /app

# Copy the application JAR file from the project root
COPY dod-0.0.1-SNAPSHOT.jar /app/

# Specify the command to run your application
CMD ["java", "-jar", "dod-0.0.1-SNAPSHOT.jar"]
