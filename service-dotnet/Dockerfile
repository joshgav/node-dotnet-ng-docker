FROM microsoft/dotnet:1.1.1-sdk
EXPOSE 80

WORKDIR /app
COPY . .
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]

CMD ["dotnet", "run"]

