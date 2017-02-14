FROM microsoft/dotnet:1.1.0-sdk-msbuild-rc4
EXPOSE 80

WORKDIR /app
COPY . .
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]

CMD ["dotnet", "run"]

