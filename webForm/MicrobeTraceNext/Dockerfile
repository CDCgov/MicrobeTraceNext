
FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS base
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS publish

EXPOSE 80

WORKDIR /app
# Copy everything else and build
COPY . .


COPY --from=base 	. .



ENTRYPOINT ["dotnet", "MicrobeTraceNext.dll"]
