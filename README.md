# Run Client 

Step 1: Build image -(docker build -t <docker_image_name>:<tag_name> . )

Step 2: RUn the image with command - (docker run -p 8080:5173 <docker_image_name>)

run on local host : http://localhost:8080/


# Run server 

Compose and up the docker-compose.yml 

Run the dbservice first and then run backend image to get the backend kick start runing
